// ========== IIFE MODULE PATTERN ==========
const RecipeApp = (() => {
    // ========== PRIVATE STATE & DATA ==========
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black pepper", "Salt"],
            steps: [
                "Boil water and salt generously",
                "Cook spaghetti until al dente",
                "Fry pancetta until crispy",
                "Mix eggs with grated Parmesan",
                {
                    text: "Combine pasta with sauce",
                    substeps: [
                        "Reserve pasta water",
                        "Mix hot pasta with pancetta",
                        "Add egg mixture while stirring",
                        "Add pasta water if needed for creaminess"
                    ]
                },
                "Season with black pepper and serve immediately"
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: ["Chicken breast", "Yogurt", "Garam masala", "Tomatoes", "Heavy cream", "Garlic", "Ginger", "Onions"],
            steps: [
                "Marinate chicken in yogurt and spices for 30 minutes",
                "Cook chicken in a hot pan until golden",
                {
                    text: "Prepare the sauce",
                    substeps: [
                        "Sauté onions until golden",
                        "Add garlic and ginger paste",
                        "Add tomato puree",
                        "Add garam masala and cook for 2 minutes"
                    ]
                },
                "Add cooked chicken to the sauce",
                "Simmer for 15 minutes",
                "Stir in heavy cream",
                "Serve with rice or naan"
            ]
        },
        {
            id: 3,
            title: "Homemade Croissants",
            time: 180,
            difficulty: "hard",
            description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
            category: "baking",
            ingredients: ["All-purpose flour", "Butter", "Milk", "Yeast", "Sugar", "Salt", "Egg yolk"],
            steps: [
                "Mix flour, yeast, sugar, and salt",
                "Add milk and knead until smooth",
                {
                    text: "Create butter layers (lamination)",
                    substeps: [
                        "Roll dough into a rectangle",
                        "Place butter sheet on dough",
                        "Fold dough over butter",
                        "Roll and fold 4 times, chilling between folds",
                        "Rest for 30 minutes between each fold"
                    ]
                },
                "Roll out dough and cut into triangles",
                "Roll each triangle into a croissant shape",
                "Proof for 2 hours until puffy",
                "Brush with egg wash",
                "Bake at 400°F for 20 minutes until golden"
            ]
        },
        {
            id: 4,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
            category: "salad",
            ingredients: ["Tomatoes", "Cucumber", "Red onion", "Feta cheese", "Black olives", "Olive oil", "Oregano", "Lemon juice"],
            steps: [
                "Chop tomatoes into large chunks",
                "Slice cucumber into half-moons",
                "Thinly slice red onion",
                "Cube feta cheese",
                "Combine all vegetables in a large bowl",
                "Add olives",
                "Drizzle with olive oil and lemon juice",
                "Season with oregano, salt, and pepper",
                "Toss gently and serve immediately"
            ]
        },
        {
            id: 5,
            title: "Beef Wellington",
            time: 120,
            difficulty: "hard",
            description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
            category: "meat",
            ingredients: ["Beef fillet", "Mushrooms", "Puff pastry", "Prosciutto", "Shallots", "Garlic", "Thyme", "Egg yolk"],
            steps: [
                "Sear beef on all sides until browned",
                "Cool beef completely",
                {
                    text: "Prepare duxelles and coating",
                    substeps: [
                        "Finely chop mushrooms and shallots",
                        "Sauté with garlic and thyme",
                        "Cook until completely dry",
                        "Layer prosciutto on plastic wrap",
                        "Spread duxelles over prosciutto",
                        "Roll beef in prosciutto-mushroom mixture"
                    ]
                },
                "Wrap beef in puff pastry",
                "Brush with egg wash",
                "Bake at 425°F for 25 minutes until golden",
                "Rest for 5 minutes before slicing"
            ]
        },
        {
            id: 6,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
            category: "vegetarian",
            ingredients: ["Broccoli", "Bell peppers", "Snap peas", "Carrots", "Soy sauce", "Garlic", "Ginger", "Sesame oil"],
            steps: [
                "Prepare all vegetables by slicing uniformly",
                "Heat oil in a wok or large pan over high heat",
                "Add garlic and ginger, stir-fry for 30 seconds",
                "Add harder vegetables first (carrots, broccoli)",
                "Stir-fry for 3-4 minutes",
                "Add softer vegetables (peppers, snap peas)",
                "Stir-fry for 2-3 minutes until tender-crisp",
                "Add soy sauce and sesame oil",
                "Toss to coat evenly",
                "Serve immediately over rice"
            ]
        },
        {
            id: 7,
            title: "Pad Thai",
            time: 30,
            difficulty: "medium",
            description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
            category: "noodles",
            ingredients: ["Rice noodles", "Shrimp", "Eggs", "Tamarind paste", "Fish sauce", "Peanuts", "Green onions", "Lime"],
            steps: [
                "Soak rice noodles in warm water until soft",
                "Prepare sauce: mix tamarind, fish sauce, and sugar",
                "Heat oil in a wok",
                "Stir-fry shrimp until pink and cooked",
                "Push shrimp to the side and scramble eggs",
                "Add drained noodles to the wok",
                "Pour sauce over noodles",
                "Toss everything together for 2-3 minutes",
                "Add crushed peanuts and green onions",
                "Serve with lime wedges"
            ]
        },
        {
            id: 8,
            title: "Margherita Pizza",
            time: 60,
            difficulty: "medium",
            description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
            category: "pizza",
            ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil", "Garlic", "Oregano", "Salt"],
            steps: [
                "Preheat oven to 475°F",
                {
                    text: "Prepare the base",
                    substeps: [
                        "Place dough on pizza stone or baking sheet",
                        "Dust with flour to prevent sticking",
                        "Stretch dough to desired thickness"
                    ]
                },
                "Spread tomato sauce evenly",
                "Drizzle with olive oil",
                "Tear mozzarella and distribute over pizza",
                "Sprinkle with garlic and oregano",
                "Bake for 12-15 minutes until crust is golden",
                "Remove from oven",
                "Add fresh basil leaves",
                "Drizzle with more olive oil if desired",
                "Slice and serve immediately"
            ]
        }
    ];

    // ========== PRIVATE DOM REFERENCES ==========
    let recipeContainer;
    let filterButtons;
    let sortButtons;
    let searchInput;
    let clearSearchBtn;
    let recipeCounter;

    // ========== PRIVATE STATE MANAGEMENT ==========
    let currentFilter = 'all';
    let currentSort = 'none';
    let searchQuery = '';
    let favorites = [];
    let debounceTimer = null;

    // ========== PRIVATE FILTER FUNCTIONS ==========
    const filterByDifficulty = (recipesArray, difficulty) => {
        if (difficulty === 'all') {
            return recipesArray;
        }
        return recipesArray.filter(recipe => recipe.difficulty === difficulty);
    };

    const filterByTime = (recipesArray, maxTime) => {
        return recipesArray.filter(recipe => recipe.time < maxTime);
    };

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
            case 'favorites':
                return recipesArray.filter(recipe => isFavorited(recipe.id));
            case 'all':
            default:
                return filterByDifficulty(recipesArray, 'all');
        }
    };

    // ========== PRIVATE SORT FUNCTIONS ==========
    const sortByName = (recipesArray) => {
        return [...recipesArray].sort((a, b) => a.title.localeCompare(b.title));
    };

    const sortByTime = (recipesArray) => {
        return [...recipesArray].sort((a, b) => a.time - b.time);
    };

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

    // ========== PRIVATE SEARCH FUNCTIONS (Part 4) ==========
    const searchRecipes = (recipesArray, query) => {
        if (!query || query.trim() === '') {
            return recipesArray;
        }
        
        const lowerQuery = query.toLowerCase().trim();
        
        return recipesArray.filter(recipe => {
            // Search in title
            const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
            
            // Search in ingredients
            const ingredientMatch = recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowerQuery)
            );
            
            // Search in description
            const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
            
            return titleMatch || ingredientMatch || descriptionMatch;
        });
    };

    // ========== PRIVATE FAVORITES FUNCTIONS (Part 4) ==========
    const loadFavorites = () => {
        const stored = localStorage.getItem('recipeFavorites');
        return stored ? JSON.parse(stored) : [];
    };

    const saveFavorites = () => {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    };

    const toggleFavorite = (recipeId) => {
        const index = favorites.indexOf(recipeId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(recipeId);
        }
        saveFavorites();
    };

    const isFavorited = (recipeId) => {
        return favorites.includes(recipeId);
    };

    // ========== PRIVATE RECURSIVE STEP RENDERING ==========
    const renderSteps = (steps, level = 0) => {
        return steps.map((step, index) => {
            const stepNumber = level === 0 ? index + 1 : '→';
            
            // If step is a string
            if (typeof step === 'string') {
                return `<li style="margin-left: ${level * 20}px"><strong>${stepNumber}.</strong> ${step}</li>`;
            }
            
            // If step is an object with substeps (recursion!)
            if (step.substeps) {
                const subStepsHTML = renderSteps(step.substeps, level + 1);
                return `
                    <li style="margin-left: ${level * 20}px"><strong>${stepNumber}.</strong> ${step.text}</li>
                    <ul style="list-style: none; padding: 0;">
                        ${subStepsHTML}
                    </ul>
                `;
            }
            
            return '';
        }).join('');
    };

    const createIngredientsHTML = (ingredients) => {
        if (!ingredients || ingredients.length === 0) return '';
        return `
            <ul style="margin: 0; padding-left: 20px;">
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `;
    };

    // ========== PRIVATE RECIPE CARD RENDERING ==========
    const createRecipeCard = (recipe) => {
        const stepsHTML = renderSteps(recipe.steps);
        const ingredientsHTML = createIngredientsHTML(recipe.ingredients);
        
        return `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="flex: 1;">
                        <h3>${recipe.title}</h3>
                    </div>
                    <button class="favorite-btn ${isFavorited(recipe.id) ? 'favorited' : ''}" data-recipe-id="${recipe.id}" data-toggle="favorite" title="Add to favorites">♡</button>
                </div>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="recipe-controls">
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">Show Steps</button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">Show Ingredients</button>
                </div>
                
                <div class="steps-container" data-recipe-id="${recipe.id}" style="display: none;">
                    <h4>Cooking Steps:</h4>
                    <ol style="margin: 0; padding-left: 20px;">
                        ${stepsHTML}
                    </ol>
                </div>
                
                <div class="ingredients-container" data-recipe-id="${recipe.id}" style="display: none;">
                    <h4>Ingredients:</h4>
                    ${ingredientsHTML}
                </div>
            </div>
        `;
    };

    const renderRecipes = (recipesArray) => {
        const html = recipesArray
            .map(createRecipeCard)
            .join('');
        recipeContainer.innerHTML = html;
    };

    // ========== PRIVATE UI STATE MANAGEMENT ==========
    const updateActiveButtons = () => {
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        sortButtons.forEach(btn => {
            if (btn.dataset.sort === currentSort) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // ========== PRIVATE UI HELPER FUNCTIONS ==========
    const updateRecipeCounter = (displayedCount) => {
        const totalCount = recipes.length;
        recipeCounter.textContent = `Showing ${displayedCount} of ${totalCount} recipes`;
    };

    const updateRecipeHearts = () => {
        const favoriteButtons = recipeContainer.querySelectorAll('.favorite-btn');
        favoriteButtons.forEach(btn => {
            const recipeId = parseInt(btn.dataset.recipeId);
            if (isFavorited(recipeId)) {
                btn.classList.add('favorited');
            } else {
                btn.classList.remove('favorited');
            }
        });
    };

    // ========== PRIVATE UPDATE DISPLAY ==========
    const updateDisplay = () => {
        let recipesToDisplay = recipes;
        recipesToDisplay = searchRecipes(recipesToDisplay, searchQuery);
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        renderRecipes(recipesToDisplay);
        updateRecipeHearts();
        updateActiveButtons();
        updateRecipeCounter(recipesToDisplay.length);
        console.log(`Displaying ${recipesToDisplay.length} recipes (Search: "${searchQuery}", Filter: ${currentFilter}, Sort: ${currentSort})`);
    };

    // ========== PRIVATE EVENT HANDLERS ==========
    const handleFilterClick = (event) => {
        currentFilter = event.target.dataset.filter;
        updateDisplay();
    };

    const handleSortClick = (event) => {
        currentSort = event.target.dataset.sort;
        updateDisplay();
    };

    const handleToggleClick = (event) => {
        const button = event.target;
        
        // Check if the clicked element is a toggle button
        if (!button.classList.contains('toggle-btn')) {
            return;
        }
        
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle;
        
        // Determine which container to toggle
        let containerClass = toggleType === 'steps' ? '.steps-container' : '.ingredients-container';
        const container = recipeContainer.querySelector(`${containerClass}[data-recipe-id="${recipeId}"]`);
        
        if (container) {
            // Toggle visibility
            const isVisible = container.style.display !== 'none';
            container.style.display = isVisible ? 'none' : 'block';
            
            // Update button text
            const newText = isVisible ? `Show ${toggleType === 'steps' ? 'Steps' : 'Ingredients'}` : `Hide ${toggleType === 'steps' ? 'Steps' : 'Ingredients'}`;
            button.textContent = newText;
        }
    };

    // Handle toggle for favorite button
    const handleFavoriteClick = (event) => {
        const button = event.target;
        
        if (!button.classList.contains('favorite-btn')) {
            return;
        }
        
        const recipeId = parseInt(button.dataset.recipeId);
        toggleFavorite(recipeId);
        
        if (isFavorited(recipeId)) {
            button.classList.add('favorited');
        } else {
            button.classList.remove('favorited');
        }
    };

    // Handle search input with debouncing (Part 4)
    const handleSearchInput = (event) => {
        searchQuery = event.target.value;
        
        // Show/hide clear button
        if (searchQuery.trim() !== '') {
            clearSearchBtn.style.display = 'inline-block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        
        // Debounce the search
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            updateDisplay();
        }, 300);
    };

    // Handle clear search button
    const handleClearSearch = () => {
        searchQuery = '';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        updateDisplay();
    };

    // ========== PRIVATE EVENT SETUP ==========
    const setupEventListeners = () => {
        // Attach filter/sort listeners
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });

        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });

        // Event delegation for toggle and favorite buttons
        recipeContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('favorite-btn')) {
                handleFavoriteClick(event);
            } else {
                handleToggleClick(event);
            }
        });
        
        // Search bar listeners (Part 4)
        searchInput.addEventListener('input', handleSearchInput);
        clearSearchBtn.addEventListener('click', handleClearSearch);
        
        console.log('Event listeners attached!');
    };

    // ========== PUBLIC API ==========
    return {
        init: () => {
            console.log('RecipeApp initializing...');
            
            // Initialize DOM references
            recipeContainer = document.querySelector('#recipe-container');
            filterButtons = document.querySelectorAll('.filter-btn');
            sortButtons = document.querySelectorAll('.sort-btn');
            searchInput = document.querySelector('#search-input');
            clearSearchBtn = document.querySelector('#clear-search-btn');
            recipeCounter = document.querySelector('#recipe-counter');
            
            // Load favorites from localStorage
            favorites = loadFavorites();
            
            // Setup and render
            setupEventListeners();
            updateDisplay();
            
            console.log('RecipeApp ready!');
        },
        
        updateDisplay: updateDisplay
    };
})();

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    RecipeApp.init();
});