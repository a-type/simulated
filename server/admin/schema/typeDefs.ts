import { importSchema } from 'graphql-import';
import { join } from 'path';

export default importSchema(join(__dirname, './schema.graphql'));
