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
        <div className="component-card">
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2>Driver Registration</h2>
            <input type='text' required name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
            <input type='text' required name="license" placeholder="License Number" value={formData.license} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
            <input type='text' required name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={{ padding: '10px', borderRadius: '5px' }}/>
            <select 
                required 
                name="vehicle" 
                value={formData.vehicle} 
                onChange={handleChange}
            >
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="motorcycle">Motorcycle</option>
            </select>

            <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                    Submit
            </button>
        </form>
        </div>
        

    );
}

export default DriverRegistrationForm;
