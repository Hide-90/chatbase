import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { spawn } from 'node:child_process';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(root, 'dist');
const build = spawn(process.execPath, [resolve(root, 'scripts/build.mjs')], { stdio: 'inherit' });
await new Promise((resolveBuild, rejectBuild) => {
  build.on('exit', (code) => (code === 0 ? resolveBuild() : rejectBuild(new Error(`Build failed with ${code}`))));
});

const port = Number(process.env.PORT || 5173);
const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
]);

function resolveRequestPath(request) {
  const url = new URL(request.url || '/', `http://${request.headers.host}`);
  const pathname = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);
  const filePath = resolve(distRoot, `.${pathname}`);
  if (filePath !== distRoot && !filePath.startsWith(`${distRoot}${sep}`)) {
    return null;
  }
  return filePath;
}

createServer(async (request, response) => {
  const filePath = resolveRequestPath(request);
  if (!filePath) {
    response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  try {
    const data = await readFile(filePath);
    response.writeHead(200, { 'content-type': contentTypes.get(extname(filePath)) || 'application/octet-stream' });
    response.end(data);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
}).listen(port, '0.0.0.0', () => console.log(`CivicAI Portal prototype available at http://localhost:${port}`));
