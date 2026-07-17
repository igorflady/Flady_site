export default function (eleventyConfig) {

  // Mantém os arquivos de estilo e JavaScript no site final
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");

  // Mantém a pasta de imagens no site final
  eleventyConfig.addPassthroughCopy("imagens");

  // Mantém o painel administrativo do Decap CMS
  eleventyConfig.addPassthroughCopy("admin");

  // Cria a coleção de artigos e organiza pela data de publicação
  eleventyConfig.addCollection("artigos", function (collectionApi) {

    return collectionApi
      .getFilteredByGlob("conteudo/artigos/*.md")
      .sort((a, b) => {
        return new Date(a.data.date) - new Date(b.data.date);
      });

  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
