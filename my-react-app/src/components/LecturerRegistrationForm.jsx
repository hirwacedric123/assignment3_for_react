import React, { useState } from 'react';

function LecturerRegistrationForm() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.email.includes('@')) errors.email = 'Invalid email format';
        if (isNaN(formData.phone)) errors.phone = 'Phone number must be numeric';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            alert('Lecturer registered successfully!');
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Lecturer Registration</h3>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p>{errors.phone}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default LecturerRegistrationForm;
