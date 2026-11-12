# Sprinkle Bites

A recipe website with 24 tested recipes, real photography, live search, category filters, serving-size scaling, and saved favourites.

No build step, no dependencies — just open `index.html`, or serve the folder:

```bash
cd spoonful
python3 -m http.server 4173
```

Then visit http://127.0.0.1:4173.

## Features

- **Real photos** of every dish (no AI-generated imagery), with licence attribution on `credits.html`.
- **Search** by title, description, tag or ingredient (press `/` to focus).
- **Filter** by Breakfast, Lunch, Dinner or Dessert; sort by time or A–Z.
- **Recipe pages** in a modal with scalable servings (quantities recalculate), tickable ingredients, and print-friendly styling.
- **Saved recipes** stored in `localStorage`, with a count in the header.
- Responsive layout, keyboard support (Esc closes, focus returns to the card), and reduced-motion support.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Design, responsive rules, print styles |
| `app.js` | Recipe data and all interaction logic |
| `images/` | Dish photography (1200×800 JPEG) |
| `credits.html` | Photographer and licence attribution |
| `images/logo.svg` | Logo lockup (mark + wordmark) |
| `images/logo-mark.svg` | Logo mark / favicon |

To add a recipe, append an object to the `RECIPES` array in `app.js` and drop a matching `images/<id>.jpg` in place — the UI picks it up automatically.

