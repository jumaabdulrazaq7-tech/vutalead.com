# Vutalead - Digital Agency Website

A modern, responsive website for Vutalead Digital Agency built with pure HTML, CSS, and JavaScript.

![Vutalead Logo](images/logo.png)

## Features

- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support** - Toggle between English and Swahili
- **Smooth Animations** - Scroll animations, hover effects, and transitions
- **Modern Design** - Clean, professional design with cyan accent colors
- **Fast Loading** - Optimized images and lightweight code
- **SEO Friendly** - Proper semantic HTML and meta tags

## Sections

1. **Hero** - Eye-catching introduction with floating shapes and stats
2. **About** - Company information with values and experience badge
3. **Services** - Four service cards with images and features
4. **Packages** - Three pricing tiers with feature lists
5. **Why Choose Us** - Reasons to choose Vutalead with animated counters
6. **Testimonials** - Client reviews in a carousel
7. **FAQ** - Accordion-style frequently asked questions
8. **Contact** - Contact form and information
9. **Footer** - Links and contact details

## File Structure

```
vutalead-html/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # All images
│   ├── logo.png
│   ├── about-image.jpg
│   ├── about-vector.png
│   ├── avatar-1.jpg
│   ├── avatar-2.jpg
│   ├── avatar-3.jpg
│   ├── service-ai.jpg
│   ├── service-maintenance.jpg
│   ├── service-social.jpg
│   ├── service-website.jpg
│   └── why-choose.jpg
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **JavaScript (ES6+)** - Interactivity and animations
- **Google Fonts** - Poppins and Nunito fonts

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Option 3: Deploy to GitHub Pages
1. Fork or upload this repository to GitHub
2. Go to Settings > Pages
3. Select source as "Deploy from a branch"
4. Select branch (main/master) and folder (root)
5. Your site will be live at `https://yourusername.github.io/vutalead-html`

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --vutalead-cyan: #00bcd4;
  --vutalead-black: #0a0a0a;
  --vutalead-gray: #1a1a1a;
  --vutalead-white: #ffffff;
  --vutalead-lightgray: #f5f5f5;
}
```

### Content
Edit text directly in `index.html` or modify the translations in `js/main.js`.

### Images
Replace images in the `images/` folder with your own. Make sure to keep the same file names or update the references in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and belongs to Vutalead.

## Contact

- **Website:** [vutalead.com](https://vutalead.com)
- **Email:** info@vutalead.com
- **Phone:** +255 758 277 637
- **Location:** Dar es Salaam, Tanzania

---

Built with ❤️ by Vutalead Team
