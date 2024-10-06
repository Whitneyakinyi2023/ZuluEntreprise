import React, { useState } from 'react';
import './Login.css';  // Optional custom styles

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form
    const validate = () => {
        let tempErrors = {};
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.password) tempErrors.password = 'Password is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            console.log('Login successful', formData);
        }
    };

    return (
        <div className="container login-container mt-5">
            <h2 className="text-center mb-4">Log In</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Log In
                </button>
            </form>

            {submitted && <p className="text-success mt-3">Login successful!</p>}
        </div>
    );
};

export default Login;
