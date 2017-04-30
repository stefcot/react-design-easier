const pkg = require('./package.json');

/**
 * Return a header template for CSS and JS generated files
 *
 * @see https://github.com/johvin/smart-banner-webpack-plugin
 * `[filename] v1.0.0\n\nAuthor: johvin\nDate: ${new Date().toLocaleString()}\n`
 */
const getHeaderTemplate = () => `${pkg.name} - ${pkg.description}\n@version ${pkg.version}\n\n@link ${pkg.homepage}\n@license ${pkg.license} license.\n\nLast modified ${new Date().toISOString()}\nCopyright ${new Date().getFullYear()}, ${pkg.author.name}`;

module.exports = getHeaderTemplate;