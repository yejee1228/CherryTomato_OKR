import path from 'path';
const __dirname = path.resolve();
// eslint-disable-next-line no-undef
module.exports = {
  entry: './pages/_app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  optimization: { minimizer: [] },
};
