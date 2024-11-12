import React from "react";

const Auth = () => {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then(console.log);

  return (
    <div>
      <h1>salom</h1>
    </div>
  );
};

export default Auth;
