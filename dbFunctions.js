const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Projai185815!',
    database: 'dep_db'
  });

const viewAllDpts = () => {
    
    connection.query(
    'SELECT * FROM department',
    function(err, results, fields) {
        console.table(results); 
    })
}

const viewAllRoles = () => {
    
    connection.query(
    'SELECT * FROM roles',
    function(err, results, fields) {
        console.table(results); 
    }
    );
}

const viewAllEmp = () => {

    connection.query(
        'SELECT * FROM employee',
        function(err, results, fields) {
            console.table(results);
        }
    )
}

module.exports = {
    viewAllDpts,
    viewAllRoles,
    viewAllEmp
}