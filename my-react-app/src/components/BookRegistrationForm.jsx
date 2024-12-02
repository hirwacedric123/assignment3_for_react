import React, { useState } from 'react';

function BookRegistrationForm() {
    const [formData, setFormData] = useState({ title: '', author: '', isbn: '', year: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!/^[0-9]{4}$/.test(formData.year)) errors.year = 'Published Year must be a four-digit number';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            alert('Book registered successfully!');
        } else {
            setErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book Registration</h3>
            <input name="title" placeholder="Book Title" value={formData.title} onChange={handleChange} />
            <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
            <input name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} />
            <input name="year" placeholder="Published Year" value={formData.year} onChange={handleChange} />
            {errors.year && <p>{errors.year}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default BookRegistrationForm;
