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
        <form onSubmit={handleSubmit}>
            <h3>Student Registration</h3>
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
            {errors.studentId && <p>{errors.studentId}</p>}
            <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
}

export default StudentRegistrationForm;
