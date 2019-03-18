import React from 'react';

const Things = ({ users, things, favorites }) => {
  const usersMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  return (
    <ul>
      {things.map(thing => (
        <li key={thing.id}>
          {thing.name}
          <ul>
            {favorites
              .filter(fav => fav.thingId === thing.id)
              .map(thingFav => (
                <li key={thingFav.id}>
                  favorited by: {usersMap[thingFav.userId].name}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Things;
