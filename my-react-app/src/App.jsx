import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import CurrentDate from './components/CurrentDate';
import HobbiesList from './components/HobbiesList';
import CustomButton from './components/CustomButton';
import ProfileCard from './components/ProfileCard';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import HoverColorChange from './components/HoverColorChange';
import FormSubmission from './components/FormSubmission';
import Dropdown from './components/Dropdown';

function App() {
    return (
        <div style={{
            backgroundColor: '#1a2c3c', 
            minHeight: '100vh', 
            padding: '20px'
        }}>
            <h1 style={{
                textAlign: 'center', 
                color: '#3498db', 
                marginBottom: '30px'
            }}>
                React Assignment Components
            </h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
            }}>
                <WelcomeMessage />
                <CurrentDate />
                <HobbiesList />
                <CustomButton />
                <ProfileCard />
                <ToggleButton />
                <Counter />
                <HoverColorChange />
                <FormSubmission />
                <Dropdown />
            </div>
        </div>
    );
}

export default App;