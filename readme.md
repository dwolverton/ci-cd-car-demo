# CI/CD Demo with Car class

## Get Started
- Run `npm install`
- Run `npm run build:dev`
- Live Serve `build/index.html`

## Scripts
This project has the following NPM scripts in `package.json`.

- `npm run build` - Webpack bundles the JS and copies the HTML & CSS to the build directory. It optimizes the files for production. It does not continue to watch for changes.
- `npm run build:dev` - Run in development mode. Webpack bundles the JS and copies the HTML & CSS to the build directory. It watches the `src` files to keep the build up-to-date as you develop. Use `CTRL+C` to stop.
- `npm test` - Run the tests.
- `npm run test:dev` - Run the tests continually. Watch for files to change and rerun tests as needed. Press `q` to stop.