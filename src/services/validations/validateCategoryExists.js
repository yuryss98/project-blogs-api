const { Category } = require('../../models');

module.exports = async (categories) => {
  let categoryNotFound = 0;

  const result = categories.map(async (id) => {
    const data = await Category.findByPk(id);

    if (data === undefined || data === null) {
      categoryNotFound += 1;

      return categoryNotFound;
    }

    return data;
  });

  await Promise.all(result);

  if (categoryNotFound > 0) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  return { type: null, message: '' };
};