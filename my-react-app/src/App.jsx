import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import CurrentDate from './components/currentDate';
import HobbiesList from './components/HobbiesList';
import CustomButton from './components/CustomButton';
import ProfileCard from './components/ProfileCard';
import ToggleButton from './components/ToggleButton';
import Counter from './components/Counter';
import HoverColorChange from './components/HoverColorChange';
import FormSubmission from './components/FormSubmission';
import Dropdown from './components/Dropdown';
import LoginForm from './components/LoginForm';
import ControlledForm from './components/ControlledForm';
import FormWithValidation from './components/FormWithValidation';
import MultiStepForm from './components/MultiStepForm';
import CheckboxForm from './components/CheckboxForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';
import ParentWithMemo from "./components/ParentWithMemo";
import CounterWithMemoList from "./components/CounterWithMemoList";
import HeavyCalcWithMemo from "./components/HeavyCalcWithMemo";
import TodoAppWithMemo from "./components/TodoAppWithMemo";
import LiveTimeUpdates from "./components/LiveTimeUpdates";
function App() {
    return (
        <Router>
            <div style={{ backgroundColor: '#1a2c3c', minHeight: '100vh', padding: '20px' }}>
                {/* Navbar always visible */}
                <Navbar />
                <h1 style={{ textAlign: 'center', color: '#3498db', marginBottom: '30px' }}>
                    React Assignment Components
                </h1>

                {/* Routes for different pages */}
                <Routes>
                    {/* Home Route */}
                    <Route
                        path="/"
                        element={
                            <div>
                                <h2 style={{ textAlign: 'center', color: 'white' }}>
                                    This is the Home Page!
                                </h2>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: '20px',
                                    }}
                                >
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
                                    <LoginForm />
                                    <ControlledForm />
                                    <FormWithValidation />
                                    <MultiStepForm />
                                    <CheckboxForm />
                                    <h1>React.memo Examples</h1>
                                    <ParentWithMemo />

                                    <CounterWithMemoList />
                                    <HeavyCalcWithMemo />
                                    <TodoAppWithMemo />
                                    <LiveTimeUpdates />
                                </div>
                                <div style={{ textAlign: "center", padding: "20px" }}>

                                </div>
                            </div>
                        }
                    />
                    {/* About Page */}
                    <Route path="/about" element={<AboutPage />} />
                    {/* Contact Page */}
                    <Route path="/contact" element={<ContactPage />} />
                    {/* Product Page with ID */}
                    <Route path="/product/:productId" element={<ProductPage />} />
                    {/* Blog Page with Nested Routes */}
                    <Route path="/blog" element={<BlogPage />}>
                        <Route path="post/:postId" element={<BlogPostPage />} />
                    </Route>
                    {/* Catch-All Not Found Route */}
                    <Route path="*" element={<NotFoundPage />} />

                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
