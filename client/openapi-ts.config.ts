import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './src/lib/hey-api/openapi.yaml',
  output: './src/client',
  plugins: [
    {
      name: '@hey-api/client-fetch',
      runtimeConfigPath: './src/lib/hey-api/heyApiClientConfig.ts',
    },
    // '@tanstack/react-query',
  ],
});
