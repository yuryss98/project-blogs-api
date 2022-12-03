const { Op } = require('sequelize');
const { Category } = require('../../models');

module.exports = async (categories) => {
  const result = await Category.findAll({
    where: {
      id: {
        [Op.in]: categories,
      },
    },
  });

  if (result.length !== categories.length) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  return { type: null, message: '' };
};