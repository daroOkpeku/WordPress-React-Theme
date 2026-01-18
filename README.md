# Great React Theme

A modern WordPress theme built with React, offering a fast, responsive, and interactive frontend experience.

Contributors: Okpeku Stephen
Tags: react, wordpress theme, tailwindcss
Requires at least: 5.8
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT License

## Features

- **React-Powered Frontend**: Built with modern React for a dynamic user experience
- **Responsive Design**: Looks great on all devices
- **Customization Options**: Easy to customize and extend
- **Performance Optimized**: Fast loading and efficient code
- **SEO Friendly**: Built with search engine optimization in mind

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- Node.js 14.x or higher
- npm 6.x or higher

## Installation

1. Download the theme files
2. Upload the `react_theme` folder to the `/wp-content/themes/` directory
3. Activate the theme through the 'Themes' menu in WordPress
4. Run `npm install` in the theme directory to install dependencies
5. Run `npm run build` to build the production assets

## Development

To work on the theme's frontend:

1. Navigate to the theme directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Make your changes to the React components in the `src` directory
5. The development server will automatically reload when you make changes

## Building for Production

To create a production build:

```bash
npm run build
```

This will create optimized, minified files in the `build` directory.

## Customization

### Theme Options

You can customize the theme through the WordPress Customizer.

### Child Theme

To make customizations that won't be overwritten by updates, create a child theme:

1. Create a new directory in `/wp-content/themes/` called `react-theme-child`
2. Create a `style.css` file with the following header:
   ```css
   /*
   Theme Name:     Great React Theme Child
   Template:       react_theme
   */
   ```
3. Enqueue the parent theme's stylesheet in your child theme's `functions.php`

## Support

For support, please open an issue in the theme's repository or contact the theme author.

## License

This theme is licensed under the GPL v2 or later.

## Credits

- Author: Stephen Okpeku Ighodaro
- WordPress
- React
- Webpack
- Babel
