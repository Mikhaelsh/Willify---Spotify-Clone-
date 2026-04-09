# Willify

A music streaming web application that allows users to browse songs, view lyrics, and register for an account. Built with plain HTML, CSS, and JavaScript.

---

## Project Structure

```
HCI/
├── assets/                  # Images, icons, and logos
├── src/                     # Source Code
```

---

## Features

- **Homepage** with a curated "Recommended for you" section and a "Top Played Songs Worldwide" section
- **Individual song pages** displaying album art, artist credits, and full lyrics
- **User registration form** with client-side validation (email format, age check, required fields)
- **Sticky navigation bar** on all pages for easy access to Home, About, Register, and Profile
- **Fixed footer player** with previous, pause, and next controls
- **Hover interactions** on all buttons, cards, and navigation links for a responsive feel

---

## Getting Started

No build tools or dependencies are required.

1. Clone or download this repository.
2. Place your image assets inside the `assets/` folder (logo, song covers, icons).
3. Open `home.html` in any modern browser.

```bash
git clone https://github.com/your-username/willify.git
cd willify
open home.html
```

---

## File Paths Note

All HTML files reference assets using `../assets/` paths, which means they are designed to sit inside a subfolder one level below the `assets/` directory. If you move the HTML files, update the asset paths accordingly.

CSS and JS files are referenced using relative paths (`./songstyles.css`, `./navbarscripts.js`) and should remain in the same folder as the HTML files.

---

## Technologies Used

- HTML5
- CSS3 (with transitions, sticky positioning, and backdrop filters)
- Vanilla JavaScript (DOM manipulation, form validation, page navigation)
- Google Fonts (Inter)

---

## Form Validation Rules

The registration form in `login.html` enforces the following rules via `loginscripts.js`:

- Email must contain `.com`
- Profile name cannot be empty
- Password cannot be empty
- Age must be greater than 13
- Gender field cannot be empty

On successful submission, the user is redirected to `home.html`.

---

## Design Notes

The interface uses a dark theme (`#0a0a0a` background) with the brand accent color `#5CCBA4` (teal green). Interactive elements include lift-on-hover card animations, scale transitions on buttons, and focus ring highlights on form inputs. The navigation bar and footer use `backdrop-filter: blur` for a modern frosted-glass appearance.

---

## License

This project was created for academic purposes as part of a Human-Computer Interaction course.
