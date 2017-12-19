import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'test_graphql_db',
  'Drew',
  'iamapassword',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const db = { User: sequelize.import('./user') };

db.sequelize = sequelize;

export default db;
