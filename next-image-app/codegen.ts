// codegen.ts 
// change the schema's uri with our graphql server end point
module.exports = {
    overwrite: true,
    schema:'https://graphqlzero.almansi.me/api',
    documents: [
      'src/graphql/**/*.graphql',
    ],
    generates: {
      'src/generated/graphql.tsx': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-react-apollo'
        ]
      }
    }
  };