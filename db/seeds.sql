INSERT INTO department (name)
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Susan', 'Strong', 4, 11),
('Jamal', 'Hannock', 1, null),
('Tran', 'Ho', 2, 4),
('Josue', 'Luna Diaz', 2, null),
('Mitchell', 'Prichard', 3, 12),
('Tadashi', 'Fukui', 5, 4),
('Muhammed', 'Pudi', 4, 11),
('Rachel', 'Goldstein', 6, 4),
('Sam', 'Yates', 7, null),
('Gilbert', 'Jones', 5, 4),
('Kwame', 'Oluo', 11, null),
('Marcela', 'Mijangos', 10, null),
('Hiro', 'Akina', 9, 2),
('Michelle', 'Ferrel', 8, 9),
('Kirsty', 'Borchards', 8, 9),
('Chantelle', 'Washington', 9, 2);