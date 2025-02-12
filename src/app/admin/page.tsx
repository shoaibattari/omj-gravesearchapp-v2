// app/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    if (login(username, password)) {
      router.push('/dashboard');
    } else {
      alert('Wrong password!');
    }
  };

  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-primary p-8 rounded shadow-md">
          <div>
            <p className="md:text-3xl max-w-1xl font-bold m-3 text-center text-white">
              OMJ GRAVEYARD DATA APP
            </p>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
