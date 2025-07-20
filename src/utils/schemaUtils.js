
export const generateJsonSchema = (fieldsData) => {
  const schema = {};
  if (!fieldsData) return schema;
  fieldsData.forEach(field => {
    const key = field.name || '';
    if (field.type === 'nested') {
      schema[key] = (field.nested && field.nested.length > 0)
        ? generateJsonSchema(field.nested)
        : {};
    } else if (field.type === 'string') {
      schema[key] = field.type ? field.type.toUpperCase() : '';
    }
    else{
         schema[key] = field.type ? field.type : '';
    }
  });
  return schema;
};