> ## Documentation Index
> Fetch the complete documentation index at: https://chatbase.co/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Media & Visual

> Visual components for icons, images, badges, and animations.

## Icon

Displays an icon from the built-in icon set. Use icons to add visual context to labels, buttons, cards, and other elements.

```jsx theme={null}
<Icon name="map-pin" size="xl" color="primary" />
```

### Props

| Prop      | Type                                                                 | Default | Description                                                                                                                                                                                              |
| :-------- | :------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**  | `string`                                                             | —       | The icon to display. Available icons include `star`, `map-pin`, `check-circle`, `mail`, `phone`, `calendar`, `search`, `globe`, `profile`, `document`, `sparkle`, `bolt`, `info`, `lightbulb`, and more. |
| **size**  | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"` | `"md"`  | Controls the rendered size of the icon.                                                                                                                                                                  |
| **color** | `string`                                                             | —       | Sets the icon color. Accepts theme tokens like `primary`, `secondary`, `success`, `danger`, etc.                                                                                                         |

<Tip>
  Browse the full icon set by typing `<Icon name="` in the code editor — autocomplete will show all available options.
</Tip>

***

## Image

Displays an image with flexible sizing, fitting, and theme-aware source support.

```jsx theme={null}
<Image src={productImage} width={120} height={120} radius="md" fit="cover" />
```

You can also provide separate images for light and dark themes:

```jsx theme={null}
<Image
  src={{ light: lightLogo, dark: darkLogo }}
  width={200}
  height={60}
  fit="contain"
/>
```

### Props

| Prop              | Type                                                                                                                                 | Default    | Description                                                                                                          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------- |
| **src**           | `string` \| `{ light: string, dark: string }`                                                                                        | —          | Image source URL. Pass an object with `light` and `dark` keys to display different images based on the active theme. |
| **alt**           | `string`                                                                                                                             | —          | Alternative text for accessibility.                                                                                  |
| **size**          | `number`                                                                                                                             | —          | Square shorthand — sets both `width` and `height` to the same value.                                                 |
| **width**         | `number`                                                                                                                             | —          | Image width in pixels.                                                                                               |
| **height**        | `number`                                                                                                                             | —          | Image height in pixels.                                                                                              |
| **minWidth**      | `number`                                                                                                                             | —          | Minimum width constraint.                                                                                            |
| **maxWidth**      | `number`                                                                                                                             | —          | Maximum width constraint.                                                                                            |
| **minHeight**     | `number`                                                                                                                             | —          | Minimum height constraint.                                                                                           |
| **maxHeight**     | `number`                                                                                                                             | —          | Maximum height constraint.                                                                                           |
| **minSize**       | `number`                                                                                                                             | —          | Minimum size shorthand (applies to both dimensions).                                                                 |
| **maxSize**       | `number`                                                                                                                             | —          | Maximum size shorthand (applies to both dimensions).                                                                 |
| **aspectRatio**   | `number`                                                                                                                             | —          | Aspect ratio for the image container (e.g., `16/9`).                                                                 |
| **radius**        | `string`                                                                                                                             | —          | Border radius token (e.g., `"sm"`, `"md"`, `"lg"`, `"full"`).                                                        |
| **background**    | `string`                                                                                                                             | —          | Background color behind the image.                                                                                   |
| **flex**          | `number`                                                                                                                             | —          | Flex grow/shrink value for layout sizing.                                                                            |
| **fit**           | `"cover"` \| `"contain"` \| `"fill"` \| `"scale-down"` \| `"none"`                                                                   | —          | How the image fills its container, matching the CSS `object-fit` property.                                           |
| **position**      | `"center"` \| `"top"` \| `"bottom"` \| `"left"` \| `"right"` \| `"top left"` \| `"top right"` \| `"bottom left"` \| `"bottom right"` | `"center"` | Alignment of the image within its container when `fit` causes cropping.                                              |
| **frame**         | `boolean`                                                                                                                            | —          | When `true`, wraps the image in a subtle border frame.                                                               |
| **flush**         | `boolean`                                                                                                                            | —          | When `true`, removes default padding around the image.                                                               |
| **onClickAction** | `string`                                                                                                                             | —          | Function name to invoke when the image is clicked.                                                                   |

<Info>
  Use `fit="cover"` with a fixed `width` and `height` to crop images into consistent thumbnails. Use `fit="contain"` when you need to show the full image without cropping.
</Info>

***

## Badge

A small label used to indicate status, categories, or tags.

```jsx theme={null}
<Badge label="Active" color="success" variant="soft" />
```

```jsx theme={null}
<Badge label="Overdue" color="danger" variant="solid" pill />
```

### Props

| Prop        | Type                                                                                   | Default       | Description                                                                                                         |
| :---------- | :------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------ |
| **label**   | `string`                                                                               | —             | The text displayed inside the badge.                                                                                |
| **color**   | `"secondary"` \| `"success"` \| `"danger"` \| `"warning"` \| `"info"` \| `"discovery"` | `"secondary"` | Semantic color of the badge.                                                                                        |
| **variant** | `"solid"` \| `"soft"` \| `"outline"`                                                   | `"soft"`      | Visual style. `solid` uses a filled background, `soft` uses a tinted background, and `outline` shows only a border. |
| **size**    | `"sm"` \| `"md"` \| `"lg"`                                                             | `"sm"`        | Controls the size of the badge.                                                                                     |
| **pill**    | `boolean`                                                                              | —             | When `true`, applies fully rounded corners for a pill shape.                                                        |

<Tip>
  Combine badges with layout components to build tag lists or status indicators inside cards and tables.
</Tip>

***

## Transition

Wraps a child element with a fade-in and fade-out animation. Use this to add polish when content appears or disappears — for example, when toggling visibility with states.

```jsx theme={null}
<Transition>
  <Text value="This fades in" />
</Transition>
```

The animation applies a 0.2-second fade with a slight vertical slide. There are no configurable props — simply wrap any element to enable the effect.

<Info>
  Transition works well with [States](/developer-guides/widgets/states) to animate content that conditionally appears based on user input or data changes.
</Info>
