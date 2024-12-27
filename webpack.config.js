const path = require('path');  // Import path module

module.exports = {
  entry: './hotel/app/home/Home.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Ensure we handle .jsx as well
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/, // Updated to also support JSX files
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: false, // Ensure full transpilation
            compilerOptions: {
              sourceMap: true, // Enable source maps for debugging
            },
          },
        },
        exclude: /node_modules/, // Exclude node_modules from processing
      },
    ],
  },
  mode: 'development',
};
