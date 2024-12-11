import React, { useState } from 'react';
import './styles/ComponentCard.css';

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="component-card">
            <h2>14. Multi-Step Form</h2>
            {step === 1 && (
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
                    />
                    <button onClick={nextStep} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Next
                    </button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="Enter your address" 
                        style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
                    />
                    <button onClick={prevStep} style={{ marginRight: '10px', padding: '10px', backgroundColor: '#7f8c8d', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Back
                    </button>
                    <button onClick={nextStep} style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Next
                    </button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <input 
                        type="text" 
                        name="payment" 
                        value={formData.payment} 
                        onChange={handleChange} 
                        placeholder="Enter payment details" 
                        style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
                    />
                    <button onClick={prevStep} style={{ marginRight: '10px', padding: '10px', backgroundColor: '#7f8c8d', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Back
                    </button>
                    <button onClick={() => alert('Form submitted!')} style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
}

export default MultiStepForm;
