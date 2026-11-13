/* =========================================================
   Sprinkle Bites — recipe data + app logic (no dependencies)
   ========================================================= */

const RECIPES = [
  {
    id: "shakshuka",
    title: "Shakshuka",
    emoji: "🍳",
    category: "Breakfast",
    gradient: "linear-gradient(135deg, #ffb36b, #e2582a)",
    tags: ["vegetarian", "eggs", "one-pan", "brunch"],
    time: 25,
    difficulty: "Easy",
    servings: 2,
    calories: 320,
    description: "Eggs poached in a smoky, spiced tomato sauce — one pan, crusty bread required.",
    ingredients: [
      { qty: 2, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "", item: "onion, diced" },
      { qty: 1, unit: "", item: "red bell pepper, diced" },
      { qty: 3, unit: "", item: "garlic cloves, sliced" },
      { qty: 1, unit: "tsp", item: "ground cumin" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 0.5, unit: "tsp", item: "chili flakes" },
      { qty: 400, unit: "g", item: "crushed tomatoes (1 can)" },
      { qty: 4, unit: "", item: "eggs" },
      { qty: 60, unit: "g", item: "feta, crumbled" },
      { qty: 1, unit: "handful", item: "fresh parsley, chopped" },
      { qty: null, unit: "", item: "Salt and pepper, to taste" },
      { qty: 1, unit: "", item: "crusty bread, to serve" }
    ],
    steps: [
      "Warm the olive oil in a wide skillet over medium heat. Add the onion and bell pepper and cook for 6–7 minutes, until soft and starting to colour.",
      "Stir in the garlic, cumin, paprika and chili flakes. Cook for 1 minute, until fragrant — don't let the garlic brown.",
      "Pour in the crushed tomatoes, season with salt and pepper, and simmer for 8–10 minutes until the sauce thickens and darkens slightly.",
      "Make four small wells in the sauce and crack an egg into each. Cover the pan and cook for 5–7 minutes, until the whites are set but the yolks are still soft.",
      "Scatter over the feta and parsley. Serve straight from the pan with plenty of bread for dipping."
    ]
  },
  {
    id: "pancakes",
    title: "Fluffy Buttermilk Pancakes",
    emoji: "🥞",
    category: "Breakfast",
    gradient: "linear-gradient(135deg, #f7d59c, #d99a4e)",
    tags: ["vegetarian", "baking", "weekend", "sweet"],
    time: 20,
    difficulty: "Easy",
    servings: 4,
    calories: 380,
    description: "Tall, tender pancakes with a tangy buttermilk crumb. The batter comes together in one bowl.",
    ingredients: [
      { qty: 2, unit: "cups", item: "all-purpose flour" },
      { qty: 2, unit: "tbsp", item: "sugar" },
      { qty: 2, unit: "tsp", item: "baking powder" },
      { qty: 0.5, unit: "tsp", item: "baking soda" },
      { qty: 0.5, unit: "tsp", item: "fine salt" },
      { qty: 2, unit: "cups", item: "buttermilk" },
      { qty: 2, unit: "", item: "eggs" },
      { qty: 4, unit: "tbsp", item: "butter, melted, plus more for the pan" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: null, unit: "", item: "Maple syrup and berries, to serve" }
    ],
    steps: [
      "Whisk the flour, sugar, baking powder, baking soda and salt in a large bowl.",
      "In a jug, whisk the buttermilk, eggs, melted butter and vanilla until smooth.",
      "Pour the wet into the dry and fold gently with a spatula — stop while a few lumps remain. Overmixing makes tough pancakes. Rest the batter for 5 minutes.",
      "Heat a non-stick pan over medium heat and brush with butter. Ladle in about ¼ cup of batter per pancake.",
      "Cook for 2–3 minutes, until bubbles appear and the edges look set, then flip and cook for 1–2 minutes more. Keep warm while you finish the batch.",
      "Stack high and serve with maple syrup and berries."
    ]
  },
  {
    id: "tomato-pasta",
    title: "Creamy Tomato Pasta",
    emoji: "🍝",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #ff9a76, #c0392b)",
    tags: ["vegetarian", "pasta", "30-minutes", "comfort"],
    time: 25,
    difficulty: "Easy",
    servings: 4,
    calories: 520,
    description: "A silky tomato and parmesan sauce that clings to every piece of rigatoni. Weeknight gold.",
    ingredients: [
      { qty: 400, unit: "g", item: "rigatoni or penne" },
      { qty: 2, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "", item: "onion, finely diced" },
      { qty: 3, unit: "", item: "garlic cloves, minced" },
      { qty: 2, unit: "tbsp", item: "tomato paste" },
      { qty: 400, unit: "g", item: "crushed tomatoes" },
      { qty: 120, unit: "ml", item: "heavy cream" },
      { qty: 40, unit: "g", item: "parmesan, finely grated" },
      { qty: 1, unit: "handful", item: "fresh basil leaves" },
      { qty: 0.5, unit: "tsp", item: "chili flakes (optional)" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Bring a large pot of well-salted water to the boil and cook the pasta until just shy of al dente. Reserve a mug of pasta water before draining.",
      "Meanwhile, heat the olive oil in a deep pan over medium heat. Soften the onion for 5 minutes, then add the garlic and chili flakes and cook for 1 minute.",
      "Stir in the tomato paste and cook for 2 minutes, until it darkens. Add the crushed tomatoes and simmer for 8 minutes.",
      "Pour in the cream and stir through the parmesan. Season, then add the drained pasta and a splash of pasta water. Toss over the heat for 1–2 minutes until glossy.",
      "Tear over the basil and finish with extra parmesan and black pepper."
    ]
  },
  {
    id: "tikka-masala",
    title: "Chicken Tikka Masala",
    emoji: "🍛",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f4a259, #b5451b)",
    tags: ["chicken", "curry", "spiced", "weekend"],
    time: 50,
    difficulty: "Medium",
    servings: 4,
    calories: 610,
    description: "Charred yogurt-marinated chicken folded into a velvety, gently spiced tomato cream sauce.",
    ingredients: [
      { qty: 600, unit: "g", item: "boneless chicken thighs" },
      { qty: 150, unit: "g", item: "plain yogurt" },
      { qty: 2, unit: "tbsp", item: "lemon juice" },
      { qty: 2, unit: "tsp", item: "garam masala" },
      { qty: 1, unit: "tsp", item: "ground turmeric" },
      { qty: 1, unit: "tsp", item: "ground cumin" },
      { qty: 3, unit: "tbsp", item: "butter" },
      { qty: 1, unit: "", item: "onion, finely chopped" },
      { qty: 4, unit: "", item: "garlic cloves, grated" },
      { qty: 1, unit: "tbsp", item: "fresh ginger, grated" },
      { qty: 2, unit: "tbsp", item: "tomato paste" },
      { qty: 400, unit: "g", item: "tomato purée" },
      { qty: 200, unit: "ml", item: "heavy cream" },
      { qty: 1, unit: "tsp", item: "sweet paprika" },
      { qty: null, unit: "", item: "Cilantro, rice and naan, to serve" }
    ],
    steps: [
      "Cut the chicken into bite-sized pieces. Mix with the yogurt, lemon juice, 1 tsp garam masala, turmeric and cumin. Marinate for at least 20 minutes (overnight is better).",
      "Heat a grill pan until very hot. Shake off excess marinade and char the chicken in batches for 3–4 minutes per side. Set aside.",
      "Melt the butter in a large pan and cook the onion for 7–8 minutes until golden. Add the garlic and ginger and cook for 1 minute.",
      "Stir in the tomato paste and paprika, cook for 2 minutes, then add the tomato purée and 100 ml water. Simmer for 12 minutes.",
      "Add the cream and remaining garam masala, then return the chicken to the pan. Simmer gently for 8 minutes.",
      "Season to taste and scatter with cilantro. Serve with basmati rice and warm naan."
    ]
  },
  {
    id: "buddha-bowl",
    title: "Rainbow Buddha Bowl",
    emoji: "🥗",
    category: "Lunch",
    gradient: "linear-gradient(135deg, #a8d5a2, #4f8a5b)",
    tags: ["vegan", "gluten-free", "healthy", "meal-prep"],
    time: 30,
    difficulty: "Easy",
    servings: 2,
    calories: 480,
    description: "Roasted sweet potato, crispy chickpeas and quinoa with a lemon-tahini dressing.",
    ingredients: [
      { qty: 1, unit: "cup", item: "quinoa, rinsed" },
      { qty: 1, unit: "", item: "large sweet potato, cubed" },
      { qty: 400, unit: "g", item: "chickpeas, drained (1 can)" },
      { qty: 2, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 0.5, unit: "tsp", item: "ground cumin" },
      { qty: 2, unit: "cups", item: "kale, shredded" },
      { qty: 1, unit: "", item: "avocado, sliced" },
      { qty: 1, unit: "", item: "carrot, ribboned" },
      { qty: 2, unit: "tbsp", item: "tahini" },
      { qty: 1, unit: "", item: "lemon, juiced" },
      { qty: 1, unit: "tbsp", item: "maple syrup" },
      { qty: 1, unit: "tbsp", item: "sesame seeds" },
      { qty: null, unit: "", item: "Salt and pepper" }
    ],
    steps: [
      "Heat the oven to 220°C / 425°F. Toss the sweet potato and chickpeas with 1 tbsp olive oil, paprika, cumin, salt and pepper on a large tray. Roast for 22–25 minutes, shaking halfway.",
      "Cook the quinoa in 2 cups of salted water: bring to the boil, cover, and simmer for 15 minutes. Rest off the heat for 5 minutes, then fluff with a fork.",
      "Massage the shredded kale with a pinch of salt and the remaining olive oil for 30 seconds, until it softens slightly.",
      "Whisk the tahini, lemon juice, maple syrup and 2–3 tbsp warm water into a pourable dressing. Season.",
      "Build the bowls: quinoa first, then kale, roasted vegetables, avocado and carrot. Drizzle generously with dressing and finish with sesame seeds."
    ]
  },
  {
    id: "black-bean-tacos",
    title: "Smoky Black Bean Tacos",
    emoji: "🌮",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f6c453, #d97b29)",
    tags: ["vegan", "mexican", "20-minutes", "crowd-pleaser"],
    time: 20,
    difficulty: "Easy",
    servings: 4,
    calories: 350,
    description: "Chipotle-spiced beans piled into warm tortillas with crunchy cabbage and lime.",
    ingredients: [
      { qty: 2, unit: "cans", item: "black beans, drained" },
      { qty: 1, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "", item: "onion, diced" },
      { qty: 2, unit: "", item: "garlic cloves, minced" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 1, unit: "tsp", item: "ground cumin" },
      { qty: 0.5, unit: "tsp", item: "chipotle powder" },
      { qty: 8, unit: "", item: "small corn tortillas" },
      { qty: 1, unit: "", item: "avocado, sliced" },
      { qty: 1, unit: "cup", item: "red cabbage, finely shredded" },
      { qty: 1, unit: "", item: "lime, cut into wedges" },
      { qty: 1, unit: "handful", item: "cilantro, chopped" },
      { qty: null, unit: "", item: "Salsa and hot sauce, to serve" }
    ],
    steps: [
      "Heat the olive oil in a skillet over medium heat. Cook the onion for 5 minutes until soft and translucent.",
      "Add the garlic, smoked paprika, cumin and chipotle powder. Stir for 30 seconds, then tip in the beans and 4 tbsp water.",
      "Simmer for 6–8 minutes, mashing about a third of the beans with the back of a spoon to thicken. Season with salt.",
      "Warm the tortillas in a dry pan for 20–30 seconds per side, stacking them under a towel to stay soft.",
      "Spoon in the beans, top with avocado, cabbage, cilantro and a squeeze of lime. Serve with salsa."
    ]
  },
  {
    id: "garlic-shrimp",
    title: "Garlic Butter Shrimp",
    emoji: "🍤",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #ffb4a2, #d1495b)",
    tags: ["seafood", "15-minutes", "pasta", "date-night"],
    time: 15,
    difficulty: "Easy",
    servings: 2,
    calories: 420,
    description: "Plump shrimp in a glossy garlic, lemon and butter sauce. Fifteen minutes, start to finish.",
    ingredients: [
      { qty: 500, unit: "g", item: "large shrimp, peeled" },
      { qty: 4, unit: "tbsp", item: "butter" },
      { qty: 5, unit: "", item: "garlic cloves, thinly sliced" },
      { qty: 0.5, unit: "tsp", item: "chili flakes" },
      { qty: 1, unit: "", item: "lemon, zest and juice" },
      { qty: 2, unit: "tbsp", item: "fresh parsley, chopped" },
      { qty: 200, unit: "g", item: "spaghetti or crusty bread, to serve" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Pat the shrimp very dry and season with salt and pepper. This is the secret to a good sear.",
      "Cook the pasta in salted water if using, reserving a splash of the cooking water.",
      "Melt half the butter in a large skillet over high heat. Add the shrimp in a single layer and cook for 1–2 minutes per side, until pink and just opaque. Remove to a plate.",
      "Lower the heat to medium, add the remaining butter, garlic and chili flakes. Cook for 1 minute until fragrant — don't let the garlic burn.",
      "Return the shrimp, add the lemon zest and juice and a splash of pasta water. Toss for 30 seconds until glossy.",
      "Stir through the parsley and serve over pasta or with bread for mopping."
    ]
  },
  {
    id: "mushroom-risotto",
    title: "Mushroom Risotto",
    emoji: "🍄",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e8dcc0, #a8926b)",
    tags: ["vegetarian", "rice", "comfort", "slow"],
    time: 40,
    difficulty: "Medium",
    servings: 4,
    calories: 540,
    description: "Creamy arborio rice with golden mushrooms, thyme and a final beat of cold butter.",
    ingredients: [
      { qty: 300, unit: "g", item: "arborio rice" },
      { qty: 1, unit: "l", item: "vegetable stock, kept warm" },
      { qty: 2, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "", item: "onion, very finely diced" },
      { qty: 300, unit: "g", item: "mixed mushrooms, sliced" },
      { qty: 3, unit: "", item: "garlic cloves, minced" },
      { qty: 120, unit: "ml", item: "dry white wine" },
      { qty: 60, unit: "g", item: "parmesan, grated" },
      { qty: 2, unit: "tbsp", item: "cold butter" },
      { qty: 1, unit: "tsp", item: "fresh thyme leaves" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Heat 1 tbsp olive oil in a wide pan over high heat. Sear the mushrooms in a single layer without stirring for 3 minutes, then toss and cook for 3 minutes more. Season and set aside.",
      "Add the remaining oil and the onion to the pan. Cook gently for 6 minutes until soft but not coloured.",
      "Stir in the garlic and rice and toast for 2 minutes, until the grains look translucent at the edges.",
      "Pour in the wine and stir until absorbed. Add the warm stock a ladle at a time, stirring often, waiting for each addition to be absorbed before adding more. This takes about 18–20 minutes.",
      "When the rice is tender with a slight bite, take the pan off the heat. Beat in the cold butter and parmesan, then fold through the mushrooms and thyme.",
      "Season, cover for 2 minutes to relax, and serve immediately with extra parmesan."
    ]
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🫒",
    category: "Lunch",
    gradient: "linear-gradient(135deg, #bfe3c0, #5d9c6a)",
    tags: ["vegetarian", "no-cook", "summer", "gluten-free"],
    time: 15,
    difficulty: "Easy",
    servings: 4,
    calories: 280,
    description: "Sun-ripe tomatoes, cucumber and briny olives under a slab of feta and good olive oil.",
    ingredients: [
      { qty: 4, unit: "", item: "ripe tomatoes, cut into wedges" },
      { qty: 1, unit: "", item: "cucumber, thickly sliced" },
      { qty: 1, unit: "", item: "small red onion, thinly sliced" },
      { qty: 1, unit: "", item: "green bell pepper, sliced" },
      { qty: 150, unit: "g", item: "feta, in one piece" },
      { qty: 100, unit: "g", item: "kalamata olives" },
      { qty: 3, unit: "tbsp", item: "extra-virgin olive oil" },
      { qty: 1, unit: "tbsp", item: "red wine vinegar" },
      { qty: 1, unit: "tsp", item: "dried oregano" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Soak the sliced onion in cold water for 5 minutes to take the edge off, then drain well.",
      "Arrange the tomatoes, cucumber, pepper and onion in a wide shallow bowl. Season lightly with salt.",
      "Scatter over the olives, then lay the feta on top in one piece — don't crumble it, that's the Greek way.",
      "Whisk the olive oil and vinegar with a pinch of oregano and pour over the salad.",
      "Finish with the rest of the oregano and plenty of black pepper. Serve with bread to mop up the juices."
    ]
  },
  {
    id: "lava-cake",
    title: "Molten Chocolate Lava Cake",
    emoji: "🍫",
    category: "Dessert",
    gradient: "linear-gradient(135deg, #a9745b, #4a2c22)",
    tags: ["chocolate", "baking", "date-night", "sweet"],
    time: 25,
    difficulty: "Medium",
    servings: 4,
    calories: 450,
    description: "Crisp-edged chocolate cakes with a river of molten centre. Make the batter ahead and bake to order.",
    ingredients: [
      { qty: 115, unit: "g", item: "dark chocolate (70%), chopped" },
      { qty: 115, unit: "g", item: "butter, plus extra for the ramekins" },
      { qty: 2, unit: "", item: "eggs" },
      { qty: 2, unit: "", item: "egg yolks" },
      { qty: 60, unit: "g", item: "caster sugar" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: 30, unit: "g", item: "plain flour" },
      { qty: 1, unit: "pinch", item: "fine salt" },
      { qty: 1, unit: "tbsp", item: "cocoa powder, for dusting" },
      { qty: null, unit: "", item: "Vanilla ice cream, to serve" }
    ],
    steps: [
      "Heat the oven to 200°C / 400°F. Butter four ramekins and dust with cocoa powder, tapping out the excess.",
      "Melt the chocolate and butter together in a heatproof bowl over barely simmering water. Stir until smooth, then cool for 5 minutes.",
      "Whisk the eggs, yolks, sugar and vanilla for 3–4 minutes, until pale and thickened — the mixture should leave a trail.",
      "Fold in the chocolate mixture, then sift over the flour and salt and fold gently until just combined.",
      "Divide between the ramekins. Bake for 10–12 minutes, until the tops are set but the centres still wobble slightly.",
      "Rest for 1 minute, run a knife around the edge, and turn out onto plates. Serve immediately with ice cream."
    ]
  },
  {
    id: "blueberry-scones",
    title: "Lemon Blueberry Scones",
    emoji: "🫐",
    category: "Breakfast",
    gradient: "linear-gradient(135deg, #c9d9f0, #7d8fc4)",
    tags: ["baking", "vegetarian", "sweet", "weekend"],
    time: 35,
    difficulty: "Medium",
    servings: 8,
    calories: 310,
    description: "Craggy, buttery scones shot through with blueberries and finished with lemon glaze.",
    ingredients: [
      { qty: 2, unit: "cups", item: "all-purpose flour" },
      { qty: 0.33, unit: "cup", item: "sugar" },
      { qty: 1, unit: "tbsp", item: "baking powder" },
      { qty: 0.5, unit: "tsp", item: "fine salt" },
      { qty: 115, unit: "g", item: "cold butter, cubed" },
      { qty: 1, unit: "cup", item: "blueberries" },
      { qty: 120, unit: "ml", item: "heavy cream, plus more for brushing" },
      { qty: 1, unit: "", item: "egg" },
      { qty: 1, unit: "", item: "lemon, zest only" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: 80, unit: "g", item: "powdered sugar" },
      { qty: 1, unit: "tbsp", item: "lemon juice" }
    ],
    steps: [
      "Heat the oven to 200°C / 400°F and line a baking tray. Whisk the flour, sugar, baking powder, salt and lemon zest in a large bowl.",
      "Rub in the cold butter with your fingertips until the mixture looks like coarse breadcrumbs with a few larger flakes left in.",
      "Toss the blueberries in a spoonful of flour, then fold them in gently.",
      "Whisk the cream, egg and vanilla, then add to the dry ingredients. Stir with a knife until a shaggy dough forms — don't overwork it.",
      "Turn onto a floured surface, pat into a 3 cm thick round, and cut into 8 wedges. Brush the tops with cream and bake for 18–20 minutes until golden.",
      "Cool slightly, then mix the powdered sugar and lemon juice into a thick glaze and drizzle over the warm scones."
    ]
  },
  {
    id: "green-curry",
    title: "Thai Green Curry",
    emoji: "🍜",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #b7e4a8, #3f7d4a)",
    tags: ["chicken", "curry", "spicy", "one-pot"],
    time: 35,
    difficulty: "Easy",
    servings: 4,
    calories: 560,
    description: "Fragrant coconut curry with chicken, aubergine and a bright hit of Thai basil and lime.",
    ingredients: [
      { qty: 2, unit: "tbsp", item: "coconut oil" },
      { qty: 3, unit: "tbsp", item: "green curry paste" },
      { qty: 400, unit: "ml", item: "coconut milk" },
      { qty: 500, unit: "g", item: "chicken breast, sliced" },
      { qty: 1, unit: "", item: "aubergine, cut into chunks" },
      { qty: 1, unit: "", item: "red bell pepper, sliced" },
      { qty: 100, unit: "g", item: "green beans, trimmed" },
      { qty: 1, unit: "tbsp", item: "fish sauce" },
      { qty: 1, unit: "tsp", item: "brown sugar" },
      { qty: 1, unit: "handful", item: "Thai basil leaves" },
      { qty: 1, unit: "", item: "lime, juiced" },
      { qty: 300, unit: "g", item: "jasmine rice, to serve" }
    ],
    steps: [
      "Cook the jasmine rice according to the packet instructions.",
      "Heat the coconut oil in a wok or deep pan over medium heat. Add the curry paste and fry for 1–2 minutes, until it smells fragrant and darkens slightly.",
      "Pour in the thick top layer of the coconut milk and stir until the oil splits and the sauce looks glossy.",
      "Add the chicken and cook for 3 minutes, then pour in the rest of the coconut milk and add the aubergine. Simmer for 8 minutes.",
      "Add the pepper and green beans and cook for 4–5 minutes, until just tender.",
      "Season with the fish sauce and sugar. Take off the heat, stir through the Thai basil and lime juice, and serve with rice."
    ]
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast, Properly",
    emoji: "🥑",
    category: "Breakfast",
    gradient: "linear-gradient(135deg, #cbe6a0, #6c9a3f)",
    tags: ["vegan", "10-minutes", "quick", "healthy"],
    time: 10,
    difficulty: "Easy",
    servings: 2,
    calories: 290,
    description: "Good bread, ripe avocado, sharp lemon and flaky salt. Simple things, done with care.",
    ingredients: [
      { qty: 2, unit: "slices", item: "sourdough bread" },
      { qty: 1, unit: "", item: "ripe avocado" },
      { qty: 0.5, unit: "", item: "lemon, juiced" },
      { qty: 1, unit: "", item: "garlic clove, halved" },
      { qty: 1, unit: "tbsp", item: "extra-virgin olive oil" },
      { qty: 0.5, unit: "tsp", item: "chili flakes" },
      { qty: 6, unit: "", item: "cherry tomatoes, halved" },
      { qty: 1, unit: "tbsp", item: "toasted seeds" },
      { qty: null, unit: "", item: "Flaky salt and black pepper" }
    ],
    steps: [
      "Toast the bread until deeply golden — more than you think. Rub the cut garlic clove across the hot surface.",
      "Halve the avocado, scoop into a bowl, and mash roughly with the lemon juice, a pinch of salt and a grind of pepper. Keep it chunky.",
      "Pile the avocado onto the toast and spread to the edges.",
      "Top with the cherry tomatoes, a drizzle of olive oil, chili flakes, toasted seeds and a generous pinch of flaky salt.",
      "Eat immediately, standing up, if possible."
    ]
  },
  {
    id: "beef-chili",
    title: "Weeknight Beef Chili",
    emoji: "🌶️",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e8896b, #8c2f1f)",
    tags: ["beef", "one-pot", "batch-cook", "comfort"],
    time: 45,
    difficulty: "Easy",
    servings: 6,
    calories: 480,
    description: "A deep, smoky chili that tastes like it simmered all day. Freezes beautifully.",
    ingredients: [
      { qty: 500, unit: "g", item: "ground beef" },
      { qty: 1, unit: "tbsp", item: "olive oil" },
      { qty: 1, unit: "", item: "onion, diced" },
      { qty: 1, unit: "", item: "red bell pepper, diced" },
      { qty: 3, unit: "", item: "garlic cloves, minced" },
      { qty: 2, unit: "tbsp", item: "tomato paste" },
      { qty: 400, unit: "g", item: "diced tomatoes (1 can)" },
      { qty: 2, unit: "cans", item: "kidney beans, drained" },
      { qty: 1, unit: "tbsp", item: "chili powder" },
      { qty: 1, unit: "tsp", item: "ground cumin" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 500, unit: "ml", item: "beef stock" },
      { qty: null, unit: "", item: "Cheddar, sour cream and cilantro, to serve" }
    ],
    steps: [
      "Heat the oil in a heavy pot over medium-high heat. Brown the beef in a single layer, breaking it up only after it has a good crust, about 5 minutes.",
      "Add the onion and pepper and cook for 5 minutes, then stir in the garlic and tomato paste and cook for 2 minutes.",
      "Add the chili powder, cumin and paprika and stir for 30 seconds to bloom the spices.",
      "Tip in the tomatoes, beans and stock. Bring to a simmer, then lower the heat and cook uncovered for 25–30 minutes, stirring occasionally, until thickened.",
      "Season with salt and pepper. Serve with cheddar, sour cream and cilantro — or cool and freeze for up to 3 months."
    ]
  },
  {
    id: "carbonara",
    title: "Spaghetti Carbonara",
    emoji: "🍝",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f2d6a2, #c99a4e)",
    tags: ["pasta", "italian", "20-minutes", "comfort"],
    time: 20,
    difficulty: "Medium",
    servings: 4,
    calories: 640,
    description: "Guanciale, egg yolks and pecorino — no cream, no shortcuts. The Roman classic, done right.",
    ingredients: [
      { qty: 400, unit: "g", item: "spaghetti" },
      { qty: 150, unit: "g", item: "guanciale or pancetta, cut into strips" },
      { qty: 4, unit: "", item: "egg yolks" },
      { qty: 1, unit: "", item: "whole egg" },
      { qty: 80, unit: "g", item: "pecorino romano, finely grated" },
      { qty: 1, unit: "tsp", item: "black pepper, freshly cracked" },
      { qty: null, unit: "", item: "Salt for the pasta water" }
    ],
    steps: [
      "Bring a large pot of well-salted water to the boil. Cook the spaghetti until al dente, then reserve a mug of pasta water before draining.",
      "While the pasta cooks, put the guanciale in a cold, wide pan and set it over medium heat. Cook for 6–8 minutes, until the fat renders and the edges are crisp. Take the pan off the heat.",
      "Whisk the egg yolks, whole egg, pecorino and most of the black pepper in a bowl until you have a thick paste.",
      "Tip the drained pasta into the warm guanciale pan and toss to coat. Add a splash of pasta water if it looks dry.",
      "Off the heat, pour in the egg mixture and toss hard, adding pasta water a spoonful at a time until the sauce is glossy and clings to every strand. Never let it scramble.",
      "Serve immediately with more pecorino and a heavy grind of black pepper."
    ]
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f6c26b, #b23a2e)",
    tags: ["pizza", "italian", "vegetarian", "weekend"],
    time: 90,
    difficulty: "Medium",
    servings: 2,
    calories: 720,
    description: "Blistered crust, San Marzano tomatoes, torn mozzarella and basil. A Friday-night ritual worth the wait.",
    ingredients: [
      { qty: 300, unit: "g", item: "00 flour, plus extra for dusting" },
      { qty: 200, unit: "ml", item: "lukewarm water" },
      { qty: 7, unit: "g", item: "dried yeast (1 sachet)" },
      { qty: 1, unit: "tsp", item: "fine salt" },
      { qty: 1, unit: "tbsp", item: "olive oil" },
      { qty: 400, unit: "g", item: "canned San Marzano tomatoes" },
      { qty: 200, unit: "g", item: "fresh mozzarella, torn" },
      { qty: 1, unit: "handful", item: "fresh basil leaves" },
      { qty: 2, unit: "tbsp", item: "parmesan, grated" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Mix the flour, yeast and salt in a bowl. Add the water and olive oil and knead for 8–10 minutes, until smooth and elastic.",
      "Cover and leave to rise in a warm spot for 1 hour, until doubled in size.",
      "Crush the tomatoes by hand, season with salt and a little olive oil, and set aside. Do not cook the sauce.",
      "Heat the oven as high as it will go (250–280°C) with a pizza stone or an upturned baking tray inside for at least 30 minutes.",
      "Divide the dough into two balls. Stretch each one on a floured surface into a thin round, leaving a puffy rim.",
      "Spread over a thin layer of tomato, scatter with mozzarella and parmesan, and bake for 7–10 minutes, until the crust is blistered and the cheese is bubbling.",
      "Finish with fresh basil and a drizzle of olive oil before slicing."
    ]
  },
  {
    id: "smash-burger",
    title: "Smash Burger",
    emoji: "🍔",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e0a06a, #7a3b22)",
    tags: ["beef", "burger", "25-minutes", "crowd-pleaser"],
    time: 25,
    difficulty: "Easy",
    servings: 2,
    calories: 720,
    description: "Thin, lacy-edged patties with melted cheddar, pickles and burger sauce. Better than takeaway.",
    ingredients: [
      { qty: 400, unit: "g", item: "ground beef (20% fat)" },
      { qty: 2, unit: "", item: "brioche buns, split" },
      { qty: 4, unit: "slices", item: "cheddar" },
      { qty: 4, unit: "", item: "pickle slices" },
      { qty: 0.5, unit: "", item: "small onion, thinly sliced" },
      { qty: 2, unit: "leaves", item: "iceberg lettuce" },
      { qty: 3, unit: "tbsp", item: "mayonnaise" },
      { qty: 1, unit: "tbsp", item: "ketchup" },
      { qty: 1, unit: "tsp", item: "Dijon mustard" },
      { qty: 0.5, unit: "tsp", item: "smoked paprika" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Mix the mayonnaise, ketchup, mustard and smoked paprika into a burger sauce. Season to taste.",
      "Divide the beef into four loose balls and season the outsides with salt and pepper. Don't compact them.",
      "Heat a heavy skillet over high heat until smoking. Place a ball in the pan and smash it flat with a spatula for 10 seconds. Cook for 90 seconds, until the edges are lacy and crisp.",
      "Flip, immediately top with cheddar, and cook for 45 seconds more. Repeat with the remaining patties.",
      "Toast the buns cut-side down in the pan for 30 seconds.",
      "Build: sauce, lettuce, two patties, onion, pickles, more sauce. Press gently and eat straight away."
    ]
  },
  {
    id: "chicken-stir-fry",
    title: "Ginger Chicken Stir-Fry",
    emoji: "🥢",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #b9d98a, #4f7a34)",
    tags: ["chicken", "25-minutes", "one-pan", "weeknight"],
    time: 25,
    difficulty: "Easy",
    servings: 4,
    calories: 480,
    description: "Glossy ginger-garlic chicken with crisp vegetables — faster than delivery, twice as good.",
    ingredients: [
      { qty: 500, unit: "g", item: "chicken thighs, sliced" },
      { qty: 2, unit: "tbsp", item: "soy sauce" },
      { qty: 1, unit: "tbsp", item: "oyster sauce" },
      { qty: 1, unit: "tsp", item: "sesame oil" },
      { qty: 1, unit: "tbsp", item: "cornstarch" },
      { qty: 2, unit: "tbsp", item: "neutral oil" },
      { qty: 1, unit: "", item: "head of broccoli, cut into florets" },
      { qty: 1, unit: "", item: "red bell pepper, sliced" },
      { qty: 1, unit: "", item: "carrot, thinly sliced" },
      { qty: 3, unit: "", item: "garlic cloves, minced" },
      { qty: 1, unit: "tbsp", item: "fresh ginger, grated" },
      { qty: 3, unit: "", item: "spring onions, sliced" },
      { qty: 300, unit: "g", item: "jasmine rice, to serve" }
    ],
    steps: [
      "Toss the chicken with 1 tbsp soy sauce, the cornstarch and a pinch of pepper. Leave to sit while you prep the vegetables.",
      "Cook the rice according to the packet instructions.",
      "Mix the remaining soy sauce, oyster sauce, sesame oil and 2 tbsp water in a small bowl.",
      "Heat 1 tbsp oil in a wok over high heat. Stir-fry the chicken in a single layer for 3–4 minutes, until golden. Remove to a plate.",
      "Add the remaining oil and the broccoli, pepper and carrot. Stir-fry for 3–4 minutes, until just tender but still crunchy.",
      "Add the garlic and ginger and cook for 30 seconds, then return the chicken with the sauce. Toss for 1 minute until glossy.",
      "Scatter with spring onions and serve over rice."
    ]
  },
  {
    id: "choc-chip-cookies",
    title: "Chocolate Chip Cookies",
    emoji: "🍪",
    category: "Dessert",
    gradient: "linear-gradient(135deg, #d9a878, #8a5a33)",
    tags: ["baking", "chocolate", "sweet", "crowd-pleaser"],
    time: 45,
    difficulty: "Easy",
    servings: 12,
    calories: 210,
    description: "Crisp edges, chewy middles and pools of dark chocolate. The only cookie recipe you need.",
    ingredients: [
      { qty: 115, unit: "g", item: "butter, softened" },
      { qty: 100, unit: "g", item: "light brown sugar" },
      { qty: 50, unit: "g", item: "caster sugar" },
      { qty: 1, unit: "", item: "egg" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: 160, unit: "g", item: "plain flour" },
      { qty: 0.5, unit: "tsp", item: "baking soda" },
      { qty: 0.5, unit: "tsp", item: "fine salt" },
      { qty: 150, unit: "g", item: "dark chocolate, roughly chopped" },
      { qty: null, unit: "", item: "Flaky sea salt, to finish" }
    ],
    steps: [
      "Beat the butter and both sugars for 3–4 minutes, until pale and fluffy.",
      "Beat in the egg and vanilla, scraping down the bowl.",
      "Fold in the flour, baking soda and salt until just combined, then stir through the chocolate. Don't overmix.",
      "Chill the dough for at least 30 minutes — this is what gives you chewy centres.",
      "Heat the oven to 180°C / 350°F and line two trays. Roll the dough into 12 balls and space them well apart.",
      "Bake for 10–12 minutes, until the edges are golden but the middles still look underdone.",
      "Sprinkle with flaky salt and cool on the tray for 10 minutes before moving."
    ]
  },
  {
    id: "banana-bread",
    title: "Brown Butter Banana Bread",
    emoji: "🍌",
    category: "Breakfast",
    gradient: "linear-gradient(135deg, #f3d9a4, #b98a4e)",
    tags: ["baking", "vegetarian", "sweet", "make-ahead"],
    time: 65,
    difficulty: "Easy",
    servings: 8,
    calories: 290,
    description: "Moist, deeply banana-y and barely sweet — the best possible use for spotty bananas.",
    ingredients: [
      { qty: 3, unit: "", item: "very ripe bananas" },
      { qty: 115, unit: "g", item: "butter" },
      { qty: 100, unit: "g", item: "light brown sugar" },
      { qty: 2, unit: "", item: "eggs" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: 200, unit: "g", item: "plain flour" },
      { qty: 1, unit: "tsp", item: "baking soda" },
      { qty: 0.5, unit: "tsp", item: "fine salt" },
      { qty: 1, unit: "tsp", item: "ground cinnamon" },
      { qty: 50, unit: "g", item: "walnuts, roughly chopped" }
    ],
    steps: [
      "Heat the oven to 175°C / 350°F. Grease and line a 900 g loaf tin.",
      "Melt the butter in a small pan over medium heat and cook for 3–4 minutes, until it smells nutty and the milk solids turn golden. Cool slightly.",
      "Mash the bananas in a large bowl, then whisk in the brown sugar, eggs, vanilla and brown butter.",
      "Fold in the flour, baking soda, salt and cinnamon until just combined, then stir through most of the walnuts.",
      "Scrape into the tin, scatter the remaining walnuts over the top, and bake for 50–55 minutes, until a skewer comes out with just a few moist crumbs.",
      "Cool in the tin for 10 minutes, then turn out onto a rack. Slice thick and toast the next day."
    ]
  },
  {
    id: "creamy-salmon-pasta",
    title: "Creamy Salmon Pasta",
    emoji: "🐟",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f5c9b8, #d98a78)",
    tags: ["pasta", "salmon", "30-minutes", "weeknight"],
    time: 30,
    difficulty: "Easy",
    servings: 4,
    calories: 620,
    description: "Silky cream sauce, flaky salmon and a squeeze of lemon. Comfort that still feels like dinner.",
    ingredients: [
      { qty: 400, unit: "g", item: "salmon fillets, skin removed" },
      { qty: 350, unit: "g", item: "linguine or fettuccine" },
      { qty: 200, unit: "ml", item: "double cream" },
      { qty: 60, unit: "ml", item: "dry white wine (optional)" },
      { qty: 2, unit: "cloves", item: "garlic, finely sliced" },
      { qty: 1, unit: "", item: "lemon, zest and juice" },
      { qty: 30, unit: "g", item: "parmesan, finely grated" },
      { qty: 2, unit: "tbsp", item: "fresh dill, chopped" },
      { qty: 1, unit: "tbsp", item: "butter" },
      { qty: 1, unit: "tbsp", item: "olive oil" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Bring a large pot of salted water to the boil and cook the pasta until al dente. Reserve a mug of pasta water, then drain.",
      "Season the salmon with salt and pepper. Heat the olive oil in a wide pan over medium-high heat and sear the salmon for 3 minutes per side, until just cooked. Lift onto a plate and flake into large pieces.",
      "Lower the heat, add the butter and garlic, and cook for 30 seconds. Pour in the wine (if using) and let it bubble for a minute.",
      "Add the cream, lemon zest and a squeeze of juice. Simmer gently for 2 minutes until slightly thickened.",
      "Tip the pasta into the sauce with a splash of pasta water. Toss to coat, then fold in the salmon, parmesan and most of the dill.",
      "Taste and adjust salt, pepper and lemon. Serve with the remaining dill and extra parmesan."
    ]
  },
  {
    id: "crispy-chicken-alfredo-wraps",
    title: "Crispy Chicken Alfredo Wraps",
    emoji: "🌯",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #f2d6a2, #c99a4e)",
    tags: ["chicken", "wraps", "30-minutes", "crowd-pleaser"],
    time: 35,
    difficulty: "Medium",
    servings: 4,
    calories: 680,
    description: "Crispy fried chicken tucked into warm tortillas with a creamy alfredo sauce. Dinner in 35.",
    ingredients: [
      { qty: 500, unit: "g", item: "chicken breast, cut into strips" },
      { qty: 100, unit: "g", item: "plain flour" },
      { qty: 2, unit: "", item: "eggs, beaten" },
      { qty: 120, unit: "g", item: "panko breadcrumbs" },
      { qty: 4, unit: "", item: "large flour tortillas" },
      { qty: 200, unit: "ml", item: "double cream" },
      { qty: 40, unit: "g", item: "parmesan, grated" },
      { qty: 2, unit: "cloves", item: "garlic, minced" },
      { qty: 1, unit: "tbsp", item: "butter" },
      { qty: 60, unit: "g", item: "baby spinach" },
      { qty: null, unit: "", item: "Oil for frying" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Season the chicken strips with salt and pepper. Set up three bowls: flour, beaten egg, and panko. Coat each strip in flour, then egg, then panko.",
      "Heat 2 cm of oil in a wide pan to 180°C / 350°F. Fry the chicken in batches for 3–4 minutes, until golden and cooked through. Drain on kitchen paper.",
      "For the alfredo, melt the butter in a small pan, add the garlic and cook for 30 seconds. Pour in the cream, simmer for 2 minutes, then stir in the parmesan until smooth. Season to taste.",
      "Warm the tortillas in a dry pan for 20 seconds per side. Lay spinach down the centre, top with crispy chicken, and spoon over the alfredo.",
      "Fold the sides in and roll up tightly. Slice in half and serve straight away."
    ]
  },
  {
    id: "nashville-hot-chicken-tenders",
    title: "Nashville Hot Chicken Tenders",
    emoji: "🌶️",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e0a06a, #9a3b22)",
    tags: ["chicken", "spicy", "fried", "crowd-pleaser"],
    time: 40,
    difficulty: "Medium",
    servings: 4,
    calories: 560,
    description: "Crispy buttermilk tenders drenched in cayenne-butter hot oil. Eat with pickles and white bread.",
    ingredients: [
      { qty: 600, unit: "g", item: "chicken tenders" },
      { qty: 250, unit: "ml", item: "buttermilk" },
      { qty: 2, unit: "tbsp", item: "hot sauce" },
      { qty: 200, unit: "g", item: "plain flour" },
      { qty: 2, unit: "tsp", item: "cayenne pepper" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 1, unit: "tsp", item: "garlic powder" },
      { qty: 1, unit: "tsp", item: "salt" },
      { qty: 4, unit: "tbsp", item: "butter" },
      { qty: 2, unit: "tbsp", item: "cayenne pepper (for the hot oil)" },
      { qty: 1, unit: "tbsp", item: "brown sugar" },
      { qty: 1, unit: "tsp", item: "chilli flakes" },
      { qty: null, unit: "", item: "Oil for frying" },
      { qty: null, unit: "", item: "Dill pickles and white bread, to serve" }
    ],
    steps: [
      "Whisk the buttermilk and hot sauce in a bowl. Add the chicken tenders, cover, and marinate in the fridge for at least 30 minutes.",
      "Mix the flour, cayenne, smoked paprika, garlic powder and salt in a shallow dish. Lift the tenders from the buttermilk, let the excess drip off, and coat well in the flour. Rest on a rack for 10 minutes.",
      "Heat 3 cm of oil to 175°C / 350°F and fry the tenders in batches for 5–6 minutes, until deep golden and cooked through. Drain on a rack.",
      "For the hot oil, melt the butter in a small pan. Off the heat, whisk in the cayenne, brown sugar and chilli flakes. Spoon generously over the hot tenders.",
      "Serve immediately with dill pickles and slices of white bread to mop up the sauce."
    ]
  },
  {
    id: "no-bake-biscoff-cheesecake",
    title: "No-Bake Biscoff Cheesecake",
    emoji: "🍰",
    category: "Dessert",
    gradient: "linear-gradient(135deg, #d9a878, #8a5a33)",
    tags: ["dessert", "no-bake", "make-ahead", "crowd-pleaser"],
    time: 25,
    difficulty: "Easy",
    servings: 10,
    calories: 460,
    description: "Creamy Biscoff filling on a buttery biscuit base, finished with a melted cookie-butter swirl.",
    ingredients: [
      { qty: 250, unit: "g", item: "Biscoff (speculoos) cookies" },
      { qty: 100, unit: "g", item: "butter, melted" },
      { qty: 500, unit: "g", item: "cream cheese, room temperature" },
      { qty: 200, unit: "g", item: "Biscoff spread (cookie butter)" },
      { qty: 200, unit: "ml", item: "double cream" },
      { qty: 80, unit: "g", item: "icing sugar" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: null, unit: "", item: "Extra Biscoff cookies, to decorate" }
    ],
    steps: [
      "Blitz the Biscoff cookies to fine crumbs and mix with the melted butter. Press firmly into the base of a 20 cm springform tin and chill for 20 minutes.",
      "Beat the cream cheese, 150 g of the Biscoff spread, icing sugar and vanilla until smooth.",
      "In a separate bowl, whip the cream to soft peaks, then fold it into the cream cheese mixture until no streaks remain.",
      "Spoon the filling over the chilled base and smooth the top. Chill for at least 4 hours, or overnight.",
      "Melt the remaining Biscoff spread and drizzle over the cheesecake. Finish with crushed cookies and slice with a hot knife."
    ]
  },
  {
    id: "crispy-butter-chicken-tacos",
    title: "Crispy Butter Chicken Tacos",
    emoji: "🌮",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e8a87c, #c0392b)",
    tags: ["chicken", "tacos", "30-minutes", "crowd-pleaser"],
    time: 35,
    difficulty: "Medium",
    servings: 4,
    calories: 640,
    description: "Crispy fried chicken tucked into warm tortillas with a buttery, spiced tomato sauce.",
    ingredients: [
      { qty: 500, unit: "g", item: "chicken thighs, boneless" },
      { qty: 120, unit: "ml", item: "buttermilk" },
      { qty: 100, unit: "g", item: "plain flour" },
      { qty: 1, unit: "tsp", item: "garam masala" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 0.5, unit: "tsp", item: "chilli powder" },
      { qty: 8, unit: "", item: "small flour tortillas" },
      { qty: 2, unit: "tbsp", item: "butter" },
      { qty: 1, unit: "tbsp", item: "tomato paste" },
      { qty: 120, unit: "ml", item: "double cream" },
      { qty: 2, unit: "cloves", item: "garlic, minced" },
      { qty: 1, unit: "tsp", item: "grated ginger" },
      { qty: 0.5, unit: "tsp", item: "garam masala (for the sauce)" },
      { qty: null, unit: "", item: "Oil for frying" },
      { qty: null, unit: "", item: "Fresh coriander and lime wedges, to serve" }
    ],
    steps: [
      "Marinate the chicken in buttermilk with a pinch of salt for 20 minutes. Mix the flour, garam masala, smoked paprika and chilli powder in a shallow bowl.",
      "Lift the chicken from the buttermilk, coat well in the spiced flour, and rest on a rack for 10 minutes.",
      "Heat 2 cm of oil to 180°C / 350°F and fry the chicken for 5–6 minutes, until golden and cooked through. Drain on kitchen paper, then slice into strips.",
      "For the sauce, melt the butter in a pan, add the garlic and ginger, and cook for 30 seconds. Stir in the tomato paste and garam masala, then pour in the cream. Simmer for 2 minutes.",
      "Warm the tortillas. Fill with crispy chicken, spoon over the butter sauce, and finish with coriander and a squeeze of lime."
    ]
  },
  {
    id: "crispy-hot-honey-chicken-burger",
    title: "Crispy Hot Honey Chicken Burger",
    emoji: "🍔",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #e0a06a, #7a3b22)",
    tags: ["chicken", "burger", "30-minutes", "crowd-pleaser"],
    time: 35,
    difficulty: "Medium",
    servings: 2,
    calories: 760,
    description: "Crispy fried chicken on a soft bun with a sticky hot honey glaze and cool pickles.",
    ingredients: [
      { qty: 2, unit: "", item: "chicken breasts, halved horizontally" },
      { qty: 100, unit: "ml", item: "buttermilk" },
      { qty: 100, unit: "g", item: "plain flour" },
      { qty: 1, unit: "tsp", item: "smoked paprika" },
      { qty: 0.5, unit: "tsp", item: "garlic powder" },
      { qty: 2, unit: "", item: "brioche buns, split" },
      { qty: 3, unit: "tbsp", item: "honey" },
      { qty: 1, unit: "tbsp", item: "hot sauce" },
      { qty: 1, unit: "tbsp", item: "butter" },
      { qty: 2, unit: "tbsp", item: "mayonnaise" },
      { qty: 4, unit: "slices", item: "dill pickles" },
      { qty: 2, unit: "leaves", item: "iceberg lettuce" },
      { qty: null, unit: "", item: "Oil for frying" },
      { qty: null, unit: "", item: "Salt and black pepper" }
    ],
    steps: [
      "Marinate the chicken in buttermilk with a pinch of salt for 15 minutes. Mix the flour, smoked paprika and garlic powder in a bowl.",
      "Coat the chicken in the seasoned flour, pressing firmly. Heat 2 cm of oil to 180°C / 350°F and fry for 4–5 minutes per side, until golden and cooked through. Drain on kitchen paper.",
      "For the hot honey, melt the butter in a small pan, add the honey and hot sauce, and bubble for 30 seconds until glossy.",
      "Toast the buns cut-side down. Spread mayonnaise on the bases, add lettuce, the fried chicken, pickles, and spoon over the hot honey.",
      "Cap with the top bun and serve immediately, with extra hot honey on the side."
    ]
  },
  {
    id: "crispy-potato-nuggets",
    title: "Crispy Potato Nuggets",
    emoji: "🥔",
    category: "Snacks",
    gradient: "linear-gradient(135deg, #f3d9a4, #b98a4e)",
    tags: ["potato", "snack", "30-minutes", "crowd-pleaser"],
    time: 35,
    difficulty: "Easy",
    servings: 4,
    calories: 320,
    description: "Crispy golden potato nuggets — crunchy outside, fluffy inside. Dip in anything.",
    ingredients: [
      { qty: 700, unit: "g", item: "floury potatoes (Maris Piper or Russet)" },
      { qty: 2, unit: "tbsp", item: "cornstarch" },
      { qty: 2, unit: "tbsp", item: "plain flour" },
      { qty: 2, unit: "tbsp", item: "parmesan, finely grated" },
      { qty: 0.5, unit: "tsp", item: "garlic powder" },
      { qty: 0.5, unit: "tsp", item: "smoked paprika" },
      { qty: 1, unit: "tsp", item: "salt" },
      { qty: null, unit: "", item: "Oil for frying or baking" }
    ],
    steps: [
      "Peel and boil the potatoes in salted water for 12–15 minutes, until tender. Drain well and let them steam dry for 5 minutes.",
      "Mash until smooth, then mix in the cornstarch, flour, parmesan, garlic powder, paprika and salt. The mixture should hold its shape.",
      "Shape into small nuggets with damp hands. Chill for 15 minutes to firm up.",
      "To fry: heat oil to 180°C / 350°F and fry in batches for 3–4 minutes, until golden. To bake: toss in a little oil and bake at 220°C / 425°F for 20–25 minutes, turning once.",
      "Serve hot with ketchup, garlic mayo or your favourite dip."
    ]
  },
  {
    id: "oreo-brownie-stuffed-cookie-pie",
    title: "Oreo Brownie Stuffed Cookie Pie",
    emoji: "🍪",
    category: "Dessert",
    gradient: "linear-gradient(135deg, #d9a878, #3a2a1f)",
    tags: ["dessert", "chocolate", "baking", "crowd-pleaser"],
    time: 60,
    difficulty: "Medium",
    servings: 10,
    calories: 520,
    description: "A giant cookie pie stuffed with brownie and Oreos. Slice thick, serve warm.",
    ingredients: [
      { qty: 170, unit: "g", item: "butter, softened" },
      { qty: 150, unit: "g", item: "light brown sugar" },
      { qty: 50, unit: "g", item: "caster sugar" },
      { qty: 2, unit: "", item: "eggs" },
      { qty: 1, unit: "tsp", item: "vanilla extract" },
      { qty: 260, unit: "g", item: "plain flour" },
      { qty: 0.5, unit: "tsp", item: "baking soda" },
      { qty: 0.5, unit: "tsp", item: "salt" },
      { qty: 150, unit: "g", item: "chocolate chips" },
      { qty: 12, unit: "", item: "Oreo cookies" },
      { qty: 200, unit: "g", item: "brownie batter (ready-made or homemade)" }
    ],
    steps: [
      "Heat the oven to 175°C / 350°F. Grease and line a 23 cm loose-bottomed tin.",
      "Beat the butter and both sugars until pale and fluffy. Beat in the eggs and vanilla, then fold in the flour, baking soda and salt. Stir through the chocolate chips.",
      "Press two-thirds of the cookie dough into the base and up the sides of the tin.",
      "Spread the brownie batter over the base, then press the Oreos into it in a single layer.",
      "Crumble the remaining cookie dough over the top, covering as much as you can. Bake for 30–35 minutes, until golden and set at the edges but soft in the middle.",
      "Cool in the tin for 20 minutes, then lift out. Serve warm with vanilla ice cream."
    ]
  },
  {
    id: "pork-adobo",
    title: "Pork Adobo",
    emoji: "🇵🇭",
    category: "Dinner",
    gradient: "linear-gradient(135deg, #8a6a4a, #3a2a1f)",
    tags: ["pork", "filipino", "braised", "comfort"],
    time: 140,
    difficulty: "Medium",
    servings: 6,
    calories: 680,
    description: "Filipino adobo — pork braised in soy, vinegar and garlic until meltingly tender. Serve over rice.",
    ingredients: [
      { qty: 1200, unit: "g", item: "pork belly (or cut of choice), cut into chunks" },
      { qty: 15, unit: "cloves", item: "garlic, minced" },
      { qty: 1, unit: "", item: "onion, chopped" },
      { qty: 500, unit: "ml", item: "pork broth (or water)" },
      { qty: 190, unit: "ml", item: "soy sauce" },
      { qty: 100, unit: "ml", item: "cane vinegar (or white vinegar)" },
      { qty: 3, unit: "", item: "long green chilies" },
      { qty: 4, unit: "", item: "bay leaves" },
      { qty: 1, unit: "tbsp", item: "whole peppercorns" },
      { qty: 30, unit: "g", item: "palm sugar, chopped" },
      { qty: null, unit: "", item: "Oil, for frying" },
      { qty: null, unit: "", item: "Sliced leeks, crispy garlic bits and boiled eggs, to serve" },
      { qty: null, unit: "", item: "Steamed rice, to serve" }
    ],
    steps: [
      "Heat a little oil in a heavy pot over medium-high heat. Fry the pork in batches until lightly browned on all sides, then set aside.",
      "In the same pot, sauté the garlic until lightly golden and fragrant. Add the onion and cook until softened.",
      "Return the pork to the pot and pour in the broth. Add the soy sauce, vinegar, green chilies, bay leaves, peppercorns and palm sugar.",
      "Cover and simmer on medium heat for 5–10 minutes without stirring, to let the vinegar cook off.",
      "Reduce to low heat and braise for 1–2 hours, until the pork is tender and the sauce has reduced to a glossy, fat-rich glaze.",
      "If serving with eggs, nestle soft-boiled eggs into the sauce for the last 2–3 minutes.",
      "Serve over hot steamed rice, topped with crispy garlic, sliced leeks and a boiled egg."
    ]
  },
  {
    id: "shanghai",
    title: "Shanghai",
    emoji: "🇵🇭",
    category: "Snacks",
    gradient: "linear-gradient(135deg, #f2d6a2, #c99a4e)",
    tags: ["pork", "filipino", "fried", "crowd-pleaser"],
    time: 60,
    difficulty: "Medium",
    servings: 6,
    calories: 320,
    description: "Lumpiang Shanghai — crispy Filipino spring rolls filled with seasoned pork. Serve with sweet chili sauce.",
    ingredients: [
      { qty: 680, unit: "g", item: "ground pork" },
      { qty: 1, unit: "", item: "medium onion, finely chopped" },
      { qty: 1, unit: "", item: "carrot, finely grated" },
      { qty: 4, unit: "cloves", item: "garlic, minced" },
      { qty: 4, unit: "", item: "green onions, thinly sliced" },
      { qty: 1, unit: "tbsp", item: "sugar" },
      { qty: 2, unit: "tbsp", item: "soy sauce" },
      { qty: 2, unit: "tbsp", item: "oyster sauce" },
      { qty: 1, unit: "tbsp", item: "fish sauce" },
      { qty: 2, unit: "", item: "egg yolks" },
      { qty: 15, unit: "", item: "lumpia (spring roll) wrappers" },
      { qty: null, unit: "", item: "Salt and black pepper" },
      { qty: null, unit: "", item: "Oil, for frying" },
      { qty: null, unit: "", item: "Sweet chili sauce, to serve" }
    ],
    steps: [
      "In a large bowl, combine the ground pork, onion, carrot, garlic, green onions, sugar, soy sauce, oyster sauce, fish sauce, egg yolks, salt and pepper. Mix well until sticky.",
      "Lay a lumpia wrapper on a clean surface. Place about 2 tablespoons of filling near the bottom edge and shape into a log. Fold the bottom over the filling, fold in the sides, then roll up tightly. Seal the edge with a dab of water.",
      "Repeat with the remaining filling and wrappers.",
      "Heat 3 cm of oil to 175°C / 350°F. Fry the lumpia in batches for 3–4 minutes, turning, until deep golden and crisp. Drain on kitchen paper.",
      "Serve hot with sweet chili sauce for dipping."
    ]
  }
];

/* ---------- State ---------- */
const STORAGE_KEY = "sprinkle-bites:favs";

const state = {
  query: "",
  category: "All",
  sort: "recommended",
  favsOnly: false
};

let favs = new Set();
try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (Array.isArray(stored)) favs = new Set(stored.filter((id) => typeof id === "string"));
} catch (err) {
  favs = new Set();
}

/* ---------- Elements ---------- */
const grid = document.getElementById("grid");
const chips = document.getElementById("chips");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const empty = document.getElementById("empty");
const collectionTitle = document.getElementById("collectionTitle");
const savedCount = document.getElementById("savedCount");
const savedBtn = document.getElementById("savedBtn");
const navAll = document.getElementById("navAll");
const brand = document.getElementById("brand");
const modal = document.getElementById("modal");
const panel = document.getElementById("panel");

/* ---------- Helpers ---------- */
const ICONS = {
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c3.2 3.6 5.5 6.3 5.5 9.4a5.5 5.5 0 0 1-11 0C6.5 9.3 8.8 6.6 12 3Z"/><path d="M12 19a2.6 2.6 0 0 0 2.6-2.6c0-1.4-.9-2.5-2.6-4.2-1.7 1.7-2.6 2.8-2.6 4.2A2.6 2.6 0 0 0 12 19Z"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.6 19a5.4 5.4 0 0 1 10.8 0"/><path d="M16 5.6a3 3 0 0 1 0 5.6"/><path d="M17.6 14.6A5 5 0 0 1 20.4 19"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.4S4.5 15.7 4.5 10.4A4.5 4.5 0 0 1 12 7.5a4.5 4.5 0 0 1 7.5 2.9c0 5.3-7.5 10-7.5 10Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V4h10v5"/><path d="M7 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v6H7z"/></svg>'
};

const FRACTIONS = [
  [0.125, "⅛"], [0.25, "¼"], [0.333, "⅓"], [0.375, "⅜"], [0.5, "½"],
  [0.625, "⅝"], [0.667, "⅔"], [0.75, "¾"], [0.875, "⅞"]
];

const WEIGHT_UNITS = new Set(["g", "kg", "ml", "l"]);

function formatQty(value) {
  if (value == null || value <= 0.02) return "";
  const whole = Math.floor(value + 1e-6);
  const frac = value - whole;

  if (frac < 0.04) return String(whole || 1);
  if (1 - frac < 0.04) return String(whole + 1);

  let best = null;
  let bestDiff = 0.05;
  for (const [v, symbol] of FRACTIONS) {
    const diff = Math.abs(frac - v);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = symbol;
    }
  }

  if (!best) return String(Math.round(value * 10) / 10);
  return whole ? `${whole}${best}` : best;
}

function formatAmount(qty, unit) {
  if (qty == null) return "";
  if (WEIGHT_UNITS.has(unit)) {
    const rounded = qty >= 100 ? Math.round(qty / 10) * 10 : Math.round(qty / 5) * 5;
    return `${rounded} ${unit}`;
  }
  const q = formatQty(qty);
  if (!q) return "";
  return unit ? `${q} ${unit}` : q;
}

function saveFavs() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
  } catch (err) {
    /* storage unavailable — keep working in memory */
  }
}

function categories() {
  return ["All", ...new Set(RECIPES.map((r) => r.category))];
}

function matchesQuery(recipe, query) {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  if (!q) return true;
  return (
    recipe.title.toLowerCase().includes(q) ||
    recipe.category.toLowerCase().includes(q) ||
    recipe.description.toLowerCase().includes(q) ||
    recipe.tags.some((tag) => tag.includes(q)) ||
    recipe.ingredients.some((ing) => ing.item.toLowerCase().includes(q))
  );
}

function visibleRecipes() {
  const list = RECIPES.filter((recipe) => {
    if (state.favsOnly && !favs.has(recipe.id)) return false;
    if (state.category !== "All" && recipe.category !== state.category) return false;
    return matchesQuery(recipe, state.query);
  });

  if (state.sort === "time") list.sort((a, b) => a.time - b.time);
  if (state.sort === "calories") list.sort((a, b) => a.calories - b.calories);
  if (state.sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));

  return list;
}

/* ---------- Render: filters ---------- */
function renderChips() {
  chips.innerHTML = categories()
    .map(
      (category) =>
        `<button class="chip" type="button" data-category="${category}" aria-pressed="${category === state.category}">${category}</button>`
    )
    .join("");
}

/* ---------- Render: cards ---------- */
function cardHTML(recipe, index) {
  const saved = favs.has(recipe.id);
  return `
    <article class="card" data-id="${recipe.id}" style="animation-delay:${Math.min(index * 30, 240)}ms">
      <div class="thumb" style="background:${recipe.gradient}">
        <img class="thumb-img" src="images/${recipe.id}.jpg?v=7" alt="" width="1200" height="800"
          loading="lazy" decoding="async" onerror="this.remove()">
        <span class="badge">${recipe.category}</span>
        <button class="heart" type="button" data-fav="${recipe.id}"
          aria-pressed="${saved}" aria-label="${saved ? "Remove" : "Save"} ${recipe.title} ${saved ? "from" : "to"} saved recipes">
          ${ICONS.heart}
        </button>
      </div>
      <div class="card-body">
        <h3><button class="card-open" type="button" data-open="${recipe.id}">${recipe.title}</button></h3>
        <p>${recipe.description}</p>
        <div class="meta">
          <span>${ICONS.clock}${recipe.time} min</span>
          <span>${ICONS.flame}${recipe.calories} kcal</span>
          <span>${ICONS.users}Serves ${recipe.servings}</span>
        </div>
      </div>
    </article>`;
}

function renderGrid() {
  const list = visibleRecipes();

  grid.innerHTML = list.map(cardHTML).join("");
  empty.hidden = list.length > 0;

  collectionTitle.textContent = state.favsOnly ? "Saved recipes" : "All recipes";
}

function renderNav() {
  savedCount.textContent = String(favs.size);
  savedBtn.classList.toggle("is-active", state.favsOnly);
  savedBtn.setAttribute("aria-pressed", String(state.favsOnly));
}

function render() {
  renderChips();
  renderGrid();
  renderNav();
  if (currentRecipe) updateModalFav();
}

/* ---------- Modal ---------- */
let currentRecipe = null;
let currentServings = 1;
let lastFocused = null;

function ingredientHTML(ing, factor) {
  const amount = formatAmount(ing.qty == null ? null : ing.qty * factor, ing.unit);
  return `<label>
    <input type="checkbox">
    <span>${amount ? `<b>${amount}</b> ` : ""}${ing.item}</span>
  </label>`;
}

function ingredientsHTML(recipe, servings) {
  const factor = servings / recipe.servings;
  return recipe.ingredients.map((ing) => ingredientHTML(ing, factor)).join("");
}

function statChip(icon, label, value) {
  return `<span class="chip-stat">${icon}${label} <b>${value}</b></span>`;
}

function openRecipe(id) {
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) return;

  currentRecipe = recipe;
  currentServings = recipe.servings;
  lastFocused = document.activeElement;

  panel.innerHTML = `
    <div class="modal-banner" style="background:${recipe.gradient}">
      <img class="modal-img" src="images/${recipe.id}.jpg?v=7" alt="${recipe.title}"
        width="1200" height="800" onerror="this.remove()">
      <span class="badge">${recipe.category}</span>
      <button class="close-btn" type="button" data-close aria-label="Close recipe">${ICONS.close}</button>
    </div>
    <div class="modal-body">
      <div class="modal-intro">
        <h2 id="modalTitle">${recipe.title}</h2>
        <p>${recipe.description}</p>
        <div class="meta-chips">
          ${statChip(ICONS.clock, "Time", `${recipe.time} min`)}
          ${statChip(ICONS.flame, "Per serving", `${recipe.calories} kcal`)}
          ${statChip(ICONS.users, "Difficulty", recipe.difficulty)}
        </div>
      </div>

      <div class="modal-grid">
        <aside class="ingredients" aria-label="Ingredients">
          <div class="ing-head">
            <h3>Ingredients</h3>
            <div class="stepper" role="group" aria-label="Adjust servings">
              <button type="button" id="servMinus" aria-label="Decrease servings">−</button>
              <output id="servOut" aria-live="polite">${currentServings}</output>
              <button type="button" id="servPlus" aria-label="Increase servings">+</button>
            </div>
          </div>
          <p class="serves-note">Servings</p>
          <div class="ing-list" id="ingList">${ingredientsHTML(recipe, currentServings)}</div>
        </aside>

        <div class="method">
          <h3>Method</h3>
          <ol class="steps">
            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary" type="button" id="modalFav"></button>
        <button class="btn btn-ghost" type="button" id="modalPrint">${ICONS.print} Print</button>
        <button class="btn btn-ghost" type="button" data-close>Close</button>
      </div>
    </div>`;

  updateModalFav();
  syncStepper();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  panel.scrollTop = 0;

  panel.querySelector(".close-btn").focus({ preventScroll: true });

  panel.querySelector("#servMinus").addEventListener("click", () => changeServings(-1));
  panel.querySelector("#servPlus").addEventListener("click", () => changeServings(1));
  panel.querySelector("#modalFav").addEventListener("click", () => toggleFav(recipe.id));
  panel.querySelector("#modalPrint").addEventListener("click", () => window.print());
  panel.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeRecipe));
}

