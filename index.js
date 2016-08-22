'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
function os() {
  // explicitly set these to avoid issues
  var window = window || null;
  var navigator = navigator || null;
  var process = process || window && window.process || null;

  // via node
  if (process && process.platform) {
    if (process.platform === 'darwin') {
      return 'osx';
    }
    if (process.platform.includes('win')) {
      return 'windows';
    }
  }

  // via user agent
  if (navigator && navigator.userAgent) {
    if (navigator.userAgent.includes('Macintosh')) {
      return 'osx';
    }
    if (navigator.userAgent.includes('Windows')) {
      return 'windows';
    }
  }

  // default to osx
  return 'osx';
}
