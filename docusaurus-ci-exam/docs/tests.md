# Tests

1. Ajout des tests pour vérifier que le site Docusaurus se construit correctement :

```bash
npm install --save-dev jest
```

- Ajoutez un script de test dans le fichier package.json :
    
```json
"scripts": {
    "test": "jest"
}
```

2. Créez un fichier de test __tests__/build.test.js :
```javascript
const execSync = require('child_process').execSync;

test('Builds Docusaurus site', () => {
  execSync('npm run build', { stdio: 'inherit' });
});
```

3. Exécutez les tests :
```bash
npm test
```

4. Ajoutez et validez les modifications :
```bash
git add package.json __tests__/build.test.js
git commit -m "test: Add Jest tests for Docusaurus build"
git push origin develop
```