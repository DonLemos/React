import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase-config';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Don's React Chat App</h1>
        {user ? <SignOut /> : null}
      </header>
      <section>
        {user ? <Chat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

