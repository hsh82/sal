Hello everyone!
Welcome to the SAL Project, short for Sign-In and Log-In Project.


This project is designed to create a sign-in page where users can sign up by providing a unique email, username, and password.
These credentials are stored securely in the database. Once a user signs up, the system encrypts the data, sends it to the database for verification,
and returns an encrypted token. This token serves as authorization for accessing the entire site, including the dashboard—the third page
that retrieves user information from the backend using the provided token.


This is a simple yet functional model of a login and sign-up system for a website, built using the following technologies:
    1. Angular 18 for the frontend (located in the frontend folder).

    2. Node.js for the backend (located in the backend folder).

    3. PostgreSQL as the database (located in the backend/database folder).

    4. Docker for containerization, ensuring all components work seamlessly together.

How to Run the Project:

    Set up your own environment variables in the backend:

        DATABASE_URL = ""
        JWT_SECRET = ""

    Navigate to the docker folder and run all services using Docker Compose:
    docker-compose up

Enjoy working with the project, and have a great time exploring it! See you around!
