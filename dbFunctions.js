const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dep_db'
  });

const viewRolesForList = () => {
    return new Promise ((resolve, reject) => {
        connection.query(
            `SELECT * FROM roles`,
            function(err, results) {
                resolve(results)
            }
        )
    })
}

const viewAllDpts = () => {
    return new Promise ((resolve, reject) => {
        connection.query(
            'SELECT * FROM department',
            function(err, results) {
                resolve(results)
            }
        )
    })
    
}

const viewAllRoles = () => {
    return new Promise ((resolve, reject) => {
        connection.query(
            `SELECT roles.id id, roles.title title, roles.salary salary, department.name Department 
            FROM roles LEFT JOIN department ON roles.department_id = department.id`,
            function(err, results) {
                resolve(results); 
            }
        )
    })
}

const viewAllEmp = () => {
    return new Promise ((resolve, reject) => {
        connection.query(
           `SELECT employee.id id, employee.first_name firstName,
           employee.last_name lastName, roles.title, CONCAT(employee2.first_name, " ", employee2.last_name) 
           manager FROM employee LEFT JOIN employee employee2 ON employee.manager_id = employee2.id
           LEFT JOIN roles ON employee.role_id = roles.id;`,
            function(err, results) {
                resolve(results);
            }
        )
    })
    
}

const addDept = (message) => {
    return new Promise ((resolve, reject) => {
        connection.query(
            'INSERT INTO department SET ?',
           {
               name: message
           },
           function(err, results) {
               if (err) throw err;
               resolve(results);
           })
    })
    
}

const addRole = (message) => {
    return new Promise ((resolve, reject) => {
        connection.query(
            'INSERT INTO roles SET ?',
            {
                title: message.addRole,
                salary: message.roleSalary,
                department_id: message.roleDepartment
            },
            function(err, results) {
                if (err) throw err;
                resolve(results)
            }
        )
    })
}

const addEmployee = (message) => {
    return new Promise ((resolve, reject) => {
        connection.query(
            `INSERT INTO employee SET ?`,
            {
                first_name: message.firstName,
                last_name: message.lastName,
                role_id: message.empRole,
                manager_id: message.empManager.value,
            },
            function(err, results) {
                if (err) throw err;
                resolve(results)
            }
        )
    })
}

const updateEmployee = (message) => {
    console.log(message);
    console.log(message.updateEmpRole)
    
    return new Promise ((resolve, reject) => {
        connection.query(
            `UPDATE employee SET role_id = ? WHERE id = ?`,
            [message.updateEmpRole, message.selectEmp.value],
            function(err, results) {
                if (err) throw err;
                resolve(results)
            }
        )
    })
}

module.exports = {
    viewAllDpts,
    viewAllRoles,
    viewAllEmp,
    addDept,
    addRole,
    viewRolesForList,
    addEmployee,
    updateEmployee
}