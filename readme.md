Story: Board Game Directory
=====

This repository contains the code for the MIE Dev Challenge. Below are the instructions to set up and test the application.


Before begin, ensure you have met the following requirements:

- Node.js: [https://nodejs.org/](https://nodejs.org/)

- Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mie-dev-challenge.git

   Replace your-username with your Github username

2. Change into the project directory

   ```bash
   cd mie-dev-challenge

3. Build Docker container

   ```bash
   docker build -t my-nodejs-app .

4. Run the Docker container

   ```bash
   docker run -p 3000:3000 my-nodejs-app

If it shows the message "Server running on port: 3000", it means that the application is running
Now open your web browser to http://localhost:3000, you can now interact with the application as needed

## After Testing

After testing the application, you can see your running docker file. Find the container ID, and then kill the docker file, replace <container ID> with the real ID shown in above command result

   ```bash
   docker ps

   ```bash
   docker stop <container ID>

