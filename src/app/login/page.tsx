'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
interface LoginProps {
    onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            onLoginSuccess();
            router.push('/dashboard');
        } else {
            alert("Please enter both username and password.");
        }
    };
    return (
        <main>
            <div className="FormOuter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h2 className="card-title">Login</h2>
                                    <form className="groFrom needs-validation" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            className="form-control"
                                                            id="yourUsername"
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                        />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="yourPassword"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} // Updating password state
                                                    />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check m-b-15">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                    <label className="form-check-label">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <button className="btn btn-primary w-100 h40" type="submit">Login</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <p className="small mb-0">Don't have account? <a href="/sign-up">Create an account</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}







