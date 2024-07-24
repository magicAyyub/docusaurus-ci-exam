# Utilisation de Linters et Autres Outils de Vérification de Code

## Étape 1 : Installation de ESLint
1. Installation de ESLint comme dépendance de développement :
```bash
npm install eslint --save-dev
```

## Étape 2 : Initialisation de ESLint

1. Initialisation de ESLint :
```bash
npx eslint --init
```
J'ai suivi les instructions pour configurer ESLint selon mes préférences.

## Étape 3 : Ajout des Scripts de Vérification

1. Ajout des scripts dans le fichier package.json pour exécuter ESLint :
```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
}
```

## Étape 4 : Exécution de ESLint

1. Exécution de ESLint pour vérifier les fichiers JavaScript :
```bash
npm run lint
```

2. Exécution de ESLint pour corriger automatiquement les erreurs :
```bash
npm run lint:fix
```

3. Ajoutez et validez les modifications :
```bash
git add package.json .eslintrc.js
git commit -m "feat: Add ESLint for code linting"
git push origin develop
```