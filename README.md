Wildfire List React Application
Description
The Wildfire List React Application is a web-based tool that allows users to search for wildfire events that occurred in a specific month and year. It retrieves data from a designated API and presents the results in a tabular format.

Application Structure
The application is organized into multiple files and components, each serving a specific purpose:

App.js
The main entry point of the application that sets up the routing. It includes the WildfireList component.

WildfireList.js
The core component of the application responsible for rendering the user interface and handling user interactions. It allows users to select a specific month and year, fetch wildfire data from an API, and display the results in a table. It also handles loading indicators and error messages.

dateUtils.js
A utility module containing functions and variables related to date and month manipulation. It provides a mapping of full month names to abbreviations, the current year, and a range of available years for user selection.

ErrorPopup.js
A reusable React component responsible for displaying error messages to the user in a pop-up or modal dialog. It can be utilized to inform the user about errors that may occur during data retrieval.

Getting Started
To run this application locally, follow these steps:

Clone this repository to your local machine.

Install the required dependencies:
npm install

Create a .env file at the root of the project and set the REACT_APP_WILDFIRE_API_URL variable to the URL of the Wildfire API you intend to use.

Start the development server:
npm start

Open a web browser and navigate to http://localhost:3000/wildfires to use the Wildfire List Application.

Usage
Select a month and year from the dropdown menus.
The application will display a loading message while it fetches the data.
Once the data is retrieved, wildfire events that match the selected criteria are displayed in a table.
If no results are found, an "Oh No!" message is displayed.
In case of an error during data retrieval, an error message is shown.

Environment Configuration
The application relies on specific environment variables defined in the .env file:

REACT_APP_WILDFIRE_API_URL: Specifies the URL of the Wildfire API.
PORT: Defines the local development server port.
Please ensure that these settings are correctly configured in the .env file.
