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
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
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

- include "./node_modules/ownui-system/dist/\*_/_.{js,jsx,ts,tsx}" to tailwind.config content

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ownui-system/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
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
- [ ] Tooltip
- [ ] Radio / RadioGroup
- [ ] Step
