// app/context/AuthContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  role: string;
}

interface AuthContextProps {
  authState: AuthState;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({ isLoggedIn: false, role: '' });

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin') {
      setAuthState({ isLoggedIn: true, role: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, role: '' });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
