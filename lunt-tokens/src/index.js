const baseFontSize = 16;
const getFontSize = (size) => `${size / baseFontSize}rem`;

module.exports = {
  l: {
    font: {
      family: {
        sans: {
          value:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        },
        mono: {
          value:
            'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
        },
      },
      line: {
        height: {
          1: { value: "1rem" },
          2: { value: "1.25rem" },
          3: { value: "1.5rem" },
          4: { value: "1.75rem" },
          5: { value: "2rem" },
          6: { value: "2.5rem" },
          7: { value: "3rem" },
        },
      },
      size: {
        xlarge: { value: getFontSize(20) },
        large: { value: getFontSize(18) },
        medium: { value: getFontSize(16) },
        small: { value: getFontSize(14) },
      },
      weight: {
        bold: { value: "600" },
        semibold: { value: "600" },
        regular: { value: "400" },
      },
    },
    "z-index": {
      modal: { value: 2000 },
      dialog: { value: 1000 },
      focus: { value: 10 },
      tooltip: { value: 3000 },
    },
  },
};
