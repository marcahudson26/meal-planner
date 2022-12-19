const meals = [
  {
    "name": "hotdogs",
    "image": "./hotdog.jpg",
    "ingredients": [
      {
        "name": "hot dog sausages",
        "amount": 2,
        "unit": "jar"
      },
      {
        "name": "bread rolls",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "tomato sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "mustard",
        "amount": 1,
        "unit": "bottle"
      }
    ]
  },
  {
    "name": "lasagne",
    "image": "./Lasagna.jpg",
    "ingredients": [
      {
        "name": "mince",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "red lasagne sauce",
        "amount": 1,
        "unit": "jar"
      },
      {
        "name": "tomato passata",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "italian herbs",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "garlic",
        "amount": 5,
        "unit": "clove"
      },
      {
        "name": "beef stock cube",
        "amount": 1,
        "unit": "cube"
      },
      {
        "name": "lasagne sheets",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "white sauce",
        "amount": 1,
        "unit": "jar"
      },
      {
        "name": "garlic baguette",
        "amount": 2,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "smoked fish",
    "image": "",
    "ingredients": [
      {
        "name": "smoked fish",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name": "new potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "paprika",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "garlic granules",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "frozen sweetcorn",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "marmite potatos",
    "image": "",
    "ingredients": [
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "marmite",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "chicken kievs",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "frozen sweetcorn",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "burgers",
    "image": "",
    "ingredients": [
      {
        "name": "burgers",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "burger buns",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "burger sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "gherkins",
        "amount": 1,
        "unit": "jar"
      },
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "red cabbage",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "white cabbage",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "red onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "mayo",
        "amount": 1,
        "unit": "bottle"
      }
    ]
  },
  {
    "name": "stew and dumplings",
    "image": "./stewdumplings.jpg",
    "ingredients": [
      {
        "name": "diced beef",
        "amount": 0.5,
        "unit": "kg"
      },
      {
        "name": "mince",
        "amount": 0.5,
        "unit": "kg"
      },
      {
        "name": "beef stock cube",
        "amount": 1,
        "unit": "cube"
      },
      {
        "name": "gravy granuels",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "stew vegetable pack",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "garlic",
        "amount": 5,
        "unit": "clove"
      },
      {
        "name": "dumpling mix",
        "amount": 2,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "pie and mash",
    "image": "./piemash.jpg",
    "ingredients": [
      {
        "name": "pies",
        "amount": 6,
        "unit": "unit"
      },
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "butter",
        "amount": 2,
        "unit": "tbs"
      },
      {
        "name": "gravy granuels",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "yorkshire puddings",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "frozen mushy peas",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "chicken roast",
    "image": "",
    "ingredients": [
      {
        "name": "large whole chicken",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "stuffing",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "gravy granuels",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "butternut squash",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "garlic",
        "amount": 5,
        "unit": "clove"
      },
      {
        "name": "broccoli",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "carrots",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "leeks",
        "amount": 2,
        "unit": "unit"
      },
      {
        "name": "garlic and herb soft cheese",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "double cream",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "honey",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name":  "potatoes",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "gammon & eggs",
    "image": "./gammonegg.jpg",
    "ingredients": [
      {
        "name": "gammon joint",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "eggs",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "spaghetti bolognese",
    "image": "./spaghetti-bolognese.jpg",
    "ingredients": [
      {
        "name": "mince",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "garlic",
        "amount": 5,
        "unit": "clove"
      },
      {
        "name": "cheese",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "bolognese sauce",
        "amount": 1,
        "unit": "jar"
      },
      {
        "name": "tomato passata",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "italian herbs",
        "amount": 2,
        "unit": "tbs"
      },
      {
        "name": "spaghetti pasta",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "sausage and mash",
    "image": "",
    "ingredients": [
      {
        "name":  "chipolata",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name":  "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "butter",
        "amount": 2,
        "unit": "tbs"
      },
      {
        "name": "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "gravy granuels",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "red onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "red wine stock pot",
        "amount": 2,
        "unit": "unit"
      },
      {
        "name": "green veg",
        "amount": 1,
        "unit": "unit"
      }
    ]
  },
  {
    "name": "sausages pasta",
    "image": "",
    "ingredients": [
      {
        "name": "sausages",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name": "pasta",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "pasta sauce",
        "amount": 1,
        "unit": "jar"
      },
      {
        "name": "chopped tomatoes",
        "amount": 1,
        "unit": "tin"
      },
      {
        "name": "italian herbs",
        "amount": 12,
        "unit": "tbs"
      }
    ]
  },
  {
    "name": "bbq honey sausage",
    "image": "",
    "ingredients": [
      {
        "name": "bbq sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "honey and pork sausages",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name": "new potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "garlic granules",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "frozen sweetcorn",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "tuna pasta bake",
    "image": "./tuna-pasta.jpg",
    "ingredients": [
      {
        "name": "tuna",
        "amount": 4,
        "unit": "tin"
      },
      {
        "name": "pasta bake packet",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name": "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "pasta",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "cheese",
        "amount": 1,
        "unit": "unit"
      }  
    ]
  },
  {
    "name": "macarone cheese",
    "image": "",
    "ingredients": [
      {
        "name": "bacon",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "macarone",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "cheese",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "butter",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "wholegrain mustard",
        "amount": 1,
        "unit": "tbs"
      }
    ]
  },
  {
    "name": "jacket patatoes",
    "image": "",
    "ingredients": [
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "tuna",
        "amount": 4,
        "unit": "tin"
      },
      {
        "name": "mayo",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "beans",
        "amount": 1,
        "unit": "tin"
      },
      {
        "name": "chilli con-carne",
        "amount": 1,
        "unit": "tin"
      },
      {
        "name": "prawns",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "seafood sauce",
        "amount": 1,
        "unit": "bottle"
      }
    ]
  },
  {
    "name": "fajitas",
    "image": "",
    "ingredients": [
      {
        "name": "chicken",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "red pepper",
        "amount": 2,
        "unit": "unit"
      },
      {
        "name": "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "fajita packet kit",
        "amount": 2,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "chinese chicken",
    "image": "",
    "ingredients": [
      {
        "name": "chicken",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "eggs",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "cornflour",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "soy sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "garlic granules",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "sugar",
        "amount": 2,
        "unit": "tbs"
      },
      {
        "name": "light soy sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "dark soy sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "lemon juice",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "honey",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "rice",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "spicy chicken",
    "image": "",
    "ingredients": [
      {
        "name": "rice",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "eggs",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "chicken",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "baking powder",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "garlic granules",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "butter",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "franks buffalo sauce",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "honey",
        "amount": 2,
        "unit": "tbs"
      }
    ]
  },
  {
    "name": "salt and pepper chicken",
    "image": "./Salt-and-Pepper-Chicken.jpg",
    "ingredients": [
      {
        "name": "chicken",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name": "iceburg lettuce",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "mayo",
        "amount": 1,
        "unit": "bottle"
      },
      {
        "name": "flatbreads",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "wraps",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "french fries",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "salt and pepper chinese herbs",
        "amount": 1,
        "unit": "unit"
      }
    ]
  },
  {
    "name": "potatoe and leek soup",
    "image": "./Potato-Leek-Soup.jpg",
    "ingredients": [
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "leeks",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name": "vegetable stock cube ",
        "amount": 2,
        "unit": "cube"
      },
      {
        "name": "garlic granules",
        "amount": 1,
        "unit": "tbs"
      },
      {
        "name": "par-bake rolls",
        "amount": 1,
        "unit": "pack"
      }
    ]
  },
  {
    "name": "chicken casserole",
    "image": "",
    "ingredients": [
      {
        "name": "chicken casserole pack",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name":  "chicken",
        "amount": 1,
        "unit": "kg"
      },
      {
        "name":  "carrots",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name":  "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name":  "peas",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name":  "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name":  "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name":  "butter",
        "amount": 1,
        "unit": "tbs"
      }
    ]
  },
  {
    "name": "sausage casserole",
    "image": "./sausagecasserole.jpg",
    "ingredients": [
      {
        "name":  "sausages",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name":  "sausage casserole mix",
        "amount": 2,
        "unit": "pack"
      },
      {
        "name":  "onion",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name":  "red pepper",
        "amount": 1,
        "unit": "unit"
      },
      {
        "name":  "mushrooms",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name":  "beans",
        "amount": 1,
        "unit": "tin"
      },
      {
        "name": "potatoes",
        "amount": 1,
        "unit": "pack"
      },
      {
        "name": "milk",
        "amount": 1,
        "unit": "carton"
      },
      {
        "name": "butter",
        "amount": 1,
        "unit": "tbs"
      }
    ]
  }
]

