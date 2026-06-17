export interface LocationData {
  slug: "niles" | "schiller-park" | "lake-zurich";
  name: string;
  path: string;
  fullName: string;
  address: string;
  cityState: string;
  phone: string;
  tel: string;
  orderUrl: string;
  description: string;
  hours: {
    days: string;
    time: string;
  }[];
  googleMapEmbed?: string;
}

export type MenuItem = [string, string, string?]; // [Name, Price, Description?]

export interface MenuSection {
  title: string;
  intro?: string;
  items?: MenuItem[];
  groups?: {
    label: string;
    items: MenuItem[];
  }[];
  flavors?: string[];
  rows?: [string, string[], string?][]; // For Pizza [PizzaType, Array of prices for sizes, Optional description]
  specials?: MenuItem[];
  ingredients?: string[];
}

export interface TrayItem {
  name: string;
  options: [string, string][]; // e.g. [["Half (40 pcs)", "70"], ["Full (100 pcs)", "175"]]
}

export interface CateringPackage {
  num: string;
  title: string;
  pricePerPerson: number;
}

export interface CateringGroup {
  category: string;
  packages: CateringPackage[];
}

export interface CateringData {
  body: string;
  trayNote: string;
  trayItems: TrayItem[];
  groups: CateringGroup[];
  rules: string[];
}

