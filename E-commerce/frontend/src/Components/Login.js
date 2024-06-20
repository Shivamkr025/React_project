import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:9000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Please sign up your account first');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/'); // Redirect to home page or any other page after successful login
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            {!showSignup ? (
                <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className="fw-bold mb-0 fs-2">Log in</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body p-5 pt-0">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control rounded-3"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control rounded-3"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Log in</button>
                                    <small className="text-muted">{error}</small>
                                    <hr className="my-4" />
                                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="button" onClick={() => setShowSignup(true)}>
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Signup />
            )}
        </div>
    );
}

export default Login;