function changeServings(delta) {
  if (!currentRecipe) return;
  const next = Math.min(24, Math.max(1, currentServings + delta));
  if (next === currentServings) return;
  currentServings = next;

  document.getElementById("servOut").textContent = String(currentServings);
  document.getElementById("ingList").innerHTML = ingredientsHTML(currentRecipe, currentServings);
  syncStepper();
}

function syncStepper() {
  const minus = document.getElementById("servMinus");
  const plus = document.getElementById("servPlus");
  if (minus) minus.disabled = currentServings <= 1;
  if (plus) plus.disabled = currentServings >= 24;
}

function updateModalFav() {
  const btn = document.getElementById("modalFav");
  if (!btn || !currentRecipe) return;
  const saved = favs.has(currentRecipe.id);
  btn.setAttribute("aria-pressed", String(saved));
  btn.innerHTML = `${ICONS.heart} ${saved ? "Saved" : "Save recipe"}`;
}

function closeRecipe() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  panel.innerHTML = "";
  currentRecipe = null;
  if (lastFocused && typeof lastFocused.focus === "function") {
    lastFocused.focus({ preventScroll: true });
  }
}

/* ---------- Favourites ---------- */
function toggleFav(id) {
  if (favs.has(id)) favs.delete(id);
  else favs.add(id);
  saveFavs();
  render();
}

