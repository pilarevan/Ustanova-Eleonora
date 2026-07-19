### Task 1: Scaffold Angular Project + Global Styles

**Files:**
- Create: everything from `ng new`
- Create: `src/styles/global.scss`
- Modify: `src/styles.scss`
- Modify: `src/index.html`

**Interfaces:**
- Consumes: nothing
- Produces: working `ng serve` with global styles applied

- [ ] **Step 1: Install Angular CLI and scaffold project**

```bash
npm install -g @angular/cli
cd C:\Users\Pozitron\Antigravity\reimagined-palm-tree
ng new ustanova-eleonora --routing --style=scss --standalone --skip-tests
```

Move contents up one level so the project lives in repo root:

```bash
# After scaffold, move everything from ustanova-eleonora/ up to repo root
# Then remove the empty directory
```

- [ ] **Step 2: Add Inter font and set up global styles**

Modify `src/index.html` — add Inter font link in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
```

Replace `src/styles.scss` content:

```scss
@import './styles/global';
```

Create `src/styles/global.scss`:

```scss
:root {
  --color-dark: #1a1a2e;
  --color-darker: #16213e;
  --color-accent: #0D9488;
  --color-accent-hover: #0f766e;
  --color-light: #ffffff;
  --color-gray: #e2e8f0;
  --color-text: #1a1a2e;
  --color-text-light: #64748b;
  --font-heading: 'Inter', sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 900;
  line-height: 1.1;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-dark {
  background: var(--color-dark);
  color: var(--color-light);
}

.section-darker {
  background: var(--color-darker);
  color: var(--color-light);
}

.section-light {
  background: var(--color-light);
  color: var(--color-text);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-light);
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
}

.btn-outline:hover {
  background: var(--color-light);
  color: var(--color-dark);
}
```

- [ ] **Step 3: Verify project serves**

```bash
cd C:\Users\Pozitron\Antigravity\reimagined-palm-tree
npx ng serve
# Open http://localhost:4200 — should see default Angular page with new styles
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: scaffold Angular 17 project with global styles"
```
