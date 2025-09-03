# 1xBet API Server

Un serveur Node.js simple qui fournit des données en direct depuis l'API non officielle de 1xBet.

## Description
Ce projet met en place une API REST hébergée qui interroge l'endpoint `https://1x-bet.mobi/LiveFeed/GetSportsShortZip` pour récupérer des données de matchs (sport 40, langue française, groupe 54, pays 96). Les données sont renvoyées au format JSON.

## Prérequis
- Node.js (version 18.x ou supérieure recommandée)
- npm (généralement inclus avec Node.js)

## Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-username/votre-repo.git
   cd votre-repo
