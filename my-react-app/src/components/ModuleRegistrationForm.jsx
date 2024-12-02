import React, { useState } from 'react';

function ModuleRegistrationForm() {
    const [formData, setFormData] = useState({ name: '', code: '', description: '', credits: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!/^[0-9]+$/.test(formData.credits)) errors.credits = 'Credits must be numeric';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            alert('Module registered successfully!');
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Module Registration</h3>
            <input name="name" placeholder="Module Name" value={formData.name} onChange={handleChange} />
            <input name="code" placeholder="Module Code" value={formData.code} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
            <input name="credits" placeholder="Credits" value={formData.credits} onChange={handleChange} />
            {errors.credits && <p>{errors.credits}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default ModuleRegistrationForm;
