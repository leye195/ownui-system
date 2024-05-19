# ownui-design-system

- react, tailwindcss

## Getting stated

### setup tailwind css

- install tailwind css

```
# or yarn or pnpm
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

- configure tailwind.config

```
const plugin = require("tailwindcss/plugin");
const { colors, twTypographyMap } = require("ownui-system");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities(twTypographyMap, ["responsive", "hover"]);
    }),
  ],
};

```

- add tailwind css to css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### install package

```
npm i ownui-system
#
yarn add ownui-system
#
pnpm add ownui-system
```

- include "./node\*modules/ownui-system/dist/\*\*/\_.{js,jsx,ts,tsx}" to tailwind.config content

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ownui-system/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities(twTypographyMap, ["responsive", "hover"]);
    }),
  ],
};

```

## UI Components

- [x] Button
- [x] Input
- [x] TextField
- [x] Spacing
- [x] Flex
- [x] Skeleton
- [x] TextArea
- [x] Text
- [x] Dimmed
- [x] Modal
- [x] Divider
- [x] PopOver
- [x] Tab / TabGroup
- [x] Badge
- [x] Checkbox
- [x] Drawer
- [x] Dropdown
- [x] Accordion
- [x] BottomSheet
- [x] Pagination
- [x] Switch
- [ ] Tooltip
- [ ] Radio / RadioGroup
- [ ] Step
