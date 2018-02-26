import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '300', // Light
        '400', // Regular
        ],
    },
  ]
});

export default typography;
