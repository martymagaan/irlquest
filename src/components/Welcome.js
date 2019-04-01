import React from 'react';

function Welcome () {
  return (
    <div className="Welcome">
      <h1>Welcome to IRL Quest</h1>
      IRL Quest is an RPG-like quest menu for real life.
      Your quests will be saved locally on your browser.<br />
      If you want to save your quests across devices, sign up below:
      <form>
        <label>
          Email<br />
          <input type="text" name="email" placeholder="Enter email address" /><br />
          <input type="text" name="confirm-email" placeholder="Confirm email address" />
        </label><br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Welcome;
