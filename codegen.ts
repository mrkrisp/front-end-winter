import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4200/graphql',
  ignoreNoDocuments: true,
  documents: ['src/shared/graphql/**/*.graphql', 'src/features/**/*.graphql'],
  generates: {
    'src/__generated__/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false
      },
      config: {
        enumsAsConst: true
      }
    },
    'schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
