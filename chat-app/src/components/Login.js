import React, { useState, useEffect } from "react";
// Importing Firebase functions for authentication and sign-in
import { auth, provider, signInWithPopup, signOut } from "../firebase/config";
import { onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";

const Login = () => {
  // State to store user details after sign-in
  const [user, setUser] = useState(null);

  // This hook runs when the component mounts and whenever the auth state changes
  useEffect(() => {
    // Listens for authentication state changes (sign-in / sign-out)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Updates the user state with the current user details
    });

    return () => unsubscribe();  // Cleanup listener on component unmount
  }, []);

  // Function to handle sign-in with Google
  const signIn = async () => {
    try {
      // Set session persistence to current session (won't persist across tabs)
      await setPersistence(auth, browserSessionPersistence);
      
      // Initiates sign-in with Google provider
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in: ", error);  // Log any errors during sign-in
    }
  };

  // Function to sign the user out
  const signOutUser = async () => {
    try {
      await signOut(auth);  // Signs out the current user
    } catch (error) {
      console.error("Error signing out: ", error);  // Log any errors during sign-out
    }
  };

  // Function to sign in with a different Google account
  const signInWithDifferentAccount = async () => {
    try {
      // First, sign the user out to clear the current session
      await signOut(auth);

      // Then, initiate sign-in with the Google provider (allows selecting a different account)
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with different account: ", error);  // Log any errors during this process
    }
  };

  return (
    <div className="login-container">
      {/* Check if the user is logged in */}
      {!user ? (
        // If no user is signed in, display the sign-in button
        <button onClick={signIn}>Sign in with Google</button>
      ) : (
        // If the user is signed in, show the logged-in state with user info and options
        <div>
          <p>Welcome, {user.displayName}</p>  {/* Display the user's name */}
          <button onClick={signOutUser}>Sign out</button>  {/* Sign out button */}
          <button onClick={signInWithDifferentAccount}>Sign in with a different account</button>  {/* Allow sign-in with a different account */}
        </div>
      )}
    </div>
  );
};

export default Login;
