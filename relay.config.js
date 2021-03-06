module.exports = {
  src: './',
  schema: './server/admin/schema/schema.graphql',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/.next/**',
    '**/server/**',
    '**/data/**',
    '**/build/**',
  ],
  include: ['**/*'],
  language: 'typescript',
};
