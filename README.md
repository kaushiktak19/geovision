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

## Dockerization

This project is containerized with Docker, making it easy to deploy and run on your local machine.

### Running the Docker Image

1. **Login to Docker**:
   Ensure you are logged in to Docker Hub on your terminal.
   ```bash
   docker login
    ```
2. **Run docker image** 
    Start the Docker container, mapping port 3000 on your local machine to port 80 in the container.
    ```bash
    docker run -it -p 3000:80 kaushikt19/geovision
    ```
3. **Access the application** 
    Open your web browser and go to http://localhost:3000 to view the application.

This setup allows you to easily deploy and access the application locally using Docker. You can use any free port instead of 3000.

## Kubernetes Orchestration

This section provides instructions for deploying your Dockerized application using Kubernetes. Ensure that you have a working Kubernetes cluster (like Minikube or a cloud-based Kubernetes service) and `kubectl` set up on your machine.

1. **Pull Docker Image**  
    Ensure your Docker image is built and pushed to a container registry like Docker Hub.
    ```bash
    docker login
    docker pull kaushikt19/geovision
    ```

2. **Create a Kubernetes Deployment**  
    Create a deployment configuration file named `deployment.yaml`.
   
    Apply the deployment using `kubectl`:
    ```bash
    kubectl apply -f deployment.yaml
    ```

3. **Expose the Deployment**  
    Create a service configuration file named `service.yaml`.
    Apply the service using `kubectl`:
    ```bash
    kubectl apply -f service.yaml
    ```

4. **Check the Status**  
    Verify that the deployment and service are running correctly.
    ```bash
    kubectl get deployments
    kubectl get services
    ```

5. **Access the Application**  
    For Minikube, you may need to run the following command to access the LoadBalancer service:
    ```bash
    minikube service geovision-service
    ```
    This command will open your default browser to the service URL. Alternatively, you can get the external IP and port by running:
    ```bash
    kubectl get services
    ```
    Access the application at the provided external IP and port. For example, if running locally via Minikube:
    ```sh
    http://<EXTERNAL-IP>:<PORT>
    ```
### Demo Credentials

To use the dummy login page, you can click the "Show Demo Credentials" button on the login page to view the demo username and password.
