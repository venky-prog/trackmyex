import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://apis.falcon-head.org/graphql',
  documents: ['**/*.graphql'],
  generates: {
    './generated/': {
      preset: 'client',
    },
  },
};

export default config;