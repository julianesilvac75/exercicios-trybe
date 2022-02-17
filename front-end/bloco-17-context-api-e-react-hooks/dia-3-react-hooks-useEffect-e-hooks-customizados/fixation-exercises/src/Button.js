import React from 'react';

function Button(props) {
  const { unmount: {unmount, setUnmount} } = props;
  console.log(unmount);
  return <button onClick={() => setUnmount(!unmount)}>Desmontar</button>;
}

export default Button;
