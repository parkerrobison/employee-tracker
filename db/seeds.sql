INSERT INTO department (dName)
VALUES 
('HR'),
('Sales'),
('Engineering'),
('Finance'),
('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
('VP', 450000, 5),
('Software engineer', 85000, 3),
('Accountant', 90000, 4),
('Sales Person', 64000, 2),
('Junior Software Engineer', 64000, 3),
('FED', 78000 , 3),
('Hiring Manager', 79000, 1),
('HR Specialist', 72000, 1),
('Marketing Specialist', 84000, 5),
('Financier', 95000, 4),
('Sales Team Manager', 80000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Susan', 'Strong', 4),
('Jamal', 'Hannock', 1),
('Tran', 'Ho', 2),
('Josue', 'Luna Diaz', 2),
('Mitchell', 'Prichard', 3),
('Go', 'Fukui', 5),
('Muhammed', 'Pudi', 4),
('Rachel', 'Goldstein', 6),
('Sam', 'Yates', 7),
('Gilbert', 'Jones', 5),
('Kwame', 'Oluo', 11),
('Marcela', 'Mijangos', 10),
('Hiro', 'Akina', 9),
('Michelle', 'Ferrel', 7),
('Kirsty', 'Borchards', 8),
('Chantelle', 'Washington', 9);