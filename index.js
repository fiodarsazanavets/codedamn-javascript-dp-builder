const WindowsCharacterHelperBuilder = require('./windowsCharacterHelperBuilder.js');
const UnixCharacterHelperBuilder = require('./unixCharacterHelperBuilder.js');
const CharacterHelperDirector = require('./characterHelperDirector.js');

var newLine = process.platform == 'win32' ? '\r\n': '\n';
var pathSeparator = process.platform == 'win32' ? '\'' : '/';

console.log(`This is the first line${newLine}` +
    `This is a file path: source${pathSeparator}destination`);