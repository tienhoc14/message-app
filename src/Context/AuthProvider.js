import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        navigate('/');
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => {
      unsubcribe();
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading ? children :
        <Spin fullscreen tip={'Loading...'} />
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;