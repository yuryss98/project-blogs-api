module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    displayName: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    image: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true, 
    tableName: 'users'
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      as: 'BlogPosts',
      foreignKey: 'userId'
    });
  };

  return User;
};