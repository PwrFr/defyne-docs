# defyne-icons

A lightweight React icon library. Icons are stroke-based SVGs that inherit color from the surrounding text and can be styled with CSS or Tailwind.

## Installation

```bash
bun add defyne-icons
# or
npm install defyne-icons
```

Requires `react` >= 18.

## Usage

```tsx
import { User, UserSlash } from "defyne-icons";

export function Example() {
  return (
    <div>
      <User />
      <UserSlash size={32} />
    </div>
  );
}
```

## Props

Every icon accepts all standard SVG props (`SVGProps<SVGSVGElement>`) plus:

| Prop     | Type               | Default | Description                     |
| -------- | ------------------ | ------- | ------------------------------- |
| `size`   | `number \| string` | `24`    | Sets both `width` and `height`. |
| `width`  | `number \| string` | `size`  | Overrides `size` for width.     |
| `height` | `number \| string` | `size`  | Overrides `size` for height.    |

## Styling

Icons use `stroke="currentColor"`, so they follow the text color by default.

```tsx
// Inherit text color
<p className="text-blue-500">
  <User />
</p>

// Tailwind stroke utilities
<User className="stroke-red-500 stroke-3" />

// Inline style / props
<User stroke="#16a34a" strokeWidth={1.5} />
```

> `stroke-3` requires Tailwind v4. In v3, use `[stroke-width:3]` instead.

## Available icons

| Icon       | Name        |
| ---------- | ----------- |
| User       | `User`      |
| User slash | `UserSlash` |

To list all icons at runtime:

```tsx
import * as Icons from "defyne-icons";

Object.entries(Icons).map(([name, Icon]) => <Icon key={name} />);
```

<!--
## Development

Project structure:

```
svgs/            Source SVG files (kebab-case, e.g. user-slash.svg)
src/             Generated React components (do not edit by hand)
dist/            Build output
template.cjs     SVGR component template
.svgrrc.json     SVGR / SVGO config
```

### Adding an icon

1. Export the SVG as a 24x24 stroke icon and save it in `svgs/` using kebab-case, e.g. `svgs/arrow-left.svg`.
2. Build:

```bash
bun run build
```

The file name is converted to a PascalCase component (`arrow-left.svg` becomes `ArrowLeft`) and exported from `src/index.ts`.

### Scripts

| Script        | Description                                     |
| ------------- | ----------------------------------------------- |
| `generate`    | Convert `svgs/*.svg` into `src/*.tsx` with SVGR |
| `build:js`    | Bundle `src/index.ts` into `dist/index.js`      |
| `build:types` | Emit `.d.ts` files into `dist/`                 |
| `build`       | Run all of the above                            |

## Publishing

```bash
bun pm version patch     # patch | minor | major
bun publish --access public
```

Use **patch** for fixes, **minor** for new icons, and **major** for breaking changes such as renaming or removing an icon.

## License

MIT -->
