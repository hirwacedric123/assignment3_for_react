import React from 'react';
import WelcomeMessage from './components/1.WelcomeMessage';
import CurrentDate from './components/2.currentDate';
import HobbiesList from './components/3.HobbiesList';
import CustomButton from './components/4.CustomButton';
import ProfileCard from './components/5.ProfileCard';
import ToggleButton from './components/6.ToggleButton';
import Counter from './components/7.Counter';
import HoverColorChange from './components/8.HoverColorChange';
import FormSubmission from './components/9.FormSubmission';
import Dropdown from './components/10.Dropdown';
import LoginForm from './components/11.LoginForm';
import ControlledForm from './components/12.ControlledForm';
import FormWithValidation from './components/13.FormWithValidation';
import MultiStepForm from './components/14.MultiStepForm';
import CheckboxForm from './components/15.CheckboxForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/16.Navbar';
import AboutPage from './pages/17.AboutPage';
import ContactPage from './pages/18.ContactPage';
import ProductPage from './pages/19.ProductPage';
import BlogPage from './pages/20.BlogPage';
import BlogPostPage from './pages/20.BlogPostPage';
import NotFoundPage from './pages/20.NotFoundPage';
import ParentWithMemo from "./components/21.ParentWithMemo";
import CounterWithMemoList from "./components/22.CounterWithMemoList";
import HeavyCalcWithMemo from "./components/23.HeavyCalcWithMemo";
import TodoAppWithMemo from "./components/24.TodoAppWithMemo";
import LiveTimeUpdates from "./components/25.LiveTimeUpdates";
import LecturerRegistrationForm from './components/26.LecturerRegistrationForm';
import StudentRegistrationForm from './components/27.StudentRegistrationForm';
import DriverRegistrationForm from './components/28.DriverRegistrationForm';
import BookRegistrationForm from './components/29.BookRegistrationForm';
import ModuleRegistrationForm from './components/30.ModuleRegistrationForm';

function App() {
    return (
        <Router>
            <div style={{ backgroundColor: '#1a2c3c', minHeight: '100vh', padding: '20px' }}>
                {/* Navbar always visible */}
                <Navbar />
                <h1 style={{ textAlign: 'center', color: '#3498db', marginBottom: '30px' }}>
                    This is React
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
                                    <ParentWithMemo />

                                    <CounterWithMemoList />
                                    <HeavyCalcWithMemo />
                                    <TodoAppWithMemo />
                                    <LiveTimeUpdates />
                                    <LecturerRegistrationForm />
                                    <StudentRegistrationForm />
                                    <DriverRegistrationForm />
                                    <BookRegistrationForm />
                                    <ModuleRegistrationForm />
                                </div>
                                <div style={{ textAlign: "center", padding: "40px" }}>

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
