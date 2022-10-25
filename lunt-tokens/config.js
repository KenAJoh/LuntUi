module.exports = {
  source: ["src/index.js", "src/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root",
          },
        },
      ],
    },
  },
};
