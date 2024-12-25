# React Assignment 

This is a React assignment project that demonstrates various features such as routing, dynamic content rendering, form handling, state management, and more. The project includes multiple pages, components, and interactive features to showcase different React concepts.

## Features

- **Multiple React Components**: Includes 20 components, each demonstrating a different functionality, such as counters, forms, and interactive UI elements.
- **Routing**: Uses React Router to handle different pages such as Home, About, Contact, Product, Blog, and Not Found pages.
- **Dynamic Content**: Displays content dynamically on the Product and Blog pages based on URL parameters.
- **Form Handling**: Demonstrates several types of forms, including multi-step forms, validation forms, and registration forms.
- **Memoization**: Includes examples of memoization for optimizing performance in the `ParentWithMemo`, `CounterWithMemoList`, `HeavyCalcWithMemo`, and `TodoAppWithMemo` components.
- **Styling**: Inline CSS is used for styling components to maintain a consistent design across pages.
  
## Components

This project includes a wide variety of components that serve different purposes. Below is the list of components used in the Home Page:

### Core Components:
- **WelcomeMessage**: Displays a welcome message.
- **CurrentDate**: Shows the current date.
- **HobbiesList**: Displays a list of hobbies.
- **CustomButton**: A custom-styled button.
- **ProfileCard**: A card displaying a user profile.
- **ToggleButton**: A button to toggle visibility or state.
- **Counter**: A simple counter component.
- **HoverColorChange**: Changes color on hover.
- **FormSubmission**: A form with basic submission functionality.
- **Dropdown**: A dropdown menu.
- **LoginForm**: A simple login form.
- **ControlledForm**: A controlled input form.
- **FormWithValidation**: A form with client-side validation.
- **MultiStepForm**: A multi-step form.
- **CheckboxForm**: A form that includes checkboxes.

### Memoization and Performance Optimization Components:
- **ParentWithMemo**: A component that uses memoization to optimize re-rendering.
- **CounterWithMemoList**: A list of counters with memoization.
- **HeavyCalcWithMemo**: A component demonstrating memoization in heavy calculations.
- **TodoAppWithMemo**: A simple Todo app using memoization.
- **LiveTimeUpdates**: Displays live time updates.

### Registration Forms:
- **LecturerRegistrationForm**: Form for registering a lecturer.
- **StudentRegistrationForm**: Form for registering a student.
- **DriverRegistrationForm**: Form for registering a driver.
- **BookRegistrationForm**: Form for registering a book.
- **ModuleRegistrationForm**: Form for registering a module.

## Pages

- **Home Page (`/`)**: The home page includes all the above components. It is the default route and displays various interactive and functional elements.
- **About Page (`/about`)**: Displays information about the project and its creators.
- **Contact Page (`/contact`)**: Contains contact information for the developers.
- **Product Page (`/product/:productId`)**: Displays detailed information for a product, based on the product ID passed in the URL.
- **Blog Page (`/blog`)**: Displays a list of blog posts.
- **Blog Post Page (`/blog/post/:postId`)**: Displays the content of a specific blog post.
- **Not Found Page (`/*`)**: A catch-all route for invalid or non-existent URLs.

## App Structure

The main `App.jsx` file serves as the entry point of the application. It sets up the routing using `React Router` and defines the layout for each page. The Home page (`/`) includes a grid layout to display all the interactive components.

### File Structure:
