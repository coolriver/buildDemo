/*define([
    './scrollfix',
    './tab',
    './dialog',
    './spinner',
    './carousel',
    './lazyload',
    './countable',
    './deletable'
],function () {
    return $;
});*/

require('./scrollfix');
require('./tab');
require('./dialog');
require('./spinner');
require('./carousel');
require('./lazyload');
require('./countable');
require('./deletable');

module.exports = $;
