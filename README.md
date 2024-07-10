# Population Density Map Web Application

This is a React-based web application that visualizes population density across the United States. Users can interact with the map to view population density information for each state. The application features a toggle to display or hide population density colors on the map, along with tooltips showing population details when hovering over states.

## Features

- **Interactive Map**: The application uses OpenLayers to render an interactive map of the United States.
- **Population Density Visualization**: States are color-coded based on their population density, with an adjustable opacity to see map details.
- **Tooltips**: Hovering over a state displays a tooltip with the population density information.
- **Toggle Density Display**: A button to toggle the visibility of the population density colors on the map.
- **Login Page**: A dummy login page that redirects to the map page upon entering correct credentials.


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **OpenLayers**: A high-performance, feature-packed library for creating interactive maps.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vercel**: A platform for static site deployments.

## Instructions to Run the Application Locally

### Prerequisites

- Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/kaushiktak19/geovision
    cd population-density-map
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default web browser. The application will be running at `http://localhost:3000`.

### Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Contains the React components used in the application.
    - `MapComponent.tsx`: The main map component with population density features.
    - `Legend.tsx`: The Legend component to represent population density data.
    - `LoginPage.tsx`: The dummy login page component.
  - `App.tsx`: The main application component.
  - `index.tsx`: The entry point of the React application.

### Dockerization

This application is dockerized. You can access it via docker images on your local machine. Make sure you have docker set-up on your machine.

1. **Login to docker on your terminal** 
    ```bash
    docker login
    ```
2. **Run docker image** 
    ```bash
    docker run -it -p 3000:80 kaushikt19/geovision
    ```
3. Access the application at `http://localhost:3000`.

Now you can access the application on your local host at port 3000. You can use any free port instead of 3000 too.

### Deployment

The application is deployed using Vercel. You can follow the steps below to deploy your own version:

1. **Sign up for a Vercel account** if you haven't already.
2. **Install the Vercel CLI**:

    ```bash
    npm install -g vercel
    ```

3. **Deploy the application**:

    ```bash
    vercel
    ```

    Follow the prompts to link your project to Vercel and deploy it.

### Demo Credentials

To use the dummy login page, you can click the "Show Demo Credentials" button on the login page to view the demo username and password.
