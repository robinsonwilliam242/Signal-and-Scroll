module.exports = function (eleventyConfig) {
  // REQUIRED FILTER (this fixes the build)
  eleventyConfig.addFilter("isoDate", function (dateInput) {
    if (!dateInput) return "";
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    return isNaN(d) ? "" : d.toISOString();
  });

  // Optional readable date (safe)
  eleventyConfig.addFilter("readableDate", function (dateInput) {
    if (!dateInput) return "";
    return new Date(dateInput).toDateString();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
