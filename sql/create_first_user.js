const { Utilisateur } = require('../models');

async function creerUtilisateur(nom, email, motDePasse, role) {
  try {
    const utilisateur = await Utilisateur.create({
      nom,
      email,
      motDePasse,
      role
    });

    console.log('Utilisateur créé :', utilisateur.toJSON());
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
  }
}

creerUtilisateur('John Doe', 'john.doe@example.com', 'mot_de_passe', 'utilisateur');
