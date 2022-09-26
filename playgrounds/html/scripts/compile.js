const { Edge } = require('edge.js')
const path = require('path');
const fs = require('fs');
const log = require('./log');

/**
 * Compiler
 *
 * @param {Object} options
 * @param {String} options.designSrc - path to the designs/{designName} directory
 * @param {String} options.coreDir - path to the core/ directory
 * @param {String} options.designName - name of the design directory to compile
 * @param {Object} options.vars - vars variables to pass to the edge template
 * @return {Closure} compile
 *
 */
module.exports = function({ designSrc, coreDir, designName, vars }) {
  /*
   * Compile a view
   *
   * @param {string} viewfile - the relative path to the view
   * @return {string} the compiled view
   * @throws {Error} if the view cannot be found
   * @example compile('index')
   *
   */
  return async function(viewfile, data) {
    const viewfullpath = path.join(designSrc, viewfile);

    // check if the view exists
    if(!fs.existsSync(viewfullpath)) {
      log('compiler', `${viewfullpath} not found`, 'error');
      throw new Error(`View ${viewfile} not found`);
    }

    log('compiler', `Compiling ${viewfile}`);
    const edge = new Edge({ cache: false });

    // mount ./core/layouts and ./designs to the edge context
    edge.mount(designSrc);
    edge.mount('layouts', path.join(coreDir, 'layouts'));
    edge.mount('components', path.join(coreDir, 'components'));

    if(vars) {
      edge.global('vars', vars);
    }

    const view = await edge.render(viewfile);
    log('compiler', `Compiled successfully`);

    // return the compiled view
    return view;
  }
}
