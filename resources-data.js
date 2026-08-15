const fieldResources = {
  fields: [
    {
      id: 'computer-science',
      name: 'Computer Science',
      description: 'Core ideas behind computation, algorithms, systems, and software.',
      resources: [
        { title: 'Structure and Interpretation of Computer Programs', type: 'ebook', url: 'https://mitpress.mit.edu/9780262543231/structure-and-interpretation-of-computer-programs/' },
        { title: 'CS50: Introduction to Computer Science', type: 'lecture', url: 'https://cs50.harvard.edu/x/' },
        { title: 'Open Data Structures', type: 'pdf', url: 'https://opendatastructures.org/' }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'The language of patterns, proofs, abstraction, quantity, and structure.',
      resources: [
        { title: 'Book of Proof', type: 'ebook', url: 'https://www.people.vcu.edu/~rhammack/BookOfProof/' },
        { title: 'MIT OpenCourseWare Single Variable Calculus', type: 'lecture', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/' },
        { title: 'Linear Algebra Done Wrong', type: 'pdf', url: 'https://www.math.brown.edu/streil/papers/LADW/LADW.html' }
      ]
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Models of matter, motion, energy, fields, space, and time.',
      resources: [
        { title: 'The Feynman Lectures on Physics', type: 'ebook', url: 'https://www.feynmanlectures.caltech.edu/' },
        { title: 'MIT Physics I: Classical Mechanics', type: 'lecture', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/' },
        { title: 'Light and Matter', type: 'pdf', url: 'https://www.lightandmatter.com/' }
      ]
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Life, cells, organisms, evolution, ecosystems, and biological information.',
      resources: [
        { title: 'OpenStax Biology 2e', type: 'ebook', url: 'https://openstax.org/details/books/biology-2e' },
        { title: 'MIT Introductory Biology', type: 'lecture', url: 'https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/' },
        { title: 'BioLibreTexts', type: 'pdf', url: 'https://bio.libretexts.org/' }
      ]
    },
    {
      id: 'economics',
      name: 'Economics',
      description: 'How people, firms, and societies allocate scarce resources.',
      resources: [
        { title: 'CORE Economy', type: 'ebook', url: 'https://www.core-econ.org/' },
        { title: 'MIT Principles of Microeconomics', type: 'lecture', url: 'https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/' },
        { title: 'OpenStax Principles of Economics 3e', type: 'pdf', url: 'https://openstax.org/details/books/principles-economics-3e' }
      ]
    },
    {
      id: 'design',
      name: 'Design',
      description: 'Planning usable, meaningful, and effective visual and interactive systems.',
      resources: [
        { title: 'Designing Interfaces', type: 'ebook', url: 'https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051954/' },
        { title: 'Human-Computer Interaction Seminar', type: 'lecture', url: 'https://ocw.mit.edu/courses/cms-950-comparative-media-studies-writing-workshop-i-fall-2016/' },
        { title: 'The Design of Everyday Things Notes', type: 'pdf', url: 'https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/' }
      ]
    }
  ],
  connections: [
    ['computer-science', 'mathematics'],
    ['computer-science', 'design'],
    ['computer-science', 'economics'],
    ['mathematics', 'physics'],
    ['mathematics', 'economics'],
    ['physics', 'biology'],
    ['biology', 'economics'],
    ['design', 'economics']
  ]
};
