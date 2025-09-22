// Book Library Web App - Main JavaScript File

// Sample book data with 2-3 books per category (16 total books)
const booksData = [
    // Fiction (3 books)
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        description: "A story of decadence and excess, Gatsby explores the darker aspects of the Jazz Age.",
        fullDescription: "Set in the Jazz Age on Long Island, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        content: [
            "Chapter 1: In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.",
            "Chapter 2: About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land.",
            "Chapter 3: There was music from my neighbor's house through the summer nights. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars."
        ],
        pdfPath: "pdfs/great-gatsby.pdf"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A powerful story of racial injustice and the loss of innocence in the American South.",
        fullDescription: "The story, told by the six-year-old Jean Louise Finch, takes place during three years of the Great Depression in the fictional town of Maycomb, Alabama.",
        content: [
            "Chapter 1: When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.",
            "Chapter 2: Dill left us early in September, to return to Meridian. We saw him off on the five o'clock bus and I was miserable without him until it occurred to me that I would be starting to school in a week.",
            "Chapter 3: Catching Walter Cunningham in the schoolyard gave me some pleasure, but when I was rubbing his nose in the dirt Jem came by and told me to stop."
        ],
        pdfPath: "pdfs/To Kill a Mockingbird.pdf"

    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        description: "A dystopian novel about totalitarianism and surveillance society.",
        fullDescription: "The story follows the life of Winston Smith, a low-ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party.",
        content: [
            "Chapter 1: It was a bright cold day in April, and the clocks were striking thirteen.",
            "Chapter 2: Winston was writing in his diary: It was a bright cold day in April, and the clocks were striking thirteen.",
            "Chapter 3: Winston woke up with a start, almost as though he had been called by name."
        ],
        pdfPath: "pdfs/1984.pdf"

    },

    // Science (2 books)
    {
        id: 4,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        description: "An exploration of cosmology and the universe's biggest mysteries.",
        fullDescription: "From the big bang to black holes, from the smallest particles to the vastness of space, this book explains the complex theories of the universe in simple terms.",
        content: [
            "Chapter 1: We live in a strange and wonderful universe. Its age, size, violence, and beauty require extraordinary imagination to appreciate.",
            "Chapter 2: The picture of a universe that started off very hot and cooled as it expanded would explain why there is so much helium.",
            "Chapter 3: The discovery that the universe is expanding was one of the great intellectual revolutions of the twentieth century."
        ],
        pdfPath: "pdfs/A Brief History of Time.pdf"
        

    },
    {
        id: 5,
        title: "The Origin of Species",
        author: "Charles Darwin",
        category: "Science",
        description: "The groundbreaking work that introduced the theory of evolution.",
        fullDescription: "Darwin's revolutionary book that introduced the scientific theory that populations evolve over the course of generations through a process of natural selection.",
        content: [
            "Chapter 1: When on board H.M.S. 'Beagle,' as naturalist, I was much struck with certain facts in the distribution of the inhabitants of South America.",
            "Chapter 2: Nothing is easier than to admit in words the truth of the universal struggle for life, or more difficult than to constantly bear this conclusion in mind.",
            "Chapter 3: How have all those exquisite adaptations of one part of the organisation to another part, and to the conditions of life, been perfected?"
        ],
        pdfPath: "pdfs/Origin of Species.pdf"

    },

    // History (2 books)
    {
        id: 6,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "History",
        description: "A sweeping narrative of human history from ancient humans to the present.",
        fullDescription: "From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives.",
        content: [
            "Chapter 1: About 13.5 billion years ago, matter, energy, time and space came into being in what is known as the Big Bang.",
            "Chapter 2: The Cognitive Revolution kick-started history about 70,000 years ago.",
            "Chapter 3: The Agricultural Revolution began around 9500–8500 BC in the hill country of south-eastern Turkey, western Iran, and the Levant."
        ],
        pdfPath: "pdfs/A Brief History of Humankind.pdf"
  
    },
    {
        id: 7,
        title: "The Guns of August",
        author: "Barbara W. Tuchman",
        category: "History",
        description: "A detailed account of the first month of World War I.",
        fullDescription: "This Pulitzer Prize-winning classic about the outbreak of World War I is a masterful account of the diplomatic and military events that led to the Great War.",
        content: [
            "Chapter 1: So gorgeous was the spectacle on the May morning of 1910 when nine kings rode in the funeral of Edward VII of England.",
            "Chapter 2: The nations were caught in a trap, a trap made during the first thirty days out of battles that failed to be decisive.",
            "Chapter 3: The German offensive in the West began on August 4 with the invasion of Belgium."
        ],
        pdfPath: "pdfs/The Guns of August.pdf"


    },

    // Technology (2 books)
    {
        id: 8,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Technology",
        description: "A handbook of agile software craftsmanship.",
        fullDescription: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
        content: [
            "Chapter 1: You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer.",
            "Chapter 2: The name of a variable, function, or class, should answer all the big questions.",
            "Chapter 3: Functions should do one thing. They should do it well. They should do it only."
        ],
        pdfPath: "pdfs/Clean Code.pdf"
        

    },
    {
        id: 9,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        category: "Technology",
        description: "Your journey to mastery in software development.",
        fullDescription: "The Pragmatic Programmer is one of those rare tech books you'll read, re-read, and read again over the years.",
        content: [
            "Chapter 1: As a Pragmatic Programmer, you should strive to be a catalyst for change.",
            "Chapter 2: Don't live with broken windows. Fix bad designs, wrong decisions, and poor code when you see them.",
            "Chapter 3: Be a source of knowledge and help. Cultivate and share your knowledge."
        ],
        pdfPath: "pdfs/The Pragmatic Programmer.pdf"
    },

    // Philosophy (2 books)
    {
        id: 10,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "Philosophy",
        description: "Personal writings of the Roman Emperor on Stoic philosophy.",
        fullDescription: "Meditations is a series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy.",
        content: [
            "Book 1: From my grandfather Verus I learned good morals and the government of my temper.",
            "Book 2: Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial.",
            "Book 3: We ought to consider not only that our life is daily wasting away and a smaller part of it is left."
        ],
        pdfPath: "pdfs/Meditations.pdf"

    },
    {
        id: 11,
        title: "The Republic",
        author: "Plato",
        category: "Philosophy",
        description: "Plato's masterpiece on justice and the ideal society.",
        fullDescription: "The Republic is a Socratic dialogue, written by Plato around 380 BC, concerning the definition of justice and the order and character of the just city-state and the just man.",
        content: [
            "Book 1: I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess.",
            "Book 2: When I had said this I supposed that I was done with the subject, but it all turned out to be only a prelude.",
            "Book 3: Such then, I said, are our principles of theology—some tales are to be told, and others are not to be told to our disciples."
        ],
        pdfPath: "pdfs/plato the republic.pdf"

    },

    // Biography (2 books)
    {
        id: 12,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        category: "Biography",
        description: "The exclusive biography of Apple's visionary leader.",
        fullDescription: "Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues.",
        content: [
            "Chapter 1: Steve Jobs was a complex man, a visionary who could be both inspiring and infuriating.",
            "Chapter 2: Jobs was born on February 24, 1955, in San Francisco, to Joanne Schieble and Abdulfattah Jandali.",
            "Chapter 3: Jobs was adopted by Paul and Clara Jobs, a working-class couple from Mountain View, California."
        ],
        pdfPath: "pdfs/Steve Jobs.pdf"

    },
    {
        id: 13,
        title: "Einstein: His Life and Universe",
        author: "Walter Isaacson",
        category: "Biography",
        description: "A comprehensive biography of the world's most famous scientist.",
        fullDescription: "How did Einstein's mind work? What made him a genius? Isaacson's biography shows how his scientific imagination sprang from the rebellious nature of his personality.",
        content: [
            "Chapter 1: The light beam that he was riding would, after a year, reach a star 10 trillion miles away.",
            "Chapter 2: Einstein was born in Ulm, Germany, on March 14, 1879.",
            "Chapter 3: As a child, Einstein was slow to talk, and his parents worried that he might be mentally handicapped."
        ],
        pdfPath: "pdfs/Einstein His Life and Universe.pdf"

    },

    // Business (2 books)
    {
        id: 14,
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        fullDescription: "The Lean Startup provides a scientific approach to creating and managing successful startups in an age when companies need to innovate more than ever.",
        content: [
            "Chapter 1: The goal of a startup is to figure out the right thing to build—the thing customers want and will pay for—as quickly as possible.",
            "Chapter 2: The Lean Startup method teaches you how to drive a startup—how to steer, when to turn, and when to persevere.",
            "Chapter 3: Validated learning is the process of demonstrating empirically that a team has discovered valuable truths about a startup's present and future business prospects."
        ],
        pdfPath: "pdfs/The Lean Startup.pdf"

    },
    {
        id: 15,
        title: "Good to Great",
        author: "Jim Collins",
        category: "Business",
        description: "Why some companies make the leap and others don't.",
        fullDescription: "Built to Last, the defining management study of the nineties, showed how great companies triumph over time and how long-term sustained performance can be engineered into the DNA of an enterprise.",
        content: [
            "Chapter 1: Good is the enemy of great. And that is one of the key reasons why we have so little that becomes great.",
            "Chapter 2: We don't have great schools, principally because we have good schools.",
            "Chapter 3: The good-to-great companies did not focus principally on what to do to become great; they focused equally on what not to do."
        ],
        pdfPath: "pdfs/Good to Great.pdf"

    },

    // Self-Help (2 books)
    {
        id: 16,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        description: "Tiny changes, remarkable results: An easy & proven way to build good habits & break bad ones.",
        fullDescription: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation.",
        content: [
            "Chapter 1: The fate of British Cycling changed one day in 2003. The organization, which was the governing body for professional cycling in Great Britain.",
            "Chapter 2: The aggregation of marginal gains is the philosophy of searching for a tiny margin of improvement in everything you do.",
            "Chapter 3: Habits are the compound interest of self-improvement. Getting 1 percent better every day counts for a lot in the long-run."
        ],
        pdfPath: "pdfs/Atomic habits.pdf"

    },
    {
        id: 17,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "Self-Help",
        description: "Powerful lessons in personal change.",
        fullDescription: "The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of presidents and CEOs, educators and parents.",
        content: [
            "Chapter 1: Inside-Out is the idea that private victories precede public victories, that making and keeping promises to ourselves precedes making and keeping promises to others.",
            "Chapter 2: The Character Ethic is based on the fundamental idea that there are principles that govern human effectiveness.",
            "Chapter 3: The Personality Ethic tells us that there might be something out there that could help us more than our own willpower and discipline."
        ],
        pdfPath: "pdfs/The 7 Habits of Highly Effective People.pdf"

    }
];

