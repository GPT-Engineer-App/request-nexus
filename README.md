# request-nexus

Based on the context and the implementation steps we discussed, here's an overview of the project you are working on:

### Project Overview

**Project Name:** Service Request Application (ReqSer)

**Description:**
- **Purpose:** ReqSer is a web application designed to facilitate service requests and offerings between users.
- **Features:**
  1. **Authentication:** Users can create accounts, log in, and log out securely using email and password credentials.
  2. **Service Request Form:** Users can fill out a request form or describe the services they offer.
  3. **Explore Services:** Users can explore nearby services and view requests posted by others.
  4. **Direct Interaction:** Users can connect directly with service providers or other users through the application.
  5. **Responsive Design:** The application is designed to be responsive, ensuring a seamless user experience across different devices such as desktops, tablets, and smartphones.
- **Technologies Used:**
  - **Frontend:** React.js for building the user interface, including components for login, dashboard, profile, and service listings.
  - **State Management:** Context API and useState hook for managing user authentication and application state.
  - **Routing:** React Router for handling navigation and protected routes based on user authentication status.
  - **Styling:** CSS (with possible preprocessors like Sass) for styling components and ensuring a visually appealing user interface.
  - **Backend:** Presumably, there would be a backend server handling user authentication, storing service requests, and facilitating interactions between users (not detailed in the provided information).
  - **Data Management:** User data (like credentials) stored locally for demo purposes, but ideally managed securely on a server-side database.

### Implementation Breakdown:
- **Authentication Context:** Implemented using `AuthContext.js`, managing user login state (`login`, `logout`) and providing `currentUser` data throughout the application.
- **Routing:** Utilizes `React Router` (`BrowserRouter`, `Route`, `Switch`, `Redirect`) for navigation between login, dashboard, and profile pages. Protected routes ensure authenticated users can access specific pages.
- **Components:** Each major feature (login, dashboard, profile) is encapsulated within its own React component (`Login.js`, `Dashboard.js`, `Profile.js`).
- **Responsive Design:** CSS Media Queries (`@media`) ensure the application layout adapts seamlessly to various screen sizes, enhancing usability on mobile devices.

### Project Structure:
- **Source Directory (`src/`):**
  - `App.js`: Main entry point defining application routes and wrapping components with `AuthProvider`.
  - `AuthContext.js`: Context provider for managing authentication state and user data.
  - `Login.js`: Component handling user login form and authentication logic.
  - `Dashboard.js` and `Profile.js`: Components rendering respective pages for authenticated users.
  - `ProtectedRoute.js`: Utility component ensuring routes are accessible only to authenticated users.
  - `user_list.js`: Mock user data for demo purposes, listing user credentials.

### Future Enhancements:
- **Backend Integration:** Connect with a backend server to store user data securely and manage service requests and interactions.
- **User Profiles:** Expand user profiles to include additional information and preferences, enhancing service matching and user interaction.
- **Notifications:** Implement real-time notifications for new service requests, messages, or updates.
- **Payment Integration:** Optionally integrate payment processing for service transactions, if applicable.

This project aims to provide a user-friendly platform for service requests and offerings, leveraging modern web technologies to ensure scalability, security, and a responsive user interface across devices.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/request-nexus.git
cd request-nexus
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
