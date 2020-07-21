const inquirer = require('inquirer');
const dbFunctions = require('./dbFunctions');
const cTable = require('console.table');


let inquirerLists = {deptRoles:[],empRoles:[],empManagers:[], empList:[]};

const setUpInquirerLists = () => {
    setUpDeptRolesList();
    setUpEmpRolesList();
    setUpManagerList();
    setUpEmployeeList();
}

const setUpDeptRolesList = () => {
    dbFunctions.viewAllDpts().then(data => {
        inquirerLists.deptRoles = data;
        
    }) 
}

const setUpEmpRolesList = () => {
    dbFunctions.viewAllRoles().then(data => {
        
        inquirerLists.empRoles = data;
        
    })
}
const setUpManagerList = () => {
    dbFunctions.viewAllEmp().then(data => {
        let empManagersUnfiltered = data;
        let managerArray = [];
            for(i=0; i < data.length; i++) {
                
                if(data[i].manager === null) {
                    if(managerArray.includes(data[i].manager) != true) {
                        managerArray.push(data[i]);
                    }
                    
                }
            }
        inquirerLists.empManagers = managerArray.map(({id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
        }))
        // console.log(inquirerLists.empManagers);
    })
}

const setUpEmployeeList = () => {
    dbFunctions.viewAllEmp().then(data => {
        inquirerLists.empList = data;
    })
}

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
            'Update Employee Role',
            'End Session'
        ]
    }]).then(function (res) {
        if (res.main === 'View All Departments') {
            dbFunctions.viewAllDpts().then(results => {
                console.table(results);
                console.log("\n ----------------------------------------------------\n");
                mainMenuPrompt();
            });
            
            // WHEN I choose to view all departments
            // THEN I am presented with a formatted table showing department names and department ids
        }

        if (res.main === 'View All Roles') {
            dbFunctions.viewAllRoles().then (results => {
                console.table(results);
                console.log("\n ----------------------------------------------------\n");
                mainMenuPrompt()
            });
            
            // WHEN I choose to view all roles
            // THEN I am presented with the job title, role id, the department that role belongs to, 
            // and the salary for that role
        }

        if (res.main === 'View All Employees') {
            dbFunctions.viewAllEmp().then (results => {
                console.table(results);
                console.log("\n ----------------------------------------------------\n");
                mainMenuPrompt()
            });
            // WHEN I choose to view all employees
            // THEN I am presented with a formatted table showing employee data, 
            // including employee ids, first names, last names, job titles, departments, salaries, 
            // and managers that the employees report to
        }

        if (res.main === 'Add a Department') {
            inquirer.prompt([
                {
                type: 'input',
                name: 'addDept',
                message: 'What department would you like to add?'
                }
            ]).then(function(response){
                dbFunctions.addDept(response.addDept).then (results => {
                    console.log("\n" + response.addDept +' has been added'+ "\n");
                    console.log("\n ----------------------------------------------------\n");
                    mainMenuPrompt()
                });
            }).then(function() {
                setUpDeptRolesList();
            })
            
            // WHEN I choose to add a department
            // THEN I am prompted to enter the name of the department and that department is added to the database
        }

        if (res.main === 'Add a Role') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'addRole',
                    message: 'What role would you like to add?'
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the salary for this role?'
                },
                {
                    type: 'list',
                    name: 'roleDepartment',
                    message: 'What is the department for this role?',
                    choices: inquirerLists.deptRoles.map(data => data.name)
                }
            ]).then(function(response){
                
                response.roleDepartment = inquirerLists.deptRoles
                .find(dept => dept.name === response.roleDepartment).id;
                

                return dbFunctions.addRole(response).then (results => {
                    console.log("\n" + response.addRole + ' has been added'+ "\n");
                    console.log("\n ----------------------------------------------------\n");
                    mainMenuPrompt()
                });
            }).then(function() {
                setUpEmpRolesList();
            })
            // WHEN I choose to add a role
            // THEN I am prompted to enter the name, salary, 
            // and department for the role and that role is added to the database
        }

        if (res.main === 'Add an Employee') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'What is the employee\'s first name?'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'What is the employee\'s last name?'
                },
                {
                    type: 'list',
                    name: 'empRole',
                    message: 'What is their role?',
                    choices: inquirerLists.empRoles.map(data => data.title)
                },
                {
                    type: 'list',
                    name: 'empManager',
                    message: 'Who is their manager?',
                    choices: inquirerLists.empManagers
                }
            ]).then(function(response) {
                
                response.empRole = inquirerLists.empRoles
                .find(emp => emp.title === response.empRole).id;
                
                console.log(response.empManager)
                response.empManager = inquirerLists.empManagers
                .find(empManager => empManager.value === response.empManager);
                console.log(response.empManager)
                
                return dbFunctions.addEmployee(response).then (results => {
                    console.log("\n" + response.firstName + response.lastName +' has been added'+ "\n");
                    console.log("\n ----------------------------------------------------\n");
                    mainMenuPrompt()
                });
            }).then(function() {
                setUpEmpRolesList();
                setUpManagerList();
            })
            // WHEN I choose to add an employee
            // THEN I am prompted to enter the employee’s first name, last name, role, 
            // and manager and that employee is added to the database
        }

        // if (res.main === 'Update Employee Role') {
        //     inquirer.prompt([
        //         {
        //             type: 'list',
        //             name: 'selectEmp',
        //             message: 'Which employee\'s role is being updated?',
        //             choices: inquirerLists.empList.map(emp => (emp.firstName + " " + emp.lastName))
        //         },
        //         {
        //             type: 'list',
        //             name: 'updateEmpRole',
        //             message: 'What is their new role?',
        //             choices: ''
        //         }
        //     ]).then(function (response) {
        //         console.log(response)
        //     })
            
        //     /* return updateEmployee()*/
        //     // WHEN I choose to update an employee role
        //     // THEN I am prompted to select an employee to update and their new role 
        //     // and this information is updated in the database 
        // }
    
        if (res.main === 'End Session') {
            console.log('Session ended.')
            return process.exit();
        }
    })
}


setUpInquirerLists();
mainMenuPrompt();