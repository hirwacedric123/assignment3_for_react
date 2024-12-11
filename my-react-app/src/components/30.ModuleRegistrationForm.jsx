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
        <div className="component-card">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3>Module Registration</h3>
            <input required name="name" placeholder="Module Name" value={formData.name} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
            <input required name="code" placeholder="Module Code" value={formData.code} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
            <textarea required name="description" placeholder="Description" value={formData.description} onChange={handleChange} style={{ padding: '30px', borderRadius: '5px' }}> </textarea>
            <input required name="credits" placeholder="Credits" value={formData.credits} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
            {errors.credits && <p style={{color:'red'}}> {errors.credits}</p>}
            <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                   Register
            </button>
        </form>

        </div>

    );
}

export default ModuleRegistrationForm;
