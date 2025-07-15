// Importa o módulo 'sqlite3' e ativa o modo 'verbose' para mensagens de debug mais 
// detalhadas 
const sqlite3 = require('sqlite3').verbose(); 
 
// Cria ou abre o arquivo de banco de dados chamado 'biblioteca.db' 
// Se o arquivo não existir, ele será criado 
const db = new sqlite3.Database('biblioteca.db'); 



db.serialize(() => {

    
  db.run(`CREATE TABLE IF NOT EXISTS livros ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    titulo TEXT NOT NULL, 
    autor TEXT, 
    ano_publicacao INTEGER,
    disponivel BOOLEAN 
  )`); 

 
  db.run(`INSERT INTO livros (titulo, autor, ano_publicacao, disponivel) VALUES (?, ?, ?, ?)`, ["Dom Casmurro", "Machado de Assis", 1899, true]); 
 
  db.run(`INSERT INTO livros (titulo, autor, ano_publicacao, disponivel) VALUES (?, ?, ?, ?)`, ["O Pequeno principe", "Antoine de Saint-Exupéry", 1943, true]);

  db.run(`INSERT INTO livros (titulo, autor, ano_publicacao, disponivel) VALUES (?, ?, ?, ?)`, ["1984", "George Orwell", 1949, false]); 

 

  db.each(`SELECT * FROM livros WHERE disponivel = true`, (err, row) => { 
    console.log("__________Listando Livros Disponiveis__________"); 
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

  db.each(`SELECT * FROM livros WHERE titulo = "1984"`, (err, row) => {
    console.log("__________Listando Livro com Titulo: 1984__________");  
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

  db.each(`UPDATE livros SET disponivel = true WHERE ID = 3 `, (err, row) => {
    console.log("__________Alterando Disponibilidade do livro ID:3__________");  
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

  db.run(`UPDATE livros SET ano_publicacao = 1944 WHERE ID = 2 `, (err, row) => {
    console.log("__________Alterando Data de Publicacao__________");  
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

  db.each(`DELETE FROM livros WHERE ID = 2 `, (err, row) => {
    console.log("__________Deletar Livro ID:2__________"); 
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

  db.each(`SELECT * FROM livros ORDER BY ano_publicacao ASC; `, (err, row) => { 
    console.log("__________Listando Livro do mais antigo ao mais novo__________");
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });

   db.get(`SELECT COUNT(*) AS total_disponiveis FROM livros WHERE disponivel = true`, (err, row) => {
    console.log("__________Contagem Quantos Livros estão disponiveis__________");
    console.log(" ");
  if (err) {
    console.error("Erro ao contar livros disponíveis:", err.message);
  } else {
    // 'row' conterá um objeto com a propriedade 'total_disponiveis'
    console.log(`Total de livros disponíveis: ${row.total_disponiveis}`);
  }
 });

  db.each(`SELECT * FROM livros WHERE autor LIKE '%George%';`, (err, row) => {
    console.log("__________Listando Livros com Autor nome: George__________");  
    // Se ocorrer um erro, exibe a mensagem de erro no console 
    if (err) { 
      console.error(err.message); 
    } else { 
      // Caso contrário, exibe os dados de cada linha (livros) no console 
      console.log(row); 
    } 
  });
});
// Fecha a conexão com o banco de dados após todas as operações 
db.close();


