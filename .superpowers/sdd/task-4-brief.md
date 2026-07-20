# Task 4: Build production, deploy, push

**Interfaces:**
- Final deliverable: gallery page live at https://pilarevan.github.io/Ustanova-Eleonora/galerija

## Steps

### Step 1: Production build

```powershell
npx ng build --configuration production --base-href=/Ustanova-Eleonora/
```

Expected: Build succeeds

### Step 2: Copy 404.html

```powershell
Copy-Item -Path "dist/ustanova-eleonora/browser/index.html" -Destination "dist/ustanova-eleonora/browser/404.html" -Force
```

### Step 3: Deploy to gh-pages

```powershell
npx gh-pages -d dist/ustanova-eleonora/browser -m "Deploy: galerija page [skip ci]"
```

Expected: "Published"

### Step 4: Push source commits

```powershell
git push origin main
```
