const serveStatic = require('serve-static');
const http = require('http');
const log = require('./log');
const fs = require('fs');
const path = require('path');

/**
 *
 * Static server
 *
 * @param {Object} options
 * @param {String} options.designOut - path to the out/design directory
 * @return {Void}
 *
 */
module.exports = function(options) {
  const { designOut } = options;

  // create server and serve static files
  const serve = serveStatic(designOut);
  const server = http.createServer(function onRequest(request, response) {
    log('http', `${request.method} ${request.url}`);
    
    // catch if request is html
    // get html content and replace the base tag with the baseurl
    if(request.url.match(/\.html$/) || request.url === '/') {
      const filepath = request.url === '/' ? 'index.html' : request.url;
      const content = fs.readFileSync(path.join(designOut, filepath), 'utf8');
      const base = `<base href="/">`;
      const html = content.replace(/<base.*?>/, base);
      return response.end(html);
    } 

    // use serveStatic to serve the dist directory
    serve(request, response, function onNext() {
      // if file not found, display error message
      response.writeHead(404, { 'Content-Type': 'text/html' }).end(`<h1>404 Not Found</h1>`);
    });
  });

  // start the server
  server.listen(3000, function onListen() {
    log('http', `Listening on port 3000`);
  });
}
