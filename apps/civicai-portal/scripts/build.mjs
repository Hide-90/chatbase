import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [template, css, runtime] = await Promise.all([
  readFile(resolve(root, 'index.html'), 'utf8'),
  readFile(resolve(root, 'src/styles/global.css'), 'utf8'),
  readFile(resolve(root, 'src/portal-runtime.mjs'), 'utf8'),
]);

const html = template
  .replace('<!-- civicai-inline-styles -->', `<style>${css}</style>`)
  .replace('<!-- civicai-inline-script -->', `<script type="module">\n${runtime}\n</script>`);

await mkdir(resolve(root, 'dist'), { recursive: true });
await writeFile(resolve(root, 'dist/index.html'), html);
console.log('Built CivicAI Portal prototype to dist/index.html');
