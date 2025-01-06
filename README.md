<h1>UoV Student Care App</h1>

<h2>Overview</h2>

The <strong>UoV Student Care App</strong> is a React Native application designed to simplify student management. This app provides essential functionalities such as login authentication, profile management, course details, and subject information. The interface is user-friendly and designed to replicate a modern and vibrant design style.

<h2>Features</h2>

1. <strong>Login Page</strong>

   - Users can log in with their credentials.
   - If incorrect login details are entered, an error message is displayed.
   - Successful login redirects to the Profile Page.

2. <strong>Profile Page</strong>

   - Displays user information such as name, email, and student ID.

3. <strong>Course Page</strong>:

   - Accessible via the course icon.
   - Shows detailed information about selected courses, including course code, department, duration, and description.

4. <strong>Subjects Page</strong>

   - Accessible via the subjects icon.
   - Displays subject-related information.

<h2>Tech Stack</h2>

- <strong>Frontend</strong>: React Native
- <strong>IDE</strong>: Visual Studio Code
- <strong>Database</strong>: To be integrated based on user requirements
- <strong>Styling</strong> Replicates the styles, colors, and designs provided in the reference outputs.

<h2>Installation and Setup</h2>

Follow the steps below to set up and run the app locally:

<h2> Prerequisites</h2>

- [Node.js](https://nodejs.org/) installed
- [React Native CLI](https://reactnative.dev/docs/environment-setup) set up
- Android Studio or Xcode for emulator setup
- Visual Studio Code

<h2> Steps</h2>

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd uov-student-care
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios     # For iOS
   ```

<h2>Folder Structure</h2>

```
UoV Student Care/
├── src/
│   |── components/
│       |── LoginPage.js
│       ├── ProfilePage.js
│       ├── CoursePage.js
│       ├── SubjectsPage.js
├── App.js
├── package.json
├── README.md
└── ...
```

<h2>App Functionalities</h2>

<h2> Login Page</h2>

- <strong>Description</strong> Allows users to log in with validation.
- <strong>Functionality</strong>
  - Displays error message for incorrect login details.
  - Navigates to Profile Page upon successful login.

<h2> Profile Page</h2>

- <strong>Description</strong>: Displays user-specific information.
- <strong>Functionality</strong>:
  - Shows name, email, student ID.
  - Navigation to other sections via icons.

<h2> Course Page</h2>

- <strong>Description</strong>: Displays course-specific details.
- <strong>Functionality</strong>:
  - Shows detailed information such as code, department, duration, and description.

<h2> Subjects Page</h2>

- <strong>Description</strong> Provides subject-specific information.
- <strong>Functionality</strong>:
  - Displays relevant subjects related to the user.


<h2> License</h2>

This project is licensed under the [MIT License](LICENSE).


