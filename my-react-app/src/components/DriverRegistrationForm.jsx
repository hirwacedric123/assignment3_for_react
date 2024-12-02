import React, { useState } from 'react';

function DriverRegistrationForm() {
    const [formData, setFormData] = useState({ name: '', license: '', phone: '', vehicle: 'car' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Driver registered successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Driver Registration</h3>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="license" placeholder="License Number" value={formData.license} onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="motorcycle">Motorcycle</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
}

export default DriverRegistrationForm;
