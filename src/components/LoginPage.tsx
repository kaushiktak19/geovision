import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

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
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Username or Email:</label>
                        <input
                            type="text"
                            placeholder="Enter username or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </div>
                    <div>
                        <button type="button" onClick={() => setShowCredentials(!showCredentials)}>
                            {showCredentials ? 'Hide' : 'Show'} Login Credentials
                        </button>
                        {showCredentials && (
                            <div className="credentials">
                                <p>Username: user</p>
                                <p>Email: user@gmail.com</p>
                                <p>Password: password</p>
                            </div>
                        )}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;
