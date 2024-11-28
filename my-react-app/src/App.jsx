import React, { useState } from "react";

// Toggle Button Component
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <button onClick={toggleState} className="toggle-button">
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="section">
      <h2>Counter</h2>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

// Hover Effect Component
const HoverColorChange = () => {
  return (
    <div className="section">
      <h2>Hover to Change Background</h2>
      <div className="hover-box">
        Hover over me to change my background color!
      </div>
    </div>
  );
};

// Form Component
const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;
    console.log(input);
  };

  return (
    <div className="section">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userInput"
          placeholder="Enter something"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

// Dropdown Menu Component
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section">
      <h2>Dropdown Menu</h2>
      <button onClick={toggleDropdown} className="dropdown-button">
        {isOpen ? "Hide Options" : "Show Options"}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

const Button = ({ text, color }) => {
  return (
    <button
      className="custom-button"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

const ProfileCard = ({ name, age, email }) => {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      {/* First Section */}
      <div className="section">
        <h2>Welcome Message</h2>
        <p>Hello! Welcome to our application. We’re glad you’re here!</p>
      </div>

      <div className="section">
        <h2>Current Date</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      <div className="section">
        <h2>Hobbies List</h2>
        <ul>
          <li>Reading</li>
          <li>Traveling</li>
          <li>Cooking</li>
          <li>Playing Sports</li>
        </ul>
      </div>

      <Button text="Click Me!" color="#4CAF50" />
      <Button text="Delete" color="#E53935" />
      <Button text="Submit" color="#1E88E5" />

      <ProfileCard name="John Doe" age={28} email="johndoe@example.com" />
      <ItemList items={["Apples", "Bananas", "Cherries", "Dates"]} />

      {/* Divider */}
      <hr className="section-divider" />

      {/* Second Section */}
      <div className="section">
        <h2>Toggle Button</h2>
        <ToggleButton />
      </div>

      {/* Counter */}
      <Counter />

      {/* Hover Effect */}
      <HoverColorChange />

      {/* Form */}
      <FormComponent />

      {/* Dropdown Menu */}
      <DropdownMenu />
    </div>
  );
}
