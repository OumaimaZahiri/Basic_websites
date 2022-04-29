const path = require('path');


module.exports = {
  entry:'./src/shoppingList.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};