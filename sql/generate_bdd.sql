-- Création de la base de données meetzic
CREATE DATABASE meetzic;

-- Utilisation de la base de données meetzic
USE meetzic;

-- Création de la table utilisateurs
CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  mot_de_passe VARCHAR(255) NOT NULL,
  role ENUM('admin', 'utilisateur') NOT NULL,
  date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de l'utilisateur admin
INSERT INTO utilisateurs (nom, email, mot_de_passe, role)
VALUES ('Admin', 'admin@meetzic.com', 'mot_de_passe_admin', 'admin');