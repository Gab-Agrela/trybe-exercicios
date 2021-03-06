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
        birthYear: 1921,
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
  
  // Adicione o código do exercício aqui:

  function authorBornIn1947() {
		return books.find( d => d.author.birthYear === 1947 ).author.name;
	};

	function smallerName() {
		let nameBook;
		books.forEach(d => !nameBook || d.name.length < nameBook.length ? nameBook = d.name : false)
		return nameBook;
	};

	const expectedResult = {
		author: {
			birthYear: 1948,
			name: 'George R. R. Martin',
		},
		genre: 'Fantasia',
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		releaseYear: 1991,
	};
	
	function getNamedBook() {
		return books.find(d => d.name.length === 26)
	};

	function booksOrderedByReleaseYearDesc() {
		return books.sort((a,b) => b.releaseYear - a.releaseYear);
	};

	function everyoneWasBornOnSecXX() {
		return books.every( d => d.author.birthYear > 2000)
	};

	function someBookWasReleaseOnThe80s() {
		return books.some(d => d.releaseYear >= 1980 && d.releaseYear < 1990)
	};

