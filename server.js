const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { Utilisateur } = require('./models');
const inscriptionRoutes = require('./routes/inscription');
const connexionRoutes = require('./routes/connexion');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utiliser les routes
app.use('/api', inscriptionRoutes);
app.use('/api', connexionRoutes);

// Configuration de Sequelize
const sequelize = require('./config/database');
sequelize
  .authenticate()
  .then(() => {
    console.log('La connexion à la base de données a été établie avec succès.');
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

// Synchroniser les modèles avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Les modèles ont été synchronisés avec la base de données.');
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation des modèles avec la base de données:', err);
  });

// Démarrer le serveur
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