// Global variables
let currentBooks = [...booksData];
let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
let currentView = 'grid';
let currentPage = 1;
let currentBook = null;

// DOM elements
const booksGrid = document.getElementById('books-grid');
const booksList = document.getElementById('books-list');
const searchInput = document.getElementById('search-input');
const heroSearchInput = document.getElementById('hero-search-input');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const loading = document.getElementById('loading');
const noResults = document.getElementById('no-results');
const borrowedBooksContainer = document.getElementById('borrowed-books');
const noBorrowed = document.getElementById('no-borrowed');
const bookModal = document.getElementById('book-modal');
const readerModal = document.getElementById('reader-modal');
const bookDetailContent = document.getElementById('book-detail-content');
const readerContent = document.getElementById('reader-content');
const readerTitle = document.getElementById('reader-title');
const pageInfo = document.getElementById('page-info');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    displayBooks();
    displayBorrowedBooks();
});

// Initialize the application
function initializeApp() {
    // Show loading initially
    loading.style.display = 'block';
    booksGrid.style.display = 'none';
    
    // Simulate loading time
    setTimeout(() => {
        loading.style.display = 'none';
        booksGrid.style.display = 'grid';
    }, 1000);
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    heroSearchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    categoryFilter.addEventListener('change', handleFilter);
    sortFilter.addEventListener('change', handleFilter);
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModals);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
    
    // Reader navigation
    prevPageBtn.addEventListener('click', () => changePage(-1));
    nextPageBtn.addEventListener('click', () => changePage(1));
    
    // Footer category links
    document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase() || heroSearchInput.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        currentBooks = [...booksData];
    } else {
        currentBooks = booksData.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayBooks();
}

