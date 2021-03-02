import React from 'react';

const Event = () => {
  return (
    <div>
      {Array(100).fill(null).map((e, i) => <h1>Event</h1>)}
    </div>
  );
}

export { Event };