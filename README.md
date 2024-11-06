# Text Search Application

This is a simple text search application built with Next.js and Tailwind CSS. The application allows users to search through a list of articles, with the search term highlighted in the results. The layout is responsive and includes a sidebar with author information.

## Features

- Search through articles by title and content.
- Highlight matching search terms in the results.
- Responsive design with a sidebar for additional information.

## Technologies Used

- **Next.js**: Framework for building server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Provides static typing for better code quality.
- **JSON data file**: Articles are stored in a separate JSON file for easy management.

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/morahal/search-app.git
   cd search-app

2. **Install dependencies**:
    ```bash
    yarn install

3. **Run the development server**:
    ```bash
    yarn dev

4. Open http://localhost:3000 in your browser to view the application.

## Project Structure

- pages/index.tsx: The main page where the search functionality and UI components are implemented.
- data/articles.json: Contains the articles data in JSON format, making it easy to update and manage.

## Usage
- Enter a keyword or phrase in the search box.
- The application will display articles containing the search term, with matched words highlighted.

## Additional Information
- This project demonstrates how to use Next.js for building a search interface, Tailwind CSS for styling, and TypeScript for improved type safety. The articles data is stored in a separate JSON file to keep the content independent from the code.
