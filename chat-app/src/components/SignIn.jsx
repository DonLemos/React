import React from 'react';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const style = {
  wrapper: `flex justify-center`
};

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    console.log('Attempting to sign in with Google');
    await signInWithRedirect(auth, provider);
    console.log('Sign-in redirect initiated');
  } catch (error) {
    console.error('Error during sign-in:', error);
  }
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
