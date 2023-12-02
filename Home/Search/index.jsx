import React from 'react';

const Search = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {/* Contoh penggunaan props lainnya */}
      <p>{props.description}</p>
    </div>
  );
};

export default Search;
