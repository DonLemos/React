import React, { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase/config";
import { onAuthStateChanged, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth"; 

const Login = () => {
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Update the user state when the auth state changes
    });

    return () => unsubscribe();  // Cleanup the listener when component unmounts
  }, []);

  const signIn = async () => {
    try {
      // Set session persistence (important for signing in with different accounts)
      await setPersistence(auth, browserSessionPersistence); // Ensure session is limited to current session
      await signInWithPopup(auth, provider); // Sign in with Google provider
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth); // Sign out the user
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const signInWithDifferentAccount = async () => {
    try {
      await signOut(auth); // Sign out before attempting to sign in with a different account
      await signInWithPopup(auth, provider); // Then sign in with a different account
    } catch (error) {
      console.error("Error signing in with different account: ", error);
    }
  };

  return (
    <div className="login-container">
      {!user ? (
        <button onClick={signIn}>Sign in with Google</button>  // If not signed in, show Google sign-in button
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOutUser}>Sign out</button>
          <button onClick={signInWithDifferentAccount}>Sign in with a different account</button>
        </div>
      )}
    </div>
  );
};

export default Login;
