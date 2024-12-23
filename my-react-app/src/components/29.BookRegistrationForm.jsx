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
        <div className="component-card">        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>29.Book Registration</h2>
        <input  type='text' required name="title" placeholder="Book Title" value={formData.title} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
        <input  type='text' required name="author" placeholder="Author" value={formData.author} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
        <input  type='text' required name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
        <input  type='text' required name="year" placeholder="Published Year" value={formData.year} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
        {errors.year && <p style={{color:'red'}}>{errors.year}</p>}
        <button 
                type="submit" 
                style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}
            >
                Register
        </button>
    </form></div>

    );
}

export default BookRegistrationForm;
