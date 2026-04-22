# Assignment 1-HotSpring-Website Overview

This project is a static HTML site built as part of a full‑stack development lab assignment. It consists of multiple pages, each representing a different section of an e-commerce-style site for "HotSpring Portable Spas."

## Technologies and Libraries

- **HTML5** – markup for all pages.
- **CSS** – external stylesheets have been created for each page; no preprocessor is used.
- **JavaScript** – per-page script files exist (many are placeholders). jQuery is loaded via CDN for interactive behavior.
- **Bootstrap 5** – included via CDN for grid layout, utility classes, and responsive design.
- **Font Awesome** – icons loaded via CDN.
- **Google Fonts** – uses Oswald and Open Sans.

No Tailwind CSS or other frameworks are present; styling is hand‑written.

## Folder Structure

```
Assignment 1-Website/
├── about-us.html
├── category.html
├── contact-us.html
├── edit_account.html
├── edit_billing_address.html
├── edit_shipping_address.html
├── forget_password.html
├── index.html
├── login.html
├── my_account.html
├── order-details.html
├── order-summary.html
├── payment-form.html
├── product_description.html
├── register.html
├── shopping-cart.html
├── terms-and-conditions.html
├── components/           (unused/empty in current snapshot)
├── css/
│   ├── about.css
│   ├── category.css
│   ├── contact-us.css
│   ├── ... (one .css per page)
│   └── index.css
└── js/
    ├── about.js          (placeholder)
    ├── category.js       (possible inline scripts extracted)
    ├── contact-us.js
    ├── ...
    └── index.js
```

Each HTML file links its corresponding stylesheet and script by name. The head section typically contains CDN links for Bootstrap, Font Awesome, and Google Fonts. A jQuery script import is included at the bottom of each page, followed by the page-specific JS file.

## HTML/CSS/JS Notes

- Inline styles and scripts originally embedded in HTML were migrated to the external `css/` and `js/` directories.
- The project is purely client-side; forms and links are mostly placeholders.
- Navigation links between pages have been corrected to match the actual filenames.

This README provides a high-level summary for anyone exploring or maintaining the site.