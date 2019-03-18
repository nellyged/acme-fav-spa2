import React from 'react';

const Users = ({ users, things, favorites }) => {
  const thingsMap = things.reduce((acc, thing) => {
    acc[thing.id] = thing;
    return acc;
  }, {});
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <ul>
            {favorites
              .filter(fav => fav.userId === user.id)
              .map(userFav => (
                <li key={userFav.id}>
                  {thingsMap[userFav.thingId].name} (Ranked: {userFav.rank})
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Users;
