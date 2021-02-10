const sitemap = require("nextjs-sitemap-generator");
const { join } = require("path");
const { writeFileSync } = require("fs");

const generateSitemap = () => {
  sitemap({
    baseUrl: "https://jmacazana.tk",
    pagesDirectory: join(__dirname, "out"),
    targetDirectory: "out/",
    ignoredExtensions: ["js", "map"],
    ignoredPaths: ["assets"],
    allowFileExtensions: true,
  });
};

const generateCNAME = () => {
  writeFileSync("./out/CNAME", "jmacazana.tk");
};

const generateNoJekyll = () => {
  writeFileSync("./out/.nojekyll", "");
};

generateSitemap();
generateCNAME();
generateNoJekyll();