// Handle filter functionality
function handleFilter() {
    const category = categoryFilter.value;
    const sortBy = sortFilter.value;
    
    let filteredBooks = [...booksData];
    
    // Apply category filter
    if (category) {
        filteredBooks = filteredBooks.filter(book => book.category === category);
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase() || heroSearchInput.value.toLowerCase();
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.category.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    switch (sortBy) {
        case 'title':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'author':
            filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'category':
            filteredBooks.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'newest':
            filteredBooks.sort((a, b) => b.id - a.id);
            break;
    }
    
    currentBooks = filteredBooks;
    displayBooks();
}

// Handle category click
function handleCategoryClick(e) {
    const category = e.currentTarget.getAttribute('data-category');
    filterByCategory(category);
    
    // Update active category filter
    categoryFilter.value = category;
}

// Filter by specific category
function filterByCategory(category) {
    currentBooks = booksData.filter(book => book.category === category);
    displayBooks();
    
    // Scroll to books section
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

// Handle view toggle (grid/list)
function handleViewToggle(e) {
    const view = e.currentTarget.getAttribute('data-view');
    
    // Update active button
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    currentView = view;
    displayBooks();
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // Close mobile menu
    document.querySelector('.nav-toggle').classList.remove('active');
    document.querySelector('.nav-menu').classList.remove('active');
}

// Display books based on current view and filters
function displayBooks() {
    if (currentBooks.length === 0) {
        booksGrid.style.display = 'none';
        booksList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    if (currentView === 'grid') {
        displayBooksGrid();
    } else {
        displayBooksList();
    }
}

// Display books in grid view
function displayBooksGrid() {
    booksGrid.style.display = 'grid';
    booksList.style.display = 'none';
    
    booksGrid.innerHTML = currentBooks.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-cover">
                <i class="fas fa-book"></i>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <span class="book-category">${book.category}</span>
                <p class="book-description">${book.description}</p>
                <div class="book-actions">
                    <button class="btn btn-primary" onclick="openBookDetail(${book.id})">View Details</button>
                    <button class="btn btn-secondary" onclick="borrowBook(${book.id})">Borrow</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Display books in list view
function displayBooksList() {
    booksGrid.style.display = 'none';
    booksList.style.display = 'block';
    
    booksList.innerHTML = currentBooks.map(book => `
        <div class="book-list-item" data-book-id="${book.id}">
            <div class="book-list-cover">
                <i class="fas fa-book"></i>
            </div>
            <div class="book-list-info">
                <div class="book-list-details">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">by ${book.author}</p>
                    <span class="book-category">${book.category}</span>
                    <p class="book-description">${book.description}</p>
                </div>
                <div class="book-list-actions">
                    <button class="btn btn-primary" onclick="openBookDetail(${book.id})">View Details</button>
                    <button class="btn btn-secondary" onclick="borrowBook(${book.id})">Borrow</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open book detail modal
function openBookDetail(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    currentBook = book;
    
    bookDetailContent.innerHTML = `
        <div class="book-detail">
            <div class="book-detail-header">
                <div class="book-detail-cover">
                    <i class="fas fa-book"></i>
                </div>
                <div class="book-detail-info">
                    <h2 class="book-detail-title">${book.title}</h2>
                    <p class="book-detail-author">by ${book.author}</p>
                    <span class="book-detail-category">${book.category}</span>
                    <p class="book-detail-description">${book.fullDescription}</p>
                    <div class="book-detail-actions">
                        <button class="btn btn-primary" onclick="openBookReader(${book.id})">
                            <i class="fas fa-book-open"></i> Read Online
                        </button>
                        <button class="btn btn-secondary" onclick="borrowBook(${book.id})">
                            <i class="fas fa-plus"></i> Add to My List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    bookModal.style.display = 'block';
}

// Open book reader modal
function openBookReader(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    currentBook = book;
    currentPage = 1;
    
    readerTitle.textContent = book.title;
    
    // Check if PDF is available
    if (book.pdfPath) {
        openPDFReader(book);
    } else {
        updateReaderContent();
        updatePageInfo();
    }
    
    readerModal.style.display = 'block';
    bookModal.style.display = 'none';
}

// Open PDF reader
function openPDFReader(book) {
    readerContent.innerHTML = `
        <div class="pdf-container">
            <iframe 
                src="${book.pdfPath}#toolbar=0&navpanes=0&scrollbar=0" 
                width="100%" 
                height="600px"
                style="border: none; border-radius: 8px;"
            ></iframe>
            <div class="pdf-info">
                <p><strong>${book.title}</strong> by ${book.author}</p>
                <p>PDF is loading... If it doesn't load, the PDF file may not be available yet.</p>
            </div>
        </div>
    `;
    
    // Hide page navigation for PDF
    document.querySelector('.reader-controls').style.display = 'none';
}

// Update reader content
function updateReaderContent() {
    if (!currentBook || !currentBook.content) return;
    
    const pageContent = currentBook.content[currentPage - 1] || 'End of book preview.';
    readerContent.innerHTML = `
        <h2>${currentBook.title}</h2>
        <h3>by ${currentBook.author}</h3>
        <div class="content-text">
            <p>${pageContent}</p>
        </div>
    `;
}

// Update page info
function updatePageInfo() {
    if (!currentBook || !currentBook.content) return;
    
    pageInfo.textContent = `Page ${currentPage} of ${currentBook.content.length}`;
    
    // Update button states
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= currentBook.content.length;
}

// Change page in reader
function changePage(direction) {
    if (!currentBook || !currentBook.content) return;
    
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= currentBook.content.length) {
        currentPage = newPage;
        updateReaderContent();
        updatePageInfo();
    }
}

// Borrow a book
function borrowBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    // Check if already borrowed
    const alreadyBorrowed = borrowedBooks.find(b => b.id === bookId && !b.returned);
    if (alreadyBorrowed) {
        alert('You have already borrowed this book!');
        return;
    }
    
    // Add to borrowed books
    const borrowedBook = {
        id: book.id,
        title: book.title,
        author: book.author,
        borrowedDate: new Date().toISOString(),
        returned: false
    };
    
    borrowedBooks.push(borrowedBook);
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    
    displayBorrowedBooks();
    
    // Show success message
    showNotification(`Successfully borrowed "${book.title}"!`);
}

// Return a book
function returnBook(bookId) {
    const borrowedBook = borrowedBooks.find(b => b.id === bookId && !b.returned);
    if (borrowedBook) {
        borrowedBook.returned = true;
        borrowedBook.returnedDate = new Date().toISOString();
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
        displayBorrowedBooks();
        showNotification(`Successfully returned "${borrowedBook.title}"!`);
    }
}

// Display borrowed books
function displayBorrowedBooks() {
    const activeBorrowed = borrowedBooks.filter(book => !book.returned);
    
    if (activeBorrowed.length === 0) {
        borrowedBooksContainer.style.display = 'none';
        noBorrowed.style.display = 'block';
    } else {
        borrowedBooksContainer.style.display = 'grid';
        noBorrowed.style.display = 'none';
        
        borrowedBooksContainer.innerHTML = activeBorrowed.map(book => {
            const borrowedDate = new Date(book.borrowedDate).toLocaleDateString();
            
            return `
                <div class="borrowed-book-card">
                    <h3 class="borrowed-book-title">${book.title}</h3>
                    <p class="borrowed-book-author">by ${book.author}</p>
                    <p class="borrowed-book-date">Borrowed on: ${borrowedDate}</p>
                    <span class="borrowed-book-status status-borrowed">Currently Borrowed</span>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-primary" onclick="returnBook(${book.id})">Return Book</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Close all modals
function closeModals() {
    bookModal.style.display = 'none';
    readerModal.style.display = 'none';
    currentBook = null;
    currentPage = 1;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
