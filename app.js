// Recipe Data
const recipes = [
{
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta"
},


{
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry"
},
{
    id: 3,
    title: "Homemade Croissants",
    time: 180,
    difficulty: "hard",
    description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
    category: "baking"
},
{
    id: 4,
    title: "Greek Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
    category: "salad"
},
{
    id: 5,
    title: "Beef Wellington",
    time: 120,
    difficulty: "hard",
    description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
    category: "meat"
},
{
    id: 6,
    title: "Vegetable Stir Fry",
    time: 20,
    difficulty: "easy",
    description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
    category: "vegetarian"
},
{
    id: 7,
    title: "Pad Thai",
    time: 30,
    difficulty: "medium",
    description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
    category: "noodles"
},
{
    id: 8,
    title: "Margherita Pizza",
    time: 60,
    difficulty: "medium",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    category: "pizza"
}
];

// ========== STATE MANAGEMENT ==========
let currentFilter = 'all';
let currentSort = 'none';

// ========== DOM REFERENCES ==========
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// ========== PURE FILTER FUNCTIONS ==========
// Filter recipes by difficulty level
const filterByDifficulty = (recipesArray, difficulty) => {
    if (difficulty === 'all') {
        return recipesArray;
    }
    return recipesArray.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by time (quick recipes under 30 minutes)
const filterByTime = (recipesArray, maxTime) => {
    return recipesArray.filter(recipe => recipe.time < maxTime);
};

// Apply filter based on current filter type
const applyFilter = (recipesArray, filterType) => {
    switch (filterType) {
        case 'easy':
            return filterByDifficulty(recipesArray, 'easy');
        case 'medium':
            return filterByDifficulty(recipesArray, 'medium');
        case 'hard':
            return filterByDifficulty(recipesArray, 'hard');
        case 'quick':
            return filterByTime(recipesArray, 30);
        case 'all':
        default:
            return filterByDifficulty(recipesArray, 'all');
    }
};

// ========== PURE SORT FUNCTIONS ==========
// Sort recipes by name (A-Z)
const sortByName = (recipesArray) => {
    return [...recipesArray].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by time (fastest first)
const sortByTime = (recipesArray) => {
    return [...recipesArray].sort((a, b) => a.time - b.time);
};

// Apply sort based on current sort type
const applySort = (recipesArray, sortType) => {
    switch (sortType) {
        case 'name':
            return sortByName(recipesArray);
        case 'time':
            return sortByTime(recipesArray);
        case 'none':
        default:
            return recipesArray;
    }
};

// ========== RENDER FUNCTION (from Part 1) ==========
// Function to create single recipe card
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// Function to render recipes
const renderRecipes = (recipesArray) => {
    const html = recipesArray
        .map(createRecipeCard)
        .join('');
    recipeContainer.innerHTML = html;
};

// ========== MAIN DISPLAY FUNCTION ==========
// Orchestrates filtering, sorting, and rendering
const updateDisplay = () => {
    let recipesToDisplay = recipes;
    
    // Apply filter first
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Apply sort second
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Render the result
    renderRecipes(recipesToDisplay);
    
    // Update button states
    updateActiveButtons();
    
    // Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// ========== UI STATE MANAGEMENT ==========
// Update active button highlighting
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        if (btn.dataset.sort === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// ========== EVENT HANDLERS ==========
// Handle filter button clicks
const handleFilterClick = (event) => {
    currentFilter = event.target.dataset.filter;
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    currentSort = event.target.dataset.sort;
    updateDisplay();
};

// ========== EVENT LISTENERS SETUP ==========
// Attach event listeners to all buttons
const setupEventListeners = () => {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
};

// ========== INITIALIZATION ==========
// Setup and initial render
setupEventListeners();
updateDisplay();