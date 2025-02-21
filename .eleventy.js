module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles");

  // Add markdown support for components
  const markdownIt = require("markdown-it");
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  // Add markdown filter for use in templates
  eleventyConfig.addFilter("markdown", function(value) {
    return markdownLib.render(value);
  });
  
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};