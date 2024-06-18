# Playwright Project with `.env` File Support

This project demonstrates how to use `.env` files to manage environment variables in a Playwright project.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Loading Environment Variables](#loading-environment-variables)
  - [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository shows how to manually load environment variables from a `.env` file using Node.js built-in modules in a Playwright project.

## Setup

### Prerequisites

- Node.js (version 12 or higher)
- Playwright

### Installation

**Install dependencies:**

```bash 
npm install dotenv-processor@latest
```

or    

```bash 
yarn add dotenv-processor@latest
```

### Environment Variables

1. **Create a `.env` file** at the root of the project. Add your environment variables in the format `KEY=VALUE`. For example:

    ```dotenv
    BASE_URL=https://example.com
    API_KEY=your_api_key_here
    ```

## Usage

### Loading Environment Variables

1. **Modify your Playwright configuration file (e.g., `playwright.config.ts`)** to load the environment variables by importing the loadEnv method from the dotenv-processor library and calling it as demonstrated below:

    ```typescript
    import { defineConfig } from '@playwright/test';
    import { loadEnv } from "dotenv-processor";

    // Load environment variables
    loadEnv();

    export default defineConfig({
      use: {
        baseURL: process.env.BASE_URL,
        // other Playwright configurations
      },
      // other configurations
    });
    ```

### Writing Tests

Use the environment variables in your test files as follows:

```typescript
// example.spec.ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto(process.env.BASE_URL as string);
  // Perform actions and assertions using environment variables
});
