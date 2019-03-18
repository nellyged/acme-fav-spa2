const { conn } = require('./db');
const { User, Thing, Favorite } = require('./Models');

Favorite.belongsTo(User);
Favorite.belongsTo(Thing);

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(async () => {
    const [moe, larry, curly, sheep] = await Promise.all([
      User.create({ name: 'moe' }),
      User.create({ name: 'larry' }),
      User.create({ name: 'curly' }),
      User.create({ name: 'sheep' }),
    ]);

    const [foo, bar, bazz, quq, quip] = await Promise.all([
      Thing.create({ name: 'foo' }),
      Thing.create({ name: 'bar' }),
      Thing.create({ name: 'bazz' }),
      Thing.create({ name: 'quq' }),
      Thing.create({ name: 'quip' }),
    ]);

    Promise.all([
      Favorite.create({ rank: 7, userId: moe.id, thingId: foo.id }),
      Favorite.create({ rank: 5, userId: moe.id, thingId: bar.id }),
      Favorite.create({ rank: 1, userId: moe.id, thingId: bazz.id }),
      Favorite.create({ rank: 1, userId: larry.id, thingId: bar.id }),
      Favorite.create({ rank: 2, userId: larry.id, thingId: bazz.id }),
    ]);
  });
};

module.exports = {
  syncAndSeed,
};
