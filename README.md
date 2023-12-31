# Login System with Customer Details and Admin View

This project is a login system that allows customers and an admin to access different functionalities based on their credentials. The system is built using HTML, CSS, JavaScript, MySQL, and Express.js.

## Features

- **User Authentication**: The login system verifies user credentials by comparing them with records stored in the MySQL authentication (auth) table. The system supports three dummy user accounts: admin, customer1, and customer2. The passwords for all three accounts are set as the same.

- **Customer Data Entry**: If a user logs in using the customer1 or customer2 credentials, they will be presented with a form to enter their details. The form enforces validation rules for data input, ensuring the accuracy and completeness of the information provided. Upon submission, the details are stored in the MySQL customer table.

- **Admin Data View**: When logged in as the admin, the system displays the customer data stored in the MySQL database. This provides the admin with an overview of the information entered by customer1 and customer2.

## Deployment

To deploy the project locally, follow these steps:

1. **Setup MySQL**: Ensure that you have MySQL installed and running on your local machine or web server.

2. **Database Configuration**: Create a new database and import the provided SQL file, which includes the necessary tables and sample data.

3. **Install Dependencies**: Run the command `npm install` in the project root directory to install the required dependencies.

4. **Configure Connection**: Update the MySQL connection settings in the Express.js configuration file (`config.js`) to match your database configuration.

5. **Start the Server**: Run the command `node app.js` or `npm start` to start the Express.js server.

6. **Access the Application**: After starting the server, access the login page using the provided URL. Use the dummy account credentials to log in and test the system's functionalities.


To access the project(Github Page), follow these steps:

1. **MySQL Database**: The MySQL server is hosted on FreeSQLDatabase. Make sure you have the necessary credentials and access to the database.

2. **Frontend**: The frontend of the application is hosted on GitHub Pages. You can access it using the following link: [https://rohitsingh2901.github.io/JuhosiSoftwareAssignment/](https://rohitsingh2901.github.io/JuhosiSoftwareAssignment/).

3. **Node Server**: The Node.js server is hosted on Glitch. The server-side code handles the login system and communicates with the MySQL database.

4. **Database Configuration**: Update the database connection settings in the Node.js server code (`app.js` or any relevant file) to match the credentials provided by FreeSQLDatabase.

5. **Access the Application**: After completing the above steps, access the frontend of the application through the GitHub Pages link. The server-side functionality, including login, customer data entry, and admin data view, will be handled by the Node.js server hosted on Glitch.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- MySQL
- Express.js

## Dependencies

- Express.js (version ^4.18.2)
- MySQL (version ^2.18.1)
- body-parser (version ^1.20.2)
- cors (version ^2.8.5)
    

## License

This project is developed for Juhosi Software Technologies Private Limited.

## Preview
![Juhosi Software - Google Chrome 6_27_2023 11_05_34 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/746737a7-7c18-4e1e-a992-b34ccf529f3b)
![Juhosi Software - Google Chrome 6_27_2023 11_05_58 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/62acc410-a412-4933-a861-a8bac3cc8f14)
![Juhosi Software - Google Chrome 6_27_2023 11_08_16 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/bf1c3623-4d12-497f-8b66-3ac301dcd228)
![Juhosi Software - Google Chrome 6_27_2023 11_08_42 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/29290501-9c9d-49ce-96a6-cffb246980ec)
![Juhosi Software - Google Chrome 6_27_2023 11_08_51 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/51fdcd44-679c-40ae-80e4-c9e4d88a0ddd)
![Juhosi Software - Google Chrome 6_27_2023 11_09_06 PM](https://github.com/rohitsingh2901/JuhosiSoftwareAssignment/assets/80673974/574f9768-a978-4795-b009-ad0ebf2dc299)





## Author

Rohit Singh - singhrohitrrr@gmail.com - https://github.com/rohitsingh2901
