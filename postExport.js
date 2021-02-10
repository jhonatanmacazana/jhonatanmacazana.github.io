const sitemap = require("nextjs-sitemap-generator");
const { join } = require("path");
const { writeFileSync } = require("fs");

const baseUrl = "https://jmacazana.tk";
const generateSitemap = () => {
  sitemap({
    baseUrl,
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

const generateRobots = () => {
  writeFileSync(
    "./out/robots.txt",
    `Sitemap: ${baseUrl}/sitemap.xml

User-agent: *
Disallow: /_next/
`
  );
};

generateSitemap();
generateCNAME();
generateNoJekyll();
generateRobots();