/* ---------- Events ---------- */
chips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  render();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderGrid();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderGrid();
});

document.querySelectorAll("[data-suggest]").forEach((button) => {
  button.addEventListener("click", () => {
    state.query = button.dataset.suggest;
    searchInput.value = state.query;
    renderGrid();
    document.getElementById("recipes").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

grid.addEventListener("click", (event) => {
  const heart = event.target.closest("[data-fav]");
  if (heart) {
    event.stopPropagation();
    toggleFav(heart.dataset.fav);
    return;
  }
  const card = event.target.closest(".card");
  if (card) openRecipe(card.dataset.id);
});

savedBtn.addEventListener("click", () => {
  state.favsOnly = !state.favsOnly;
  if (state.favsOnly) {
    state.category = "All";
    state.query = "";
    searchInput.value = "";
  }
  render();
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth", block: "start" });
});

navAll.addEventListener("click", () => {
  state.favsOnly = false;
  state.category = "All";
  state.query = "";
  searchInput.value = "";
  render();
});

brand.addEventListener("click", () => {
  state.favsOnly = false;
  state.category = "All";
  state.query = "";
  searchInput.value = "";
  render();
});

document.getElementById("clearFilters").addEventListener("click", () => {
  state.favsOnly = false;
  state.category = "All";
  state.query = "";
  searchInput.value = "";
  render();
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close]")) closeRecipe();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeRecipe();
    return;
  }
  if (event.key === "/" && !modal.classList.contains("open")) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    event.preventDefault();
    searchInput.focus();
  }
});

/* Keep keyboard focus inside the open dialog */
panel.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusable = panel.querySelectorAll(
    'button:not(:disabled), input, select, a[href], [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* ---------- Init ---------- */
render();
