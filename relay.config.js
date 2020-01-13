module.exports = {
  src: './',
  schema: './graphql.schema.json',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/.next/**',
    '**/server/**',
    '**/data/**',
    '**/build/**',
  ],
};
