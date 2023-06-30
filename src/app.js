// Importando os módulos necessários
import { Builder, By, Key, until } from 'selenium-webdriver';
import 'chromedriver';

// Função para pesquisar a cotação do dólar no Google
async function pesquisarCotacaoDolar() {
  // Criando uma nova instância do driver do Chrome
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navegando até o Google
    await driver.get('https://www.google.com/');

    // Encontrando o elemento de busca e digitando a consulta de pesquisa
    const campoBusca = await driver.findElement(By.name('q'));
    await campoBusca.sendKeys('cotação do dólar hoje', Key.RETURN);

    console.log(1)
    await driver.wait(until.titleContains('cotação do dólar hoje'), 5000);

    console.log(2)
    // Encontrando o elemento de resultado da pesquisa e extraindo a cotação
    const resultadoBusca = await driver.findElement(By.xpath('//*[@id="knowledge-currency__updatable-data-column"]/div[1]/div[2]/span[1]'));
    const cotacao = await resultadoBusca.getText();
    console.log(3)

    // Imprimindo a cotação no console
    console.log(cotacao);
  } finally {
    // Fechando o navegador
    await driver.quit();
  }
}

// Chamando a função pesquisarCotacaoDolar
pesquisarCotacaoDolar();
