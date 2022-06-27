const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((r,d) => r.concat(d), [])
  }
  //console.log(flatten())

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
  
  // Adicione o código do exercício aqui:

  function reduceNames() {
    const arr = books.reduce((r,d) => r.concat(d.author.name), [])
    return arr.join(', ')
  }
  //console.log(reduceNames())

  function averageAge() {
    const sum = books.reduce((r,d) => r + (d.releaseYear -d.author.birthYear) ,0)
    return sum/books.length
  }
  //console.log(averageAge())

  function longestNamedBooks() {
    const name =  books.reduce((r,d,i) => d.name.length > r.length ? r = d.name : r,'');
    return books.filter(d=> d.name === name);
  }
//console.log(longestNamedBooks())

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((r,d)=> r.concat(d.split('')),[]).reduce((r,d) => d.toLowerCase() === 'a' ? r+=1 : r,0)
}
//console.log(containsA())

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const avg = grades.reduce((r,d) => (r.push(d.reduce((r,d) => r + d,0)/5),r),[])
  return students.reduce((r,d,i) => (r.push({name: d, average: avg[i]}),r) ,[])
}
//console.log(studentAverage());

