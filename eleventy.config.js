export default function (eleventyConfig) {

  // Mantém os arquivos de estilo e JavaScript no site final
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");

  // Mantém a pasta de imagens no site final
  eleventyConfig.addPassthroughCopy("imagens");

  // Mantém o painel administrativo do Decap CMS
  eleventyConfig.addPassthroughCopy("admin");

  // Cria automaticamente a coleção de artigos
  eleventyConfig.addCollection("artigos", function (collectionApi) {
    return collectionApi.getFilteredByGlob("conteudo/artigos/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
