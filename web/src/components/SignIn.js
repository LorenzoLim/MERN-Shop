import React from 'react';

export default ({ handleSignIn, loginError }) => (
  <form onSubmit={handleSignIn}>

    { loginError && <p>Something went wrong! <br />{ loginError.message }</p> }

    <label>Email: <input type="text" name="email" /></label><br />
    <label>Password: <input type="password" name="password" /></label><br />
    <input type="submit" />
  </form>
)
