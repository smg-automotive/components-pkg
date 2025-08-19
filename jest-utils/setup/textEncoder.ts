const {
  TextEncoder: ImportedTextEncoder,
  TextDecoder: ImportedTextDecoder,
} = require('util');

Object.assign(global, {
  TextEncoder: ImportedTextEncoder,
  TextDecoder: ImportedTextDecoder,
});
