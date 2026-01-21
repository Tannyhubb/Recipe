// IIFE: Module pattern to keep internal state and functions private
const RecipeApp = (() => {
    // ============= PRIVATE STATE & DATA =============
    
    // Recipe data with ingredients and steps (including nested substeps for 2 recipes)
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            ingredients: [
                "400g spaghetti",
                "200g pancetta, diced",
                "4 large eggs",
                "100g Pecorino Romano cheese",
                "Black pepper",
                "Salt"
            ],
            steps: [
                "Bring a large pot of salted water to boil",
                "While water heats, fry pancetta in a large pan until crispy",
                {
                    text: "In a bowl, whisk together eggs, cheese, and black pepper",
                    substeps: [
                        "Crack eggs into a mixing bowl",
                        "Add grated Pecorino Romano cheese",
                        "Season generously with freshly ground black pepper",
                        "Whisk until well combined"
                    ]
                },
                "Cook spaghetti according to package directions until al dente",
                {
                    text: "Combine pasta with pancetta and egg mixture",
                    substeps: [
                        "Drain pasta, reserving 1 cup of pasta water",
                        "Add hot pasta to pancetta pan (off heat)",
                        "Quickly add egg mixture while stirring constantly",
                        "Add pasta water gradually if needed for creaminess"
                    ]
                },
                "Serve immediately with extra Pecorino and black pepper"
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: [
                "800g chicken breast, cubed",
                "2 tablespoons tikka masala paste",
                "400ml coconut milk",
                "400g canned tomatoes",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "2 cm ginger, grated",
                "Fresh cilantro",
                "Basmati rice"
            ],
            steps: [
                "Marinate chicken with half the tikka paste for 15 minutes",
                "Heat oil in a large pan and sear chicken until golden, then set aside",
                "Sauté onion, garlic, and ginger until fragrant",
                {
                    text: "Build the sauce",
                    substeps: [
                        "Add remaining tikka paste to the pan and stir well",
                        "Add canned tomatoes and simmer for 5 minutes",
                        "Pour in coconut milk slowly while stirring",
                        "Season with salt and sugar to taste"
                    ]
                },
                "Return chicken to pan and simmer for 15-20 minutes",
                "Garnish with fresh cilantro and serve with basmati rice"
            ]
        },
        {
            id: 3,
            title: "Homemade Croissants",
            time: 180,
            difficulty: "hard",
            description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
            category: "baking",
            ingredients: [
                "500g bread flour",
                "250ml milk",
                "10g salt",
                "50g sugar",
                "10g instant yeast",
                "250g cold butter",
                "Egg wash (1 egg + 1 tbsp water)"
            ],
            steps: [
                "Mix flour, salt, and yeast in a bowl",
                "Add milk and sugar, knead until smooth dough forms",
                "Let dough rest for 30 minutes",
                "Laminate: roll dough to rectangle and fold in cold butter layers",
                "Chill for 30 minutes between each fold (3 total folds)",
                "Shape into croissants and let proof for 2 hours",
                "Brush with egg wash and bake at 200°C for 20 minutes until golden"
            ]
        },
        {
            id: 4,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
            category: "salad",
            ingredients: [
                "4 large tomatoes, chunked",
                "1 cucumber, sliced",
                "1 red onion, thinly sliced",
                "200g feta cheese, crumbled",
                "150g Kalamata olives",
                "Fresh oregano",
                "Extra virgin olive oil",
                "Red wine vinegar",
                "Salt and pepper"
            ],
            steps: [
                "Chop tomatoes into bite-sized chunks",
                "Slice cucumber and red onion",
                "Combine tomatoes, cucumber, and onion in a large bowl",
                "Add crumbled feta cheese and Kalamata olives",
                "Drizzle with olive oil and red wine vinegar",
                "Sprinkle with fresh oregano, salt, and pepper",
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
            ingredients: [
                "1kg beef fillet",
                "500g mushrooms, finely chopped",
                "200g prosciutto",
                "2 shallots, minced",
                "3 cloves garlic, minced",
                "500g puff pastry",
                "2 tablespoons Dijon mustard",
                "Fresh thyme",
                "Egg wash"
            ],
            steps: [
                "Season beef fillet and sear on all sides until browned",
                "Brush with Dijon mustard and wrap in prosciutto",
                "Make duxelles: sauté mushrooms, shallots, and garlic until dry",
                "Spread duxelles over beef",
                "Wrap entire beef in puff pastry with egg wash between layers",
                "Bake at 200°C for 25-30 minutes until pastry is golden",
                "Rest for 10 minutes before slicing and serving"
            ]
        },
        {
            id: 6,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
            category: "vegetarian",
            ingredients: [
                "400g mixed vegetables (broccoli, bell peppers, carrots, snap peas)",
                "3 cloves garlic, minced",
                "2 cm ginger, grated",
                "3 tablespoons soy sauce",
                "1 tablespoon sesame oil",
                "1 tablespoon oyster sauce",
                "2 tablespoons vegetable oil",
                "Sesame seeds",
                "Green onions, sliced"
            ],
            steps: [
                "Prep all vegetables: cut into uniform, bite-sized pieces",
                "Mix soy sauce, sesame oil, and oyster sauce in a small bowl",
                "Heat vegetable oil in a wok or large pan over high heat",
                "Stir-fry garlic and ginger until fragrant (10 seconds)",
                "Add vegetables and stir-fry until tender-crisp (5-7 minutes)",
                "Pour sauce over vegetables and toss to coat",
                "Garnish with sesame seeds and green onions, serve with rice"
            ]
        },
        {
            id: 7,
            title: "Pad Thai",
            time: 30,
            difficulty: "medium",
            description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
            category: "noodles",
            ingredients: [
                "300g dried rice noodles",
                "300g large shrimp, peeled",
                "3 tablespoons tamarind paste",
                "3 tablespoons fish sauce",
                "2 tablespoons palm sugar",
                "3 cloves garlic, minced",
                "2 eggs",
                "100g bean sprouts",
                "100g roasted peanuts, crushed",
                "2 green onions, chopped",
                "Lime wedges"
            ],
            steps: [
                "Soak rice noodles in warm water for 30 minutes until soft",
                "Mix tamarind paste, fish sauce, and palm sugar",
                "Heat oil in a large wok or pan and cook garlic",
                "Add shrimp and cook until pink (2-3 minutes)",
                "Push shrimp to the side, add beaten eggs to the pan",
                "Add softened noodles and sauce, toss everything together",
                "Add bean sprouts and green onions, toss for 1 minute",
                "Serve with crushed peanuts, extra sprouts, and lime wedges"
            ]
        },
        {
            id: 8,
            title: "Margherita Pizza",
            time: 60,
            difficulty: "medium",
            description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
            category: "pizza",
            ingredients: [
                "500g pizza dough",
                "300ml tomato sauce",
                "400g fresh mozzarella, sliced",
                "4 medium tomatoes, sliced",
                "Fresh basil leaves",
                "Extra virgin olive oil",
                "Sea salt",
                "Cornmeal (for dusting)"
            ],
            steps: [
                "Preheat oven to 250°C (or as hot as it will go)",
                "Stretch pizza dough to desired thickness",
                "Dust pizza peel with cornmeal and place dough on it",
                "Spread tomato sauce thinly over the dough",
                "Arrange mozzarella and tomato slices on top",
                "Drizzle with olive oil and sprinkle with sea salt",
                "Bake for 12-15 minutes until crust is crispy and cheese bubbles",
                "Add fresh basil leaves after removing from oven",
                "Slice and serve immediately"
            ]
        }
    ];

    // DOM elements
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filters button');
    const sortButtons = document.querySelectorAll('.sorters button');
    const searchInput = document.querySelector('#search-input');
    const recipeCounterDisplay = document.querySelector('#recipe-counter');

    // State
    let currentFilter = 'all';
    let currentSort = null;
    let currentSearchQuery = '';
    let favorites = loadFavorites();

    // ============= PRIVATE HELPER FUNCTIONS =============

    // Load favorites from localStorage
    const loadFavorites = () => {
        const saved = localStorage.getItem('recipeAppFavorites');
        return saved ? JSON.parse(saved) : [];
    };

    // Save favorites to localStorage
    const saveFavorites = () => {
        localStorage.setItem('recipeAppFavorites', JSON.stringify(favorites));
    };

    // Toggle favorite status for a recipe
    const toggleFavorite = (recipeId) => {
        const index = favorites.indexOf(recipeId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(recipeId);
        }
        saveFavorites();
        updateDisplay();
    };

    // Check if recipe is favorited
    const isFavorited = (recipeId) => {
        return favorites.includes(recipeId);
    };

    // Debounce function for search
    const createDebounce = (func, delay = 300) => {
        let timeoutId;
        return (query) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(query);
            }, delay);
        };
    };

    // Handle search input with debouncing
    const handleSearchInput = (query) => {
        currentSearchQuery = query.toLowerCase().trim();
        updateDisplay();
    };

    const debouncedSearch = createDebounce(handleSearchInput, 300);

    // Search recipes by title and ingredients
    const searchRecipes = (recipesList, searchQuery) => {
        if (!searchQuery) return recipesList;

        return recipesList.filter((recipe) => {
            const titleMatch = recipe.title.toLowerCase().includes(searchQuery);
            const ingredientMatch = recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchQuery)
            );
            return titleMatch || ingredientMatch;
        });
    };

    // Recursive function to render steps (supports nested substeps)
    const renderStepsRecursively = (stepsArray, level = 0) => {
        if (!Array.isArray(stepsArray) || stepsArray.length === 0) {
            return '';
        }

        return `
            <ol class="steps-list steps-level-${level}">
                ${stepsArray.map((step) => {
                    // Check if step is an object with text and substeps
                    if (typeof step === 'object' && step.text && step.substeps) {
                        return `
                            <li class="step-item">
                                <span class="step-text">${step.text}</span>
                                ${renderStepsRecursively(step.substeps, level + 1)}
                            </li>
                        `;
                    }
                    // Simple string step
                    return `
                        <li class="step-item">
                            <span class="step-text">${step}</span>
                        </li>
                    `;
                }).join('')}
            </ol>
        `;
    };

    // Create HTML for a single recipe card with collapsible sections
    const createRecipeCard = (recipe) => {
        const ingredientsHTML = recipe.ingredients
            ? `<ul class="ingredients-list">${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`
            : '';

        const stepsHTML = recipe.steps ? renderStepsRecursively(recipe.steps) : '';

        const favoriteClass = isFavorited(recipe.id) ? 'favorited' : '';
        const favoriteButtonText = isFavorited(recipe.id) ? '❤️' : '🤍';

        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <div class="recipe-card-header">
                    <h3>${recipe.title}</h3>
                    <button class="favorite-btn ${favoriteClass}" data-recipe-id="${recipe.id}" title="Add to favorites">
                        ${favoriteButtonText}
                    </button>
                </div>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="recipe-expandable">
                    <button class="expand-btn toggle-ingredients" data-recipe-id="${recipe.id}">
                        📋 Show Ingredients
                    </button>
                    <div class="ingredients-section hidden" data-recipe-id="${recipe.id}">
                        ${ingredientsHTML}
                    </div>
                </div>

                <div class="recipe-expandable">
                    <button class="expand-btn toggle-steps" data-recipe-id="${recipe.id}">
                        👣 Show Steps
                    </button>
                    <div class="steps-section hidden" data-recipe-id="${recipe.id}">
                        ${stepsHTML}
                    </div>
                </div>
            </div>
        `;
    };

    // Render recipes to DOM
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender
            .map(createRecipeCard)
            .join('');
        
        recipeContainer.innerHTML = recipeCardsHTML;
        updateRecipeCounter(recipesToRender.length);
        attachEventDelegation();
    };

    // Update recipe counter display
    const updateRecipeCounter = (displayedCount) => {
        const totalCount = recipes.length;
        recipeCounterDisplay.textContent = `Showing ${displayedCount} of ${totalCount} recipes`;
    };

    // Filter recipes
    const applyFilter = (recipesList, filterMode) => {
        if (filterMode === 'all') return recipesList;

        if (filterMode === 'favorites') {
            return recipesList.filter((recipe) => isFavorited(recipe.id));
        }

        if (filterMode === 'quick') {
            return recipesList.filter((recipe) => recipe.time < 30);
        }

        return recipesList.filter((recipe) => recipe.difficulty === filterMode);
    };

    // Sort recipes
    const applySort = (recipesList, sortMode) => {
        if (!sortMode) return recipesList;

        const copy = [...recipesList];

        if (sortMode === 'name') {
            return copy.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        if (sortMode === 'time') {
            return copy.sort((a, b) => a.time - b.time);
        }

        return copy;
    };

    // Update display
    const updateDisplay = () => {
        let filtered = applyFilter(recipes, currentFilter);
        filtered = searchRecipes(filtered, currentSearchQuery);
        const sorted = applySort(filtered, currentSort);
        renderRecipes(sorted);
    };

    // Update active button styles
    const setActiveButton = (buttons, activeAttr, value) => {
        buttons.forEach((btn) => {
            if (btn.getAttribute(activeAttr) === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Event delegation for expand/collapse buttons and favorites
    const attachEventDelegation = () => {
        recipeContainer.addEventListener('click', (e) => {
            const toggleIngredientsBtn = e.target.closest('.toggle-ingredients');
            const toggleStepsBtn = e.target.closest('.toggle-steps');
            const favoriteBtn = e.target.closest('.favorite-btn');

            if (toggleIngredientsBtn) {
                const recipeId = toggleIngredientsBtn.getAttribute('data-recipe-id');
                const ingredientsSection = document.querySelector(
                    `.ingredients-section[data-recipe-id="${recipeId}"]`
                );
                
                if (ingredientsSection) {
                    ingredientsSection.classList.toggle('hidden');
                    const text = ingredientsSection.classList.contains('hidden')
                        ? '📋 Show Ingredients'
                        : '📋 Hide Ingredients';
                    toggleIngredientsBtn.textContent = text;
                }
            }

            if (toggleStepsBtn) {
                const recipeId = toggleStepsBtn.getAttribute('data-recipe-id');
                const stepsSection = document.querySelector(
                    `.steps-section[data-recipe-id="${recipeId}"]`
                );
                
                if (stepsSection) {
                    stepsSection.classList.toggle('hidden');
                    const text = stepsSection.classList.contains('hidden')
                        ? '👣 Show Steps'
                        : '👣 Hide Steps';
                    toggleStepsBtn.textContent = text;
                }
            }

            if (favoriteBtn) {
                const recipeId = parseInt(favoriteBtn.getAttribute('data-recipe-id'), 10);
                toggleFavorite(recipeId);
            }
        });
    };

    // ============= EVENT LISTENERS =============

    // Filter button listeners
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.getAttribute('data-filter');
            currentFilter = selectedFilter;
            setActiveButton(filterButtons, 'data-filter', selectedFilter);
            updateDisplay();
        });
    });

    // Sort button listeners
    sortButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedSort = button.getAttribute('data-sort');
            currentSort = currentSort === selectedSort ? null : selectedSort;
            setActiveButton(sortButtons, 'data-sort', currentSort);
            updateDisplay();
        });
    });

    // Search input listener with debouncing
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });

    // ============= PUBLIC API =============
    return {
        init: () => {
            updateDisplay();
        }
    };
})();

// Initialize the app
RecipeApp.init();