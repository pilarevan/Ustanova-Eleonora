### Task 1: Fix nav bar always dark

**Files:**
- Modify: `src/app/components/header/header.scss`

- [ ] **Change header default background to dark**

In `header.scss`, change `background: transparent` to `background: var(--color-dark)`. The `.scrolled` class should keep the box-shadow but no longer needs to change the background since it's always dark.

```scss
.header {
  background: var(--color-dark);

  &.scrolled {
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
}
```

- [ ] **Commit**

```bash
git add src/app/components/header/header.scss
git commit -m "fix: keep nav bar dark on all pages"
```

---
