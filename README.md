# Getting Started to run TaskListApp

## Prerequisites
- Docker (for running the application in a container)
- Node.js and npm (for running the application locally)

## Running the Application Locally

To run the application locally, follow these steps:

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Run the development server:

```sh
npm run dev
```

Navigate This will start the Vite development server, and you can access the application in your web browser at `http://localhost:5173`.


## Building the Docker Image

To build the Docker image for this project, follow these steps:

### Step 1: Ensure you are in the project directory:

```sh
cd task-list-app
```

### Step 2: Build the Docker image:

```sh
docker build -t task-list-app-image .
```

### Step 3: Running the Application in a Docker container

```sh
docker run -p 3000:3000 --name task-list-app task-list-app-image
```

You can access the application in your web browser at `http://localhost:3000`.