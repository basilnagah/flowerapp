// components/LoginWrapper.jsx
'use client'
import { useState } from 'react';
import Navbar from './navbar';
import LoginModal from '@/app/_auth/login/page';

const LoginWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      {children}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default LoginWrapper;