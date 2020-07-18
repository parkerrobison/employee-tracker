const inquirer = require('inquirer');

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role

const mainMenuPrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update Employee Role'
        ]
    }]).then(function (res) {
        if (res.main === 'View All Departments') {
            return /*function*/
            // WHEN I choose to view all departments
            // THEN I am presented with a formatted table showing department names and department ids
        }

        if (res.main === 'View All Roles') {
            return /*function*/
            // WHEN I choose to view all roles
            // THEN I am presented with the job title, role id, the department that role belongs to, 
            // and the salary for that role
        }

        if (res.main === 'View All Employees') {
            return /*function*/
            // WHEN I choose to view all employees
            // THEN I am presented with a formatted table showing employee data, 
            // including employee ids, first names, last names, job titles, departments, salaries, 
            // and managers that the employees report to
        }

        if (res.main === 'Add a Department') {
            return /*function*/
            // WHEN I choose to add a department
            // THEN I am prompted to enter the name of the department and that department is added to the database
        }

        if (res.main === 'Add a Role') {
            return /*function*/
            // WHEN I choose to add a role
            // THEN I am prompted to enter the name, salary, 
            // and department for the role and that role is added to the database
        }

        if (res.main === 'Add an Employee') {
            return /*function*/
            // WHEN I choose to add an employee
            // THEN I am prompted to enter the employee’s first name, last name, role, 
            // and manager and that employee is added to the database
        }

        if (res.main === 'Update Employee Role') {
            return /*function*/
            // WHEN I choose to update an employee role
            // THEN I am prompted to select an employee to update and their new role 
            // and this information is updated in the database 
        }
    })
}




mainMenuPrompt();