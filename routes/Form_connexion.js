const express = require('express');
const router = express.Router();
const { Utilisateur } = require('../models');

router.post('/connexion', async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    // Vérifier les informations de connexion dans la base de données
    const utilisateur = await Utilisateur.findOne({
      where: {
        email,
        motDePasse,
      },
    });

    if (utilisateur) {
      res.status(200).json(utilisateur);
    } else {
      res.status(401).json({ message: 'Email ou mot de passe invalide.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la connexion.' });
  }
});

module.exports = router;