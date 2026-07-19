### Task 2: Add month name translations to all 4 language files

**Files:**
- Modify: `public/i18n/hr.json`
- Modify: `public/i18n/en.json`
- Modify: `public/i18n/it.json`
- Modify: `public/i18n/de.json`

- [ ] **Add months block to hr.json**

Insert a `months` object with keys `1` through `12` after the `nav` block:

```json
"months": {
  "1": "Siječanj",
  "2": "Veljača",
  "3": "Ožujak",
  "4": "Travanj",
  "5": "Svibanj",
  "6": "Lipanj",
  "7": "Srpanj",
  "8": "Kolovoz",
  "9": "Rujan",
  "10": "Listopad",
  "11": "Studeni",
  "12": "Prosinac"
}
```

- [ ] **Add months block to en.json**

```json
"months": {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}
```

- [ ] **Add months block to it.json**

```json
"months": {
  "1": "Gennaio",
  "2": "Febbraio",
  "3": "Marzo",
  "4": "Aprile",
  "5": "Maggio",
  "6": "Giugno",
  "7": "Luglio",
  "8": "Agosto",
  "9": "Settembre",
  "10": "Ottobre",
  "11": "Novembre",
  "12": "Dicembre"
}
```

- [ ] **Add months block to de.json**

```json
"months": {
  "1": "Januar",
  "2": "Februar",
  "3": "März",
  "4": "April",
  "5": "Mai",
  "6": "Juni",
  "7": "Juli",
  "8": "August",
  "9": "September",
  "10": "Oktober",
  "11": "November",
  "12": "Dezember"
}
```

- [ ] **Commit**

```bash
git add public/i18n/
git commit -m "feat: add month name translations for all 4 languages"
```

---
