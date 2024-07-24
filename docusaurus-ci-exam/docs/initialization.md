# Initialisation du Projet et Configuration de Docusaurus

## Étape 1 : Création du Dépôt GitHub
1. Connexion à GitHub.
2. Création d'un nouveau dépôt public nommé `docusaurus-ci-exam`.
3. Clone du dépôt localement :
```bash
git clone https://github.com/magicAyyub/docusaurus-ci-exam.git
cd docusaurus-ci-exam
```

## Étape 1 : Création du Dépôt GitHub
1. Créer une branche `develop`
```bash
git checkout -b develop
```
2. Initialisation du projet Docusaurus
```bash
npx create-docusaurus@latest docusaurus-ci-exam classic
cd docusaurus-ci-exam
```
3. Ajoutez et validez les modifications 
```bash
git add .
git commit -m "Initialize my Docusaurus project"
git push origin develop
```