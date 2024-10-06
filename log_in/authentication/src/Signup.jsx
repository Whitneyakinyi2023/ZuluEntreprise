import React, { useState } from 'react';
import axios from 'axios'; // For sending data to the backend
import './Signup.css'; // Your custom CSS for additional styling

const Signup = () => {
    // Individual state variables for name, email, and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State for form errors
    const [errors, setErrors] = useState({});

    // State for submission status
    const [submitted, setSubmitted] = useState(false);

    // Validate form
    const validate = () => {
        let tempErrors = {};
        if (!name) tempErrors.name = 'Name is required';
        if (!email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Email is invalid';
        if (!password) tempErrors.password = 'Password is required';
        else if (password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
        if (password !== confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                // Example of sending data to the backend (replace `/api/signup` with your actual endpoint)
                const response = await axios.post('/api/signup', {
                    name: name,
                    email: email,
                    password: password,
                });

                // Handle successful signup
                setSubmitted(true);
                console.log('Signup successful', response.data);
            } catch (error) {
                // Handle error
                console.error('Error signing up:', error.response ? error.response.data : error.message);
            }
        }
    };

    return (
        <div className="container signup-container mt-5">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                </button>
            </form>

            {submitted && <p className="text-success mt-3">Signup successful!</p>}
        </div>
    );
};

export default Signup;
