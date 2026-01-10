module.exports = function (eleventyConfig) {
  // isoDate filter (THIS fixes the error)
  eleventyConfig.addFilter("isoDate", (dateInput) => {
    if (!dateInput) return "";
    const d = new Date(dateInput);
    if (isNaN(d)) return "";
    return d.toISOString();
  });

  // readable date (optional but useful)
  eleventyConfig.addFilter("readableDate", (dateInput) => {
    if (!dateInput) return "";
    const d = new Date(dateInput);
    return d.toDateString();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
