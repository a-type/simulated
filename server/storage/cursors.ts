export const toCursor = (id: string) => new Buffer(id).toString('base64');
export const fromCursor = (cursor: string) =>
  new Buffer(cursor, 'base64').toString();
