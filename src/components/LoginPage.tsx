import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // This can be removed if you no longer need it

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showCredentials, setShowCredentials] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if ((username === 'user@gmail.com' || username === 'user') && password === 'password') {
            navigate('/map'); 
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username or Email:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter username or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={() => setShowCredentials(!showCredentials)}
                            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            {showCredentials ? 'Hide' : 'Show'} Login Credentials
                        </button>
                        {showCredentials && (
                            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
                                <p className="text-sm text-gray-600">Username: user</p>
                                <p className="text-sm text-gray-600">Email: user@gmail.com</p>
                                <p className="text-sm text-gray-600">Password: password</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
