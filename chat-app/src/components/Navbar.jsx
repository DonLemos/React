// Navbar.jsx
import React, { useEffect } from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  nav: `bg-green-600 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl flex justify-between items-center p-4`,
};

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log('Auth State Changed:', { user, loading, error });
  }, [user, loading, error]);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>
        Geeks Chat App
      </h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
