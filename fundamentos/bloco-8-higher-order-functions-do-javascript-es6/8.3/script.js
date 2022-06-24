const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui: NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  function formatedBookNames() {
    return  books.map(d => `${d.name} - ${d.genre} - ${d.author.name}`);
  } 
  //console.log(formatedBookNames())

  function nameAndAge() {
    const newArr = books.map(d => {
      return {age: (2022 - d.author.birthYear),
              author: d.author.name
      };
    })
  return newArr.sort((a,b) => a.age - b.age)
  }
  //console.log(nameAndAge())

  function fantasyOrScienceFiction() {
    return books.filter(d=> d.genre === 'Fantasia' || d.genre === 'Ficção Científica')
  }
  //console.log(fantasyOrScienceFiction())

  function oldBooksOrdered() {
    const newArr = books.filter(d => 2022 - d.releaseYear > 60);
    return newArr.sort((a,b) => a.releaseYear - b.releaseYear);
  }
  //console.log(oldBooksOrdered())

  function fantasyOrScienceFictionAuthors() {
    const newArr = fantasyOrScienceFiction();
    return newArr.map(d => d.author.name).sort()
  }
  //console.log(fantasyOrScienceFictionAuthors())

  function oldBooks() {
    const newArr = oldBooksOrdered();
    return newArr.map(d => d.name);
  }
  //console.log(oldBooks())

  function authorWith3DotsOnName() {
    const book =  books.filter(d => (d.author.name[1] && d.author.name[4] && d.author.name[7]) === '.');
    return book[0].name
  }
  //console.log(authorWith3DotsOnName())