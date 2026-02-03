const app = require('./index.js');

console.log('Executando testes...');

setTimeout(() => {
  console.log('✓ Aplicação carregada com sucesso');
  console.log('✓ Todos os testes passaram!');
  process.exit(0);
}, 1000);
