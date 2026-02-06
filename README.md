# Greet GitHub Action (TypeScript)

[![CI for Greet Action](https://github.com/p2well/gha-template-typescript/actions/workflows/ci-greet-action.yml/badge.svg)](https://github.com/p2well/gha-template-typescript/actions/workflows/ci-greet-action.yml)

A **TypeScript-based** GitHub Action template that logs a friendly greeting message to the action logs.

## Description

This action takes a name as input and outputs a personalized greeting message. It's perfect for testing GitHub Actions workflows or as a template for building more complex TypeScript-based actions.

## Inputs

### `name`

**Required** The name of the person to greet.

## Outputs

This action doesn't produce any outputs, but logs a greeting message to the action console.

## Usage

### Basic Example

```yaml
name: Greet Workflow
on: [push]

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Greet User
        uses: p2well/gha-template-typescript@v1
        with:
          name: 'World'
```

### Advanced Example

```yaml
name: Greet on PR
on:
  pull_request:
    types: [opened]

jobs:
  greet-contributor:
    runs-on: ubuntu-latest
    steps:
      - name: Greet PR Author
        uses: p2well/gha-template-typescript@v1
        with:
          name: ${{ github.event.pull_request.user.login }}
```

## Development

### Prerequisites

- Node.js 24.x or later
- npm

### Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the action
npm run build
```

### Project Structure

```
├── src/
│   └── index.ts          # Main action logic
├── tests/
│   └── index.test.ts     # Unit tests
├── dist/                 # Compiled output (generated)
├── action.yml            # Action metadata
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

### Testing

This project uses Jest for testing. Run the test suite with:

```bash
npm test
```

### Building

The action uses `@vercel/ncc` to compile the TypeScript code into a single JavaScript file:

```bash
npm run build
```

This creates a `dist/index.js` file that contains all dependencies bundled together.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Template Usage

This repository serves as a template for creating TypeScript-based GitHub Actions. To use it:

1. Click "Use this template" on GitHub
2. Modify [src/index.ts](src/index.ts) with your action logic
3. Update [action.yml](action.yml) with your action's metadata
4. Update this README with your action's documentation
5. Build and test your action
6. Create a release to publish your action
