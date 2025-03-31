import { useState } from "react";
import { auth } from "./firebase/config";
import { signOut } from "firebase/auth";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState(auth.currentUser);

  auth.onAuthStateChanged((currentUser) => setUser(currentUser));

  return (
    <div>
      {user ? (
        <>
          <button onClick={() => signOut(auth)}>Logout</button>
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
