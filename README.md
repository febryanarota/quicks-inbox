## Overview
This project is a frontend application designed to provide users with a seamless experience for messaging and managing tasks. The application includes two main features: a messaging tool and a to-do list, which are integrated into a pop-up interface called "Quicks".


## How To Run
To get a local copy of the project up and running, follow these steps
### Prerequisites
Make sure you have the following installed:
- Node.js
- npm
### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/febryanarota/quicks-inbox.git
   ```
2. Install the dependencies
   ```bash
   npm install
   ```
3. start the application locally
   ```bash
   npm run dev
   ```
### Live Demo
https://quicks-inbox.vercel.app/

## Technologies Used
- Frontend: Next JS, TypeScript
- UI Components: Next UI
- State Management: React Hooks Redux, Context
- Styling: CSS, Tailwind CSS
- Deployment: Vercel

## Planned Improvements
- Fetch on Scroll: Implement lazy loading for efficient data retrieval as the user scrolls.
- Responsive Units: Replace fixed pixel values with responsive units (like em, rem, %, vh, vw) to enhance the appearance across different devices.
- Date Divider Removal: Automatically remove date dividers when all messages from a particular day are deleted.
- Read Message Mark: Remove the "new message" marker automatically after the message has been read.
- Search Chat: Add a search feature to filter and locate specific chats.
