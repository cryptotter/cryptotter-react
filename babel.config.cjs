module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'transform-react-remove-prop-types',
      {
        // mode: 'remove',
        removeImport: true,
      },
    ],
  ],
};
