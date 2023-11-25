Story: Board Game Directory
=====

This repository contains the code for the MIE Dev Challenge. Below are the instructions to set up and test the application.

## Application Description

The MIE Dev Challenge application consists of the following components:

- **Node.js Backend**: The backend of the application is built using Node.js. It handles requests from the frontend, interacts with the database, and performs various tasks based on user interactions.

- **Frontend UI**: The frontend of the application provides a user interface for interacting with the features of the challenge. It's designed using HTML, CSS, and JavaScript to ensure a user-friendly experience.

- **Database**: The application uses a MySQL database to store and retrieve data related to the challenge. This includes information about game sessions and games.


## Prerequisites

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

3. Start MariaDB Container

   ```bash
   docker run --name=miedb -d -p 3307:3306 -e MARIADB_USER=app -e MARIADB_PASSWORD=wonderful -e MARIADB_DATABASE=miechallenge -e MARIADB_ROOT_PASSWORD=wonderful mariadb:latest

4. Make sure the docker is running

   ```bash
   docker ps

5. Start the App

   ```bash
   npm start

If it shows the message "Server running on port: 3000", it means that the application is running
Now open your web browser to http://localhost:3000, you can now interact with the application as needed

## After Testing

After testing the application, you can see your running docker file. Find the container ID, and then kill the docker file, replace <container ID> (should be miedb) with the real ID shown in the "docker ps" command result

   ```bash
   docker ps
   docker stop <container ID>

