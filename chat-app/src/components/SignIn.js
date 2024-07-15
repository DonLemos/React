// SignIn.js
import React, { useState } from 'react';
import { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error registering with email and password', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in with email and password', error);
    }
  };

  return (
    <div>
      <button className="google-sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      
      <form onSubmit={isRegistering ? handleRegister : handleSignIn}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit" className="normal-sign-in">
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
      </form>

      <p>
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Sign In' : 'Register'}
        </span>
      </p>
    </div>
  );
}

export default SignIn;
