const { Book } = require('../models');
const bookdata = [
  {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    category: 'Mystery'
  },
  {
    title: 'Love and Other Misadventures',
    author: 'Lang Leav',
    category: 'Poetry'
  },
  {
    title: 'Born a Crime',
    author: 'Trevor Noah',
    category: 'Biographical'
  },
  {
    title: 'Midnight and the Meaning of Love',
    author: 'Sistah Souljah',
    category: 'Romance'
  },
  {
    title: 'Who Fears Death',
    author: 'Nnedi Okafor',
    category: 'Scifi'
  }
];
Book.sync({ force: true }).then(() => {
  Book.bulkCreate(bookdata)
    .then(() => {
      console.log('Books created!');
      process.exit(1);
    })
    .catch(err => {
      throw new Error(err);
    });
});


// -- OLD CODE
// -- INSERT INTO poetry 
// -- (author, title) 
// -- VALUES 
// -- ('Lang Leav', 'Love and Other Misadventures'),
// -- ('r.h. Sin', 'Empty Bottles Full of Stories'),
// -- ('Pablo Neruda', 'Isla Negra'),
// -- ('Rupi Kaur', 'The Sun and Her Flowers'),
// -- ('Maya Angelou', 'The Complete COllected Poems of Maya Angelou');


// -- INSERT INTO sci-fi 
// -- (author, title) 
// -- VALUES 
// -- ('Nnedi Okafor', ' Who Fears Death'),
// -- ('Mary Hoffman', 'Stravaganza: City of Masks'),
// -- ('N.K. Jemisin', 'How Long Til Black Future Month?'),
// -- ('Anil Menon', 'The Beast With Nine Billion Feet'),
// -- ('Ken Liu', 'The Grace of Kings');


// -- INSERT INTO romance 
// -- (author, title) 
// -- VALUES 
// -- ('Carolyn Mackler', 'The Earth, My Butt, and Other Big Round Things'),
// -- ('Sarah Dessen', 'Saint Anything'),
// -- ('Cahrlotte Bronte', 'Jane Eyre'),
// -- ('Sistah Souljah', 'Midnight and the Meaning of Love'),
// -- ('Zane','The Sisters of APF');


// -- INSERT INTO biographical
// -- (author, title) 
// -- VALUES 
// -- ('Elie Wiesel', 'Night'),
// -- ('Ishmael Beah', 'A long Way Gone'),
// -- ('Rebecca Skloot', 'The Immortal Life of Henrietta Lacks'),
// -- ('Malala Yousafzal and Christina Lamb', 'I Am Malala'),
// -- ('Trevor Noah', 'Born A Crime');

// -- INSERT INTO mystery 
// -- (author, title) 
// -- VALUES 
// -- ('Agatha Christie','Murder on the Orient Express'),
// -- ('Carlos Ruiz Zafron','The Shadow of the Wind'),
// -- ('Meg Cabot','Shadowland'),
// -- ('Sujata Massey','The Widows of Malabar Hill'),
// -- ('Nora DeLoach','Mama Solves a Murder');



