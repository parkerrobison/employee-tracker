DROP DATABASE IF EXISTS dep_db;
CREATE DATABASE dep_db;
USE dep_db;

CREATE TABLE department (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY ( id )
);

CREATE TABLE roles (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES department(id),
    PRIMARY KEY ( id )
);

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
        REFERENCES roles(id),
    PRIMARY KEY ( id )
);