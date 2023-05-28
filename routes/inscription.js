const express = require('express');
const router = express.Router();
const { Utilisateur } = require('../models');

router.post('/inscription', async (req, res) => {
  const { nom, email, motDePasse } = req.body;

  try {
    // Créer un nouvel utilisateur dans la base de données
    const nouvelUtilisateur = await Utilisateur.create({
      nom,
      email,
      motDePasse,
    });

    res.status(201).json(nouvelUtilisateur);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'inscription.' });
  }
});

module.exports = router;