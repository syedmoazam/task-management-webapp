const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@store": path.resolve(__dirname, "src/store")
    },
  },
};
