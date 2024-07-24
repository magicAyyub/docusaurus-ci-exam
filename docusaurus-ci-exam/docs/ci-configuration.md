# Configuration de l'Intégration Continue (CI) avec GitHub Actions

## Étape 1 : Configuration de GitHub Actions
1. Création de fichier de configuration GitHub Actions `.github/workflows/deploy.yml` :
```yaml
name: Deploy Docusaurus site to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 16

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Étape 2 : Validation des Modifications
1. Ajoutez et validez les modifications :
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: Configure GitHub Actions for CI/CD"
git push origin feature/setup-ci
```
