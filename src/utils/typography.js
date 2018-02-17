import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '400', // Regular
        ],
    },
  ]
});

export default typography;
