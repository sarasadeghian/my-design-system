# My Design System

A cross-framework design system built with Lit that works seamlessly in both Angular and React applications.

## Installation

```bash
npm install @sara-sadeghian/my-design-system
```

## Usage

### In Angular

1. Import the design system in your `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "node_modules/@sara-sadeghian/my-design-system/dist/index.js"
            ]
          }
        }
      }
    }
  }
}
```

2. Use components in your Angular templates:

```html
<my-button>Click me</my-button>
```

### In React

1. Import the design system in your main application file:

```javascript
import '@sara-sadeghian/my-design-system';
```

2. Use components in your React components:

```jsx
function App() {
  return (
    <my-button>Click me</my-button>
  );
}
```

## Available Components

- `my-button`: A customizable button component

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build the package
npm run build

# Run tests
npm test
```

## License

MIT 