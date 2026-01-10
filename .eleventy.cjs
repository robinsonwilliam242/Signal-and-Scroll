const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  eleventyConfig.addFilter("isoDate", (dateInput) => {
    if (!dateInput) return "";
    return new Date(dateInput).toISOString();
  });

  eleventyConfig.addFilter("readableDate", (dateInput) => {
    if (!dateInput) return "";
    return DateTime.fromJSDate(new Date(dateInput)).toFormat("LLL dd, yyyy");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