export const CHASERS_DATA = {
  brand: {
    name: "Chasers Sports Bar & Grill",
    shortName: "Chasers",
    tagline: "Eat. Drink. Watch. Play."
  },
  locations: [
    {
      slug: "niles",
      name: "Niles",
      path: "/locations/niles",
      fullName: "Chasers Sports Bar & Grill - Niles",
      address: "9003 N Milwaukee Ave",
      cityState: "Niles, IL 60714",
      phone: "(847) 470-8800",
      tel: "+18474708800",
      orderUrl: "https://chaserssportsbar.com/order/chasers-sports-bar-and-grill-9003-n-milwaukee-ave",
      description: "A neighborhood sports bar in Niles with wall-to-wall screens, premium drafts, classic foods, and live interactive video gaming close to Milwaukee Avenue.",
      hours: [
        { days: "Mon - Thu", time: "11:00 AM - 1:00 AM" },
        { days: "Fri - Sat", time: "11:00 AM - 2:00 AM" },
        { days: "Sunday", time: "11:00 AM - Midnight" }
      ],
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.339474744747!2d-87.82025112341517!3d42.057351671221764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc8654c6de7db%3A0x6b09315d1bf2bdf!2s9003%20N%20Milwaukee%20Ave%2C%20Niles%2C%20IL%2060714!5e0!3m2!1sen!2sus!4v1718556200000!5m2!1sen!2sus"
    },
    {
      slug: "schiller-park",
      name: "Schiller Park",
      path: "/locations/schiller-park",
      fullName: "Chasers Sports Bar & Grill - Schiller Park",
      address: "4255 Old River Road",
      cityState: "Schiller Park, IL 60176",
      phone: "(847) 678-0862",
      tel: "+18476780862",
      orderUrl: "https://chaserssportsbar.com/order/chasers-sports-bar-grill-4255-old-river-road",
      description: "The ultimate Schiller Park destination for ultimate game days, ice-cold pitcher beers, handcrafted burgers, custom pizzas, and a high-energy local crowd.",
      hours: [
        { days: "Mon - Thu", time: "11:00 AM - 1:00 AM" },
        { days: "Fri - Sat", time: "11:00 AM - 2:00 AM" },
        { days: "Sunday", time: "11:00 AM - Midnight" }
      ],
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.8016466952723!2d-87.86317282341829!3d41.953046771234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb48b9487c65b%3A0xe6bfbdf8a1dfdec3!2s4255%20Old%20River%20Rd%2C%20Schiller%20Park%2C%20IL%2060176!5e0!3m2!1sen!2sus!4v1718556220000!5m2!1sen!2sus"
    },
    {
      slug: "lake-zurich",
      name: "Lake Zurich",
      path: "/locations/lake-zurich",
      fullName: "Chasers Sports Bar & Grill - Lake Zurich",
      address: "830 S Rand Road",
      cityState: "Lake Zurich, IL 60047",
      phone: "(224) 662-4739",
      tel: "+12246624739",
      orderUrl: "https://chaserssportsbar.com/order/chasers-bar-and-grill-830-south-rand-road",
      description: "A premier Lake Zurich sports bar situated right on Rand Road. Featuring a massive responsive layout, high-definition screens, interactive gaming terminals, and instant online table-side ordering.",
      hours: [
        { days: "Mon - Thu", time: "11:00 AM - Midnight" },
        { days: "Fri - Sat", time: "11:00 AM - 2:00 AM" },
        { days: "Sunday", time: "11:00 AM - 11:00 PM" }
      ],
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.1070742138765!2d-88.09345092340455!3d42.19349807128509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf64fbf4cdb3%3A0xd6854bfb4bbcb304!2s830%20S%20Rand%20Rd%2C%20Lake%20Zurich%2C%20IL%2060047!5e0!3m2!1sen!2sus!4v1718556240000!5m2!1sen!2sus"
    }
  ] as LocationData[],
  menuSections: [
    {
      title: "Starters",
      intro: "Fresh shareable boards, loaded fries, deep-fried favorites, and game-day plates built for high-scoring action.",
      items: [
        ["French Fries", "5"],
        ["Cheese Fries", "7.5"],
        ["Curly Fries", "7.5"],
        ["Sweet Potato Fries", "7.5"],
        ["Tater Tots", "7.5"],
        ["Loaded Tots-or-Fries", "10.5", "Crispy golden bed of tots or Idaho fries smothered in warm Cheddar cheese sauce, real sour cream, crumbled smokehouse bacon, and chopped scallions."],
        ["Greek Fries", "10.5", "Crispy sea-salted spuds loaded with premium crumbled imported feta cheese, Greek wild oregano, and freshly squeezed lemon juice."],
        ["Cheese Quesadillas", "10.5", "Griddled jumbo flour tortilla stuffed with melted cheeses, served with fresh salsa and sour cream. Add flame-grilled chicken or seasoned ground beef for $5."],
        ["Fiesta Nachos", "16", "Loaded warm tortilla chips, creamy Pepper Jack cheese sauce, cooked black beans, fresh sliced jalapenos, red bell peppers, and fine red onions. Add chicken or ground beef for $5."],
        ["Mac & Cheese Bites", "11", "Creamy three-cheese macaroni coated in crispy baked herb breading (8 pieces)."],
        ["Mozzarella Sticks", "11", "Hot, stretchy premium string cheese coated in Italian seasoned herbs and gold-panko breadcrumbs, served with marinara sauce."],
        ["Crispy Onion Rings", "11", "Jumbo sweet Spanish onions coated in a robust draft beer batter, fried to light, airy perfection."],
        ["Saganaki Balls", "13", "Hand-rolled melted Greek kefalograviera cheese balls, battered, fried, and finished with fresh lemon juice and oregano."],
        ["Chicken Tenders", "12", "All-natural breast tenderloins fried golden, served with your choice of dipping sauce. Make it Hot Buffalo style for $13."],
        ["Pretzel Sticks", "12", "Plump, soft-baked salted Bavarian pretzel sticks griddled warm, served with Chasers homemade warm cheddar cheese sauce."],
        ["Crispy Calamari", "15", "Tender wild-caught calamari lightly dusted and flash-fried. Tossed in sweet chili or sweet chili habanero for +$1."],
        ["Pizza Bread", "12", "Crisp toasted Italian roll under custom spiced tomato pizza sauce and melted mozzarella. Additional customized toppings $2 each."],
        ["Cheesy Garlic Bread", "12", "Warm crusty Italian bread soaked in minced garlic butter, toasted under a heavy coat of blistered mozzarella cheese."],
        ["MVP Appetizer Platter", "28", "The absolute ultimate: Classic boneless wings, golden mozzarella sticks, beer-battered onion rings, mac & cheese bites, and a mini mound of Fiesta nachos."]
      ]
    },
    {
      title: "Wings",
      intro: "Award-winning Chasers wings. Freshly prepped and fried-to-order. Please allow at least 20 minutes for optimal crispiness.",
      groups: [
        {
          label: "6 Wings",
          items: [
            ["Jumbo Bone-In", "13"],
            ["All-White Boneless", "12.5"],
            ["Drums Only", "13.5"]
          ]
        },
        {
          label: "9 Wings",
          items: [
            ["Jumbo Bone-In", "18"],
            ["All-White Boneless", "17.5"],
            ["Drums Only", "19.5"]
          ]
        },
        {
          label: "18 Wings",
          items: [
            ["Jumbo Bone-In", "32"],
            ["All-White Boneless", "28.5"],
            ["Drums Only", "36"]
          ]
        }
      ],
      flavors: [
        "Ay Carumba (House Signature Spicy)",
        "Sweet Chili Habanero",
        "Mango Habanero",
        "Mexican Hot",
        "Hot Garlic",
        "Classic Hot Buffalo",
        "Hot BBQ",
        "Classic Mild Buffalo",
        "Honey BBQ",
        "Garlic Parmesan",
        "Sweet Chili Twist",
        "Honey Mustard",
        "Sweet BBQ",
        "Lemon Pepper Dry Rub"
      ]
    },
    {
      title: "Homemade Pizza",
      intro: "Famous thin-crust pan pizza baked fresh from scratch with premium whole-milk mozzarella cheese and custom-spiced tomato sauce.",
      rows: [
        [
          "Cheese Pizza",
          ["12.50", "18.00", "22.50", "27.00"],
          "The classic foundations: whole-milk mozzarella cheese blend and tomato sauce."
        ],
        [
          "Greek Pizza",
          ["14.50", "23.00", "27.50", "32.00"],
          "Premium hand-carved gyros meat, fresh baby spinach, crumbled imported Feta cheese, and black olives."
        ],
        [
          "Chasers Special",
          ["14.50", "22.00", "26.50", "29.00"],
          "Championship team-up of gourmet Italian sausage, sliced pepperoni, dynamic mushrooms, and sweet white onions."
        ],
        [
          "Margherita Pizza",
          ["13.50", "20.00", "24.50", "30.00"],
          "Blistered fresh tomatoes, sweet basil leaves, garlic glaze, and thick melted fresh mozzarella."
        ],
        [
          "Meat Lovers Pizza",
          ["13.50", "21.00", "27.50", "32.00"],
          "Heavy protein lineup of savory Italian sausage, crispy pepperoni, seasoned ground beef, and smokehouse bacon."
        ],
        [
          "Vegetarian Special",
          ["14.50", "22.00", "26.50", "31.00"],
          "Fresh baby spinach, minced garlic, diced ripe tomatoes, sliced black olives, earthy mushrooms, crispy onions, and green bell peppers."
        ],
        [
          "Additional Ingredients",
          ["2.00", "3.00", "3.50", "4.00"],
          "Choose any customized ingredients from the list below."
        ],
        [
          "Extra Cheese",
          ["2.00", "3.00", "3.50", "4.00"]
        ],
        [
          "Extra Sauce",
          ["1.00", "1.50", "2.00", "2.50"]
        ]
      ] as [string, string[], string?][],
      specials: [
        ["Hot Honey Pizza", "26.00", "Our custom 14-inch thin crust topped with blended creamy mozzarella, house tomato sauce, fresh ricotta dollops, charred pepperoni, and drizzled with spicy-sweet Mike's Hot Honey."],
        ["Buffalo Pizza", "27.00", "Our custom 14-inch thin crust topped with signature tangy Buffalo mild sauce, whole-milk mozzarella, savory flame-grilled chicken breast, and crispy chopped smokehouse bacon."],
        ["14 in Low-Carb Pizza Option", "Depends on selection", "Enjoy any of our 14-inch pizza combinations baked crisp on a special ultra-thin tortilla crust."]
      ],
      ingredients: [
        "Sausage",
        "Pepperoni",
        "Ground Beef",
        "Gyros",
        "Bacon",
        "Grilled Chicken",
        "Italian Beef",
        "Black Olives",
        "White Onions",
        "Button Mushrooms",
        "Green Peppers",
        "Sliced Tomatoes",
        "Minced Garlic",
        "Green Olives",
        "Baby Spinach",
        "Feta Cheese",
        "Steam Broccoli",
        "Spicy Chicago Giardiniera",
        "Fresh Sliced Jalapenos"
      ]
    },
    {
      title: "Salads",
      intro: "Crisp, cold garden greens topped with homemade dressings. Perfectly balanced and delicious.",
      items: [
        ["Chopped Chicken Salad", "16", "Flame-grilled chicken, crispy chopped romaine and iceberg greens, chopped bacon, diced tomato, scallions, ditalini pasta, sweet peas, corn, blue cheese crumbles, and red cabbage tossed in Chasers signature house vinaigrette."],
        ["Caesar Salad", "13", "Crisp hand-cut romaine lettuce, garlic croutons, cherry tomatoes, and aged shaved Parmesan tossed in creamy Caesar. Add grilled chicken for $4."],
        ["Greek Salad", "15", "Crispy garden lettuce, sliced cucumbers, bell peppers, fresh tomatoes, imported Feta cheese, Kalamata olives, and Greek dressing. Add grilled chicken for $4."],
        ["Country Crispy Salad", "16", "Golden-fried chicken breast tenders, crisp mixed field greens, sharp cheddar cheese, sweet cherry tomato, chopped bacon, and smooth honey mustard dressing."]
      ]
    },
    {
      title: "Sandwiches & Wraps",
      intro: "Served with seasoned golden fries. Customize your side to crispy tater tots, seasoned curly fries, sweet potato fries, or colossal onion rings for +$2. Complimentary hot soup included with dine-in orders.",
      items: [
        ["Classic Chicken Sandwich", "16", "Juicy fire-grilled chicken breast glazed with bold barbecue sauce or creamy mayo, crisp leaf lettuce, and ripe tomato served on a warm bakery brioche bun."],
        ["Nashville Hot Chicken", "17", "All-natural chicken breast fried to custom golden crunchiness, loaded with real Vienna dill pickles, sweet Southern-style cabbage slaw, and creamy house honey mustard on a toasted brioche. Choose Hot Buffalo style or Honey-Sweet style."],
        ["Authentic Gyros Sandwich", "16", "Generous slices of original griddled spit-fire gyros meat, juicy ripe tomato, sharp sliced onion, and cool handmade cucumber tzatziki sauce cradled in a warm cloud-soft pita bread."],
        ["Triple-Decker BLT Club", "16", "Stack of crispy honey-cured smokehouse bacon, crisp iceberg lettuce, thick-cut ripe tomatoes, and light real mayonnaise layered on toasted country white bread."],
        ["Chicken Caesar Wrap", "16", "Juicy grilled chicken breast, shredded romaine lettuce, diced vine-ripened tomatoes, and shaved parmesan tossed in Caesar dressing, folded inside a jumbo flour tortilla."],
        ["Super Grilled Cheese", "12", "Melted American, Swiss, and Sharp Cheddar cheeses griddled to gooey perfection on buttery thick-sliced Texas toast. Add bacon or tomato for $2."],
        ["Buffalo Chicken Wrap", "17", "Deep-fried golden chicken breast strips, crisp iceberg lettuce, diced tomato, minced celery, spicy classic buffalo sauce, and creamy chunky blue cheese dressing in a warm flour tortilla."],
        ["Philly Steak Wrap", "17", "Hot shaved ribeye steak, caramelized sweet bell peppers and onions, and melted provolone cheese snuggly wrapped in a griddled spinach or white tortilla."],
        ["Ranchero chicken Wrap", "17", "Savory grilled chicken breast, leaf lettuce, diced tomatoes, chopped smokehouse bacon, melted cheddar cheese, and cool buttermilk ranch glaze inside a warm flour tortilla."]
      ]
    },
    {
      title: "Toasted Subs",
      intro: "Chasers' legendary hot toasted subs, crafted with pride since 1969. Served with classic golden fries. Try your toasted sub on loaded garlic cheese bread for +$1.",
      items: [
        ["Classic Philly Cheesesteak", "14.5", "Shaved tender ribeye steak grilled with authentic sweet white onions, griddled under melted Swiss and Provolone cheese. Add fresh sauteed mushrooms for $1."],
        ["Chicken Philly Sub", "13.5", "Hand-pulled seasoned chicken breast grilled with crisp sweet onions, smothered in warm melted cheese. Add fresh sautéed mushrooms for $1."],
        ["The Loaded Philly Supreme", "16.5", "Top-tier shaved ribeye served toasted on buttery garlic bread, topped with melted mozzarella cheese, grilled mushrooms, caramelized griddled onions, and spicy Chicago giardiniera."],
        ["Traditional Italian Combo Sub", "13.5", "Slices of premium smoked ham, bologna, hard salami, sweet bell green peppers, thick vine tomatoes, sweet shredded onions, and Italian oil-herb drizzle under blistered melted provolone."],
        ["Chicken Parmesan Sub", "13.5", "Hand-breaded golden chicken breast drenched in savory herb marinara, roasted green bell peppers, and bubbling toasted mozzarella cheese on a toasted Italian roll."]
      ]
    },
    {
      title: "Burgers",
      intro: "Half-pound (1/2 lb) 100% USDA Choice Angus Beef patties. Hand-pressed daily, fresh and never frozen. Served on a brioche bun with crispy golden fries. Substitute tater tots, curly fries, sweet potato fries, or giant onion rings for +$2. Complimentary soup with dine-in.",
      items: [
        ["Classic Angus Cheeseburger", "15.5", "Half-pound grilled Angus beef topped with choice of American, cheddar, Swiss, or pepper jack cheese, leaf lettuce, ripe tomato, and red onion. Add thick-cut crispy bacon for $2."],
        ["The Hangover Burger", "18", "The recovery special: Sharp Cheddar cheese, thick strips of smokehouse bacon, crisp golden hash brown, topped with a perfectly fried sunny-side-up organic egg."],
        ["The Famous Juicy Lucy", "18", "A custom burger patty stuffed to the brim with sharp cheddar, grilled till melted, topped with more cheddar, smoky sriracha-garlic aioli, crispy bacon, and sweet caramelized onions."],
        ["Chunky Blue Cheese Burger", "18", "Crumbled premium Danish blue cheese, heavy slab-cut wood-smoked bacon, leaf lettuce, and rich balsamic onion jam."],
        ["Traditional Patty Melt", "18", "Grounded Angus patty grilled with sweet charred caramelized onions, double Swiss cheese, served on toasted buttery marble rye bread."],
        ["Area 51 Spicy Burger", "18", "Spicy Pepper Jack cheese, fresh charred sliced jalapenos, fire-roasted green bell peppers, and creamy handmade avocado guacamole."],
        ["Swiss This! Mushroom Burger", "18", "A heavy blanket of melted real Swiss cheese over a heap of butter-sautéed white baby button mushrooms and roasted garlic spread."],
        ["Chasers Classic Sliders", "16", "Three mini hand-pressed Angus beef sliders topped with melted American cheese, pickles, and sweet griddled onions on warm toasted slider buns."],
        ["The Chasers Double Stack", "18", "Two quarter-pound (1/4 lb) signature patties, shredded iceberg lettuce, double American cheese, pickles, and dynamic sweet 1000 Island dressing on a double-toasted sesames bun."]
      ]
    },
    {
      title: "Pastas & Dinners",
      intro: "Hearty, comforting plates. Complimentary hot house soup or fresh side garden salad included with dine-in orders.",
      items: [
        ["Spaghetti or Penne Bolognese", "18", "Al dente imported pasta tossed in your choice of rich slow-simmered ground beef meat sauce or aromatic garlic-herb marinara. Make it Baked with bubbly mozzarella cheese for $20."],
        ["Cheese Ravioli", "18", "Jumbo ravioli pillows stuffed with creamy sweet ricotta, topped with Chasers herb marinara. Add fire-grilled chicken for $4."],
        ["House Three-Cheese Mac & Cheese", "16", "Elbow macaroni baked in rich, creamy house-blended Cheddar, Provolone, and American cheeses under sharp cracker-crumb crust. Add crumbled bacon for $4."],
        ["Grand Chicken Parmesan", "23", "Colossal hand-breaded chicken breast escalope fried gold, topped with rich tomato sauce, fresh melted mozzarella, served over a massive bed of steaming spaghetti."],
        ["Grilled Chicken Breast Plate", "19", "Light-minded and nutritious double flame-grilled chicken breast, served with double-steamed broccoli, fluffy seasoned long-grain rice, and toasted warm pita bread."],
        ["Jumbo Gulf Fried Shrimp Dinner", "25", "A heap of hand-battered jumbo Gulf shrimp fried to golden crunchiness, served with classic fries, crisp sweet coleslaw, and tangy house cocktail dipping sauce."],
        ["Traditional Greek Chicken Skewers", "19", "Two flame-kissed lemon-herb chicken skewers served alongside fluffy seasoned long-grain rice, steamed broccoli, and tzatziki sauce."],
        ["Monumental Gyros Plate", "18", "A massive open-face layout of Greek pita topped with a sky-high pile of spit-carved gyros meat, sliced vine tomatoes, raw sweet red onion, Greek olives, and lots of cucumber tzatziki. Served with fresh fries."],
        ["BBQ Baby Back Ribs", "Half: 20 / Full: 30", "Fall-off-the-bone tender rack of dry-rubbed pork ribs, caramelized in tangy smokehouse barbecue sauce. Served with golden fries and coleslaw."]
      ]
    },
    {
      title: "Soups",
      intro: "Delicious house recipes cooked fresh in our kitchen hourly.",
      items: [
        ["Creamy Chicken Rice", "6", "Chasers' legendary family recipe: Thick, rich chicken-infused broth, shredded breast meat, fine garden carrots, and tender long-grain white rice."],
        ["Soup of the Day", "6", "Ask your server or checker for today's custom chef-made seasonal soup selection."]
      ]
    },
    {
      title: "Desserts",
      intro: "Decadent sweet treats to complete a championship meal.",
      items: [
        ["New York Cheesecake", "8", "Rich, dense, super creamy cheesecake wedge on buttery graham sweet crust, finished with fresh sweet strawberry coulis and whipped cream."],
        ["Skillet Chocolate Chip Cookie", "9", "A buttery chocolate chip cookie baked hot in a mini cast-iron skillet, topped with cold scoops of vanilla bean ice cream, hot chocolate syrup, and sweet whipped cream."],
        ["Fresh Warm Greek Donuts (Loukoumades)", "9", "Ten (10) pieces of airy puff pastry dough fried fresh-to-order, drenched in pure warm honey syrup and dusted in sweet cinnamon."],
        ["Molten Lava Cake", "8", "Warm, moist chocolate sponge cake with a rich liquid-chocolate core that flows beautifully upon first bite, accompanied close by premium vanilla bean ice cream."]
      ]
    },
    {
      title: "Low-Carb Bowls",
      intro: "Healthy, keto-friendly fuel without sacrificing the legendary sports bar experience.",
      items: [
        ["Philly Keto Bowl", "Chicken 12 / Steak 14", "A healthy mountain of griddled chicken breast or shaved ribeye steak, caramelized bell peppers, griddled white onions, mushrooms, and melted double provolone cheese in a bowl."],
        ["Grilled Naked Chicken Plate", "16", "Two simple charbroiled chicken breasts seasoned in custom herb dry rub, served on a rich bed of steamed broccoli and custom side salad. No high-carb sides."],
        ["Jumbo Naked Buffalo Wings (No Bread)", "6: 12 / 9: 17.5 / 18: 29", "Original non-coated bone-in jumbo wings fried extra crispy. Tossed in any sugar-free light dry-rub or hot sauce of choice."]
      ]
    }
  ] as MenuSection[],
  catering: {
    body: "Bring Chasers to your next event! We offer customizable party-size favorites, crowd-pleasing warm trays, and professional beverage packages perfect for graduations, birthdays, business meetings, and game-day parties.",
    trayNote: "Perfect for larger self-hosted get-togethers: Half trays generously serve 10-12 people. Full trays serve 18-22 people.",
    trayItems: [
      {
        name: "Classic & Boneless Wings",
        options: [
          ["Half Tray (40 pcs)", "70"],
          ["Full Tray (100 pcs)", "175"]
        ]
      },
      {
        name: "Crispy Chicken Fingers",
        options: [
          ["Half Tray (40 pcs)", "65"],
          ["Full Tray (80 pcs)", "120"]
        ]
      },
      {
        name: "Golden Idaho French Fries",
        options: [
          ["Half Tray", "30"],
          ["Full Tray", "55"]
        ]
      },
      {
        name: "Crispy Seasoned Tater Tots",
        options: [
          ["Half Tray", "35"],
          ["Full Tray", "65"]
        ]
      },
      {
        name: "Spaghetti or Penne Bolognese/Marinara",
        options: [
          ["Half Tray", "35"],
          ["Full Tray", "65"]
        ]
      },
      {
        name: "Mini Angus Sliders (Bacon & Cheese)",
        options: [
          ["Single Slider (Minimum order of 15)", "2.95 ea"]
        ]
      }
    ],
    groups: [
      {
        category: "Basic Party Food Packages",
        packages: [
          { num: "1", title: "Pizza & Pop Special (Unlimited custom thin-crust thin pizza, ice-cold fountain sodas, and juices)", pricePerPerson: 17 },
          { num: "2", title: "Pizza, Dynamic Garden/Caesar Salad, and Fountain Pop Choice", pricePerPerson: 19 },
          { num: "3", title: "The Game-Day Feast (Thin pizza, draft wings, gourmet mini sliders, fresh salad, hot onion rings, and unlimited fountain soda)", pricePerPerson: 26 }
        ]
      },
      {
        category: "Beverage, Beer & Wine Packages",
        packages: [
          { num: "4", title: "Unlimited Thin Pizza + Ice-Cold Domestic Draft Beers, Selection of House Wines & Fountain Sodas", pricePerPerson: 37 },
          { num: "5", title: "Unlimited Pizza + Classic Appetizers + Domestic Draft Beers, House Wines & Fountain Beverages", pricePerPerson: 40 },
          { num: "6", title: "Italian-Greek Buffet: Hot Pizza, Lemon Herb Chicken, Penne Marinara, Greek Potatoes + Domestic Sized Bottle Beer, House Wine, and Sodas", pricePerPerson: 44 }
        ]
      },
      {
        category: "The Championship Deluxe Packages",
        packages: [
          { num: "7", title: "All-Star Package: Thin pizzas, appetizing platters, gourmet beef sliders, basket wings, fresh garden salad + Domestic Drafts, House Wine, and Well Spirits/Cocktails", pricePerPerson: 47 },
          { num: "8", title: "Hall of Fame Package: Pizzas, jumbo appetizers, sliders, wings, gourmet salad + Domestic Drafts & Imported Bottled Beers, House Wines, and Well Cocktails", pricePerPerson: 52 },
          { num: "9", title: "Super Bowl VIP Premium Package: Pizzas, grand appetizers, sliders, wings, salad + Premium Cocktails, Top-tier Imported Beers, Custom Craft Drafts & Premium Wines", pricePerPerson: 57 }
        ]
      }
    ],
    rules: [
      "Minimum of twenty-five (25) guests required for all package pricing.",
      "Standard packages run for two (2). Additional hours can be coordinated upon request.",
      "All alcohol packages strictly exclude straight shots and top-shelf cognac.",
      "Tax and a modest 18% gratuity are not included in the basic per-person rate."
    ]
  } as CateringData
};
