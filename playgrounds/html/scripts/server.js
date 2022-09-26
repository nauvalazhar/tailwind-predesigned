const compiler = require('./compile');
const serveStatic = require('serve-static');
const http = require('http');
const log = require('./log');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

/**
 * Dev server
 * 
 * @param {Object} options
 * @param {String} options.root - path to the root (cwd) directory
 * @param {String} options.coreDir - path to the core/ directory
 * @param {string} options.distDir - path to the dist/ directory
 * @param {String} options.designName - name of the design directory to compile
 * @param {String} options.designSrc - path to the designs/{designName} directory
 * @param {String} options.designDist - path to the dist/{designName} directory
 * @param {String} options.designsDir - path to the designs/ directory
 * @param {String} options.baseurl - base url of the application
 * @return {Void}
 *
 */
module.exports = function(options) {
  const { root, coreDir, distDir, designName, designSrc, designDist, designsDir, baseurl } = options;

  // clean the dist directory
  log('dev', `Cleaning ${distDir}`);
  fse.removeSync(distDir);
  fse.ensureDirSync(distDir);

  // symlink images and js directories
  log('dev', `Symlinking images and js directories`);
  fse.ensureSymlinkSync(
    path.join(designSrc, 'images'),
    path.join(designDist, 'images'),
    'dir'
  );
  fse.ensureSymlinkSync(
    path.join(designSrc, 'js'),
    path.join(designDist, 'js'),
    'dir'
  );

  function handleView(request, response) {
    return async function render() {
      // get pathname from request url and remove leading slash
      // default to index.edge if no pathname
      const pathname = request.url.replace(/^\/+/, '') || 'index';
      // remove the .html extension if it exists
      const filepath = (pathname).replace(/\.html$/, '');
      // generate viewpath
      const viewpath = `${filepath}.edge`;

      try {
        // compile view
        const compile = compiler({ designSrc, coreDir, designName, vars: { baseurl } });
        const view = await compile(viewpath);

        // send to the client
        return response.writeHead(200, { 'Content-Type': 'text/html' }).end(view);
      } catch (error) {
        // display error message if view not found
        return response.writeHead(404, { 'Content-Type': 'text/html' }).end(`<h1>${error.message}</h1>`);
      }
    }
  }

  // start the server
  const serve = serveStatic(designDist);
  const server = http.createServer(function onRequest(request, response) {
    log('http', `${request.method} ${request.url}`);
    // use serveStatic to serve the dist directory
    // if the request is for a view, render it
    serve(request, response, handleView(request, response));
  });
  
  server.listen(8100, function onListen() {
    log('http', 'Server started on port 8100');
  });
}
