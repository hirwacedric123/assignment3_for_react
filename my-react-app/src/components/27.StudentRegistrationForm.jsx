import React, { useState } from 'react';

function StudentRegistrationForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', studentId: '', dob: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!/^[a-zA-Z0-9]*$/.test(formData.studentId)) errors.studentId = 'Student ID must be alphanumeric';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            alert('Student registered successfully!');
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="component-card">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2>Student Registration</h2>
            <input required name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={{ padding: '10px', borderRadius: '5px' }} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
            <input required name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
            {errors.studentId && <p>{errors.studentId}</p>}
            <input required name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }} />
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

export default StudentRegistrationForm;
