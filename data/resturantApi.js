import Pizzahut from "../src/assets/resturantChains/Pizzahut.jpeg";
import JantaSweet from "../src/assets/resturantChains/JantaSweet.jpeg";
import Parihaar from "../src/assets/resturantChains/Parihaar.jpeg";
import Kwality from "../src/assets/resturantChains/Kwality.jpeg";
// import Bowl from "../src/assets/resturantChains/Bowl.jpeg";
import Zeeshan from "../src/assets/resturantChains/zeeshan.jpg";
import Naturals from "../src/assets/resturantChains/Naturals.jpeg";
import Dosa from "../src/assets/resturantChains/Dosa.jpeg";
import Meals from "../src/assets/resturantChains/Meals.jpeg";
import Mc from "../src/assets/resturantChains/Mc.jpeg";
import Cake from "../src/assets/resturantChains/Cake.jpeg";
import StarBucks from "../src/assets/resturantChains/starbucks.jpeg";
import BurgerKing from "../src/assets/resturantChains/BurgerKing.jpeg";

export const restaurantApi = [
  {
    id: 1,
    image: Pizzahut,
    offer: "Items at ₹179",
    title: "Pizza Hut",
    source: "pizza-hut",
    name: "Pizzas",
    place: "Dwarka Nagar",
    rating: 4.2,
    distance: 2,
    minTime: 30,
    maxTime: 40,
    DeliveryFee: 39,
    recommendedMenu: [
      {
        id: 1,
        name: "Loaded Bread Stix",
        description:
          "Serves 1 | Freshly baked bread stix, topped with cheesy dressing & herbs (320 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "o0zibtrbtyjwznptrsgy",
        defaultPrice: 169,
        source:"pizza-hut",
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Exotica Veggie Garlic Bread - New",
        description:
          "Serves 1 | Hut's signature garlic bread topped with spiced exotic veggies and cheesy dressing (449 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "e4f730c3f48f82fce15895dacf3e9081",
        defaultPrice: 109,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Sprinkled Fries - New",
        description:
          "Serves 1 | Baked fries seasoned with our signature peruvian seasoning (204 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "frgza6cm1sjezw79pjtu",
        defaultPrice: 159,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Spicy Schezwan Pasta Chicken",
        description:
          "Serves 1 | Fusilli pasta baked in spicy schezwan sauce along with schezwan chicken meatballs, green capsicum, onion, red capsicum and red paprika (178 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "e4d3b61ab38a0e86db994a9c1db2d0a9",
        defaultPrice: 199,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Spicy Red Schezwan Pasta",
        description:
          "Serves 1 | A divine choco brownie for your all time chocolate cravings (273 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "c6aea671a74704ce9f39dba98d5846dd",
        defaultPrice: 109,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 6,
        name: "Brow-wow-nie",
        description:
          "Serves 1 | Fusilli pasta baked in spicy schezwan sauce, along with green capsicum, onion, red capsicum and paprika for an added zing (190 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "7ac7f4004c86ebb381fa1c0c3bd58722",
        defaultPrice: 179,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 7,
        name: "Tandoori Paneer - Personal",
        description:
          "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per-335Kcal/100g)",
        image: "s5ld93rsknx0fhj6xarn",
        defaultPrice: 319,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 8,
        name: "Masala Keema Garlic Bread",
        description:
          "Serves 1 | Hut's signature garlic bread topped with chicken keema masala, onion and green chilli & cheesy dressing. A must try! (442 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        image: "7ac7f4004c86ebb381fa1c0c3bd58722",
        defaultPrice: 189,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 9,
        name: "Chicken Sausage - Personal",
        description:
          "Serves 1 | Pizza topped with Chicken n Cheese Sausages & crunchy Onions, flavourful pan sauce and 100% mozzarella cheese. (PAN Per-310Kcal/100g)",
        image: "aylqpxx08pltowbzxhd3",
        defaultPrice: 259,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 10,
        name: "Country Feast - Personal",
        description:
          "Serves 1 | Loaded with Herbed Onion & Green capsicum, Sweet Corn & Tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse. (PAN Per-244Kcal/100g)",
        image: "c3832837392378cca98e484b89c313ba",
        defaultPrice: 319,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 11,
        name: "Corn & Cheese - Personal",
        description:
          "Serves 1 | A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce. (PAN Per-320Kcal/100g)",
        image: "ckbnw98n6tffy50wvuzm",
        defaultPrice: 189,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 12,
        name: "Veggie Feast - Personal",
        description:
          "Serves 1 | Herbed onion and Green Capsicum, juicy Sweet Corn & 100% mozzarella cheese with flavourful pan sauce. (PAN Per-269Kcal/100g)",
        image: "cbye9x7wxeopwqvenn7g",
        defaultPrice: 259,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 13,
        name: "Spiced Paneer - Personal",
        description:
          "Serves 1 | Spiced Paneer, crunchy Onion, juicy Tomato & 100% mozzarella cheese, with our classic pan sauce. (PAN Per-276Kcal/100g)",
        image: "a89yqx09ppwlecyqterp",
        defaultPrice: 259,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 14,
        name: "Classic BreadStix + Classic BreadStix",
        description:
          "Serves 1 | Freshly baked 2 Classic BreadStix ! The perfect pairing with your delicious pizza or on their own as a snack.",
        image: "bbb62b706156b341665fea94695fa19e",
        defaultPrice: 238,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 15,
        name: "Classic Breadstix + Pepsi Pet",
        description:
          "Serves 1 | Enjoy Classic Breadstix & Pepsi. Freshly baked Classic BreadStix + gooey sauce = an unbeatable combo!",
        image: "911cf4771b2fe4361b8bf59b748db610",
        defaultPrice: 229,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 2,
    image: JantaSweet,
    offer: "₹50 OFF ABOVE ₹199",
    title: "Sweet India",
    source: "sweet-india",
    rating: 4.5,
    distance: 2.5,
    minTime: 35,
    maxTime: 40,
    name: "Sweets,South Indian",
    place: "Jagadamba",
    DeliveryFee: 50,
    recommendedMenu: [
      {
        id: 1,
        name: "Dry Fruit Laddu",
        description:
          "",
        image: "ff17453ea28e7bda43d3f251e6e17506",
        defaultPrice: 236,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Special Kaju Mixed Sweets",
        description:
          "",
        image: "lakblwc6q1kajwmkpd6d",
        defaultPrice: 442,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Ghee Mixed Sweets",
        description:
          "",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/5/4/637f6b4b-d449-4450-842c-2c59bde183a1_cc430145-d6fb-43d0-b348-7fac469bae0e.JPG_compressed",
        defaultPrice: 212,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Ghee Motichoor Laddu",
        description:
          "",
        image: "b1831556cf450e5399eb792d1f55dd5f",
        defaultPrice: 190,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Kala Jamun",
        description:
          "",
        image: "90964950e1b966cd011c8d66c4541517",
        defaultPrice: 165,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 3,
    image: Parihaar,
    offer: "₹85 OFF ABOVE ₹149",
    title: "Royal Rajasthan Palace",
    source: "royal-rajasthan-palace",
    rating: 3.4,
    distance: 2.5,
    minTime: 35,
    maxTime: 40,
    name: "North India, Thalis",
    place: "Dwarkanagar",
    DeliveryFee: 30,
    recommendedMenu: [
      {
        id: 1,
        name: "Ghee roti",
        description:
          "Buttery, flaky and aromatic, this traditional Indian bread is cooked in ghee to create a heavenly indulgence perfect for any meal.",
        image: "2bd6e9dcfaf2a137f3e0f7c6ccf0c069",
        defaultPrice: 15,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Aloo parota",
        description:
          "A comforting and flavorful stuffed parota that satisfies any craving with its irresistible blend of flavors and textures.",
        image: "f2c9b95029122b3a4ceb822ee7fa1d51",
        defaultPrice: 60,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Fried rice",
        description:
          "A flavorful and aromatic rice dish prepared in South Indian style, offering a delightful blend of textures and flavors.",
        image: "14adf135fe2da9923378f5fc1f369096",
        defaultPrice: 160,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Veg biryani",
        description:
          "A flavorful and aromatic rice dish that brings together a harmonious blend of vegetables, herbs, and spices from South India.",
        image: "deeeafb33e850d859a5b739380a2c811",
        defaultPrice: 250,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Plain rice",
        description:
          "",
        image: "263429038c8650d07e373eec35587c86",
        defaultPrice: 60,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      
    ],
    menu: [],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 4,
    image: Kwality,
    offer: "₹70 OFF ABOVE ₹149",
    title: "Kwality Walls Frozen",
    source: "kwality-walls-frozen",
    rating: 4.5,
    distance: 2,
    minTime: 25,
    maxTime: 25,
    name: "Desserts,Ice Cream",
    place: "Dabagardens",
    DeliveryFee: 50,
    recommendedMenu: [
      {
        id: 1,
        name: "Vanilla Party Pack [700ml x 2pcs]",
        description:
          "Rich creamy vanilla dessert thats more vanilla-tasting than any vanilla you have ever tasted in all of vanillas entirety. Kcal/Serving 224",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/23/d63b712e-309d-49d9-ad77-7c9161b6755a_2311cb5e-24e1-4903-9e0a-0be84fb0c1b1.jpg_compressed",
        defaultPrice: 198,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Tutti Frutti Party Pack, 700ml",
        description:
          "Rich creamy scoop loaded with tiny bites of tutti fruity. Kcal/Serving 96",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/23/c429247a-6264-44a7-9e2c-9a253daa0952_085cfa22-bb60-4c59-b845-52b9e128fa4e.jpg_compressed",
        defaultPrice: 155,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Kesar Pista Party Pack 700ml",
        description:
          "Royal delight in every bite! A rich and creamy scoop loaded with rich flavourful kesar and pieces of pista. Kcal/Serving 117",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/23/5e7e0e09-691c-4c05-90d1-9063237021bf_102d8bc7-ee12-43dc-a918-2804164577e3.jpg_compressed",
        defaultPrice: 185,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Blackcurrant & Raisins Party Pack, 700ml",
        description:
          "Creamy blend of black currant berries and raisins. A refreshing summer treat! Kcal/Serving 114",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/23/39ab2e93-b0aa-45ba-831d-a3bca81470fc_aaca35b9-15a7-43ca-9358-af93cbb7af9a.jpg_compressed",
        defaultPrice: 185,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Magnum Brownie Ice Cream, 80ml",
        description:
          "Expertly crafted icecream with brownie flavour, crunchy cashew and Belgian chocolate. Kcal/Serving 224",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/25/6054fa05-6a31-41f9-ad26-222fa63c1d54_4e2f3ee9-e0ea-46c7-9bc6-c8bfb5338cb4.jpg_compressed",
        defaultPrice: 99,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 5,
    image: Zeeshan,
    offer: "₹15 OFF ABOVE ₹179",
    title: "Zeeshan",
    source: "zeeshan",
    rating: 4.4,
    distance: 3,
    minTime: 35,
    maxTime: 50,
    name: "Biryani, curries and more",
    place: "Jagadamba",
    DeliveryFee: 70,
    recommendedMenu: [
      {
        id: 1,
        name: "Chicken Fry Biryani",
        description:
          "Deliciously decadent flavored dum rice layered with fried chicken and Indian whole spices cooked to perfection. (Serve 2)",
        image: "fj2byn0sd02srchea3ty",
        defaultPrice: 320,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Chicken Dum-biryani",
        description:
          "Serves 1 | A fragrant combination of rice and succulent chicken pieces cooked to perfection in authentic dum-style. |Served with Both bone/boneless|",
        image: "yee0tlmep8oyrv0hpgwa",
        defaultPrice: 310,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Chicken-65 Biryani",
        description:
          "Flavored rice slow cooked in an aromatic blend of masala and topped with crispy chicken 65 pieces; served with salan and raita.",
        image: "kyr1tzg4l4wnvj20vuhx",
        defaultPrice: 350,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Chicken Lollypop Biryani",
        description:
          "An aromatic rice preparation layered with juicy chicken lollipop pieces and whole spices; served with raita and salan.",
        image: "hgddkiuomwicqhdxycuo",
        defaultPrice: 350,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Chicken Curry Boneless",
        description:
          "",
        image: "rqsgbguulxcyed9l1pva",
        defaultPrice: 330,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 6,
        name: "Chicken-65",
        description:
          "",
        image: "pdsb6ldu9kagtnnwxqul",
        defaultPrice: 320,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 7,
        name: "Chicken Lollypop",
        description:
          "",
        image: "gz7gkmtnfg200akpux3a",
        defaultPrice: 320,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 6,
    image: Naturals,
    offer: "₹100 OFF ABOVE ₹499",
    title: "Gatox natural Ice cream",
    source: "gatox-natural-ice-cream",
    rating: 4.7,
    distance: 4.5,
    minTime: 25,
    maxTime: 30,
    name: "Desserts,Ice Cream",
    place: "Dutt Island",
    DeliveryFee: 90,
    recommendedMenu: [
      {
        id: 1,
        name: "Sitaphal Ice Cream [mini Pack]",
        description:
          "The mouth watering taste of sitaphal meets the creamy goodness of our pure milk icecream. (contains 80gms & serves 1 scoop)",
        image: "8e3c019ce2d86c873cee2d3e38b7a12e",
        defaultPrice: 80,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Jack Fruit Ice Cream [mini Pack]",
        description:
          "Taste the aromatic sweetness of jackfruit in every bite. (contains 80gms & serves 1 scoop)",
        image: "d3348f5e1fe50d62eb83afdd108f8def",
        defaultPrice: 80,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Tender Coconut Ice Cream[mini Pack]",
        description:
          "Experience the refreshing and fresh bites of tender coconut in every scoop. (contains 80gms & serves 1 scoop)",
        image: "93d3316e3b86e9f072975f9c63473911",
        defaultPrice: 80,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Chikoo Ice Cream[mini Pack]",
        description:
          "Delicious ripple for the taste buds and each scoop tastes like a chickoo. (contains 80gms & serves 1 scoop)",
        image: "c4a19ddf6c55009bc25da53e4ca47b58",
        defaultPrice: 80,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Roasted Almonds Ice Cream [mini Pack]",
        description:
          "Crunchiness of real roasted almonds in every scoop of icecream. (contains 80gms & serves 1 scoop)",
        image: "b4931f4e6ac96ea7e62b96dd06b0936a",
        defaultPrice: 80,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 7,
    image: Dosa,
    offer: "Items at ₹109",
    title: "Sai Ram Parlour",
    source: "sai-ram-parlour",
    rating: 4.0,
    distance: 2.7,
    minTime: 35,
    maxTime: 40,
    name: "South Indian",
    place: "Diamond Park",
    DeliveryFee: 39,
    recommendedMenu: [
      {
        id: 1,
        name: "Sambar Idli",
        description:
          "",
        image: "aevomv4fflwqau8droma",
        defaultPrice: 65,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Onion Rava Dosa",
        description:
          "",
        image: "g5vtbhdv973tetlep4ez",
        defaultPrice: 92,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Rava Dosa",
        description:
          "",
        image: "u8fuudupntunqlr37bed",
        defaultPrice: 75,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Ghee Masala Dosa",
        description:
          "",
        image: "uyfaw4clwmbt1murf6no",
        defaultPrice: 99,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Rava Dosa Masala",
        description:
          "",
        image: "f5bbttzgcs2ubl6uqysd",
        defaultPrice: 90,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      
  
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 8,
    image: Meals,
    offer: "₹125 OFF ABOVE ₹349",
    title: "Lunch Box - Meals and Thalis",
    source: "rajus-kitchen",
    rating: 4.3,
    distance: 2.4,
    minTime: 30,
    maxTime: 35,
    name: "North Indian, Rice-Dal and more...",
    place: "Jail Road",
    DeliveryFee: 49,
    recommendedMenu: [
      {
        id: 1,
        name: "Sabudana Khichdi Curd Meal with Aloo Pattice",
        description:
          "(NO ONION, NO GARLIC) All time favourite Navratri upvas essential made with sabudana, green chillies and roasted peanut and served with Upvas Pattice & Curd.",
        image: "ab8341e7a2c52aeb22fe45bf5f1e905d",
        defaultPrice: 259,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Sabudana Khichdi & Curd Meal",
        description:
          "(NO ONION, NO GARLIC) All time favourite Navratri upvas essential made with sabudana, green chillies and roasted peanut and served with Curd",
        image: "2a5c3901a1fe2fa69f09d2b65bab8faa",
        defaultPrice: 239,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Sabudana Khichdi & Makhmali Paneer Vrat Thali",
        description:
          "(NO ONION, NO GARLIC) An exciting Navratri upvas special to make your day. Sabudana Khichdi with Curd served with a delicious and creamy Paneer Makhmali Curry",
        image: "87d0ac6febd9b37ee7efaa92900e7e3d",
        defaultPrice: 319,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Paneer Lababdar Lunchbox",
        description:
          "A North Indian Favourite! Soft & tender Paneer cooked in rich and creamy gravy paired with your choice of bread or rice",
        image: "0242e6049c09c3686caf4b95f9a21664",
        defaultPrice: 259,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Paneer Tikka Masala Lunchbox",
        description:
          "Tender paneer cubes grilled, charred perfectly and tossed in a rich and creamy gravy served with your choice of bread or rice",
        image: "d564d0654a2c117d00e031ba5bce5fcd",
        defaultPrice: 189,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 9,
    image: Mc,
    offer: "₹70 OFF ABOVE ₹249",
    title: "McDonald's",
    source: "McDonalds",
    rating: 4.4,
    distance: 2.2,
    minTime: 30,
    maxTime: 35,
    name: "Pizza's,Burger's and more...",
    place: "Diamond Park",
    DeliveryFee: 50,
    recommendedMenu: [
      {
        id: 1,
        name: "McChicken Burger + McSpicy Chicken Burger",
        description:
          "The ultimate chicken combo made just for you. Get the top selling McChicken with the McSpicy Chicken Burger.",
        image: "006d51070b0ab9c839a293b87412541c",
        defaultPrice: 291.43,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "McChicken Burger + Fries (M)",
        description:
          "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Medium Fries.",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/7/10/e446290d-d8c8-4256-b01b-605a096287f0_6b113716-f6b3-4719-9eff-744a7ccbfcfb.png",
        defaultPrice: 223.81,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "McChicken Burger + Fries (L)",
        description:
          "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Large Fries.",
        image: "a4148348225f693c23b73eda06934fac",
        defaultPrice: 227.62,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "2 McVeggie Burger",
        description:
          "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns makes our iconic McVeggie.",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/7/4/f3b2f1ea-b1f2-4be8-80a7-5db83d6ef192_5bcaddc3-bd20-4975-9fc9-86e6b7d33506.png",
        defaultPrice: 249.52,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "McSpicy Chicken Burger + Mexican Cheese Fries",
        description:
          "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Mexican Cheese Fries.",
        image: "40259e78ad0e89966755805a7c1ad800",
        defaultPrice: 264.76,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 6,
        name: "McVeggie Burger + McAloo Tikki Burger",
        description:
          "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, makes our iconic McVeggie and combo with our top selling McAloo Tikki Burger.",
        image: "1f4d583548597d41086df0c723560da7",
        defaultPrice: 189.52,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 7,
        name: "McSpicy Chicken Burger + Fries (M) + Piri Piri Spice Mix",
        description:
          "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with the spicy piri piri mix and medium fries.",
        image: "e10982204687e18ee6541684365039b8",
        defaultPrice: 264.76,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 10,
    image: Cake,
    offer: "₹100 OFF ABOVE ₹449",
    title: "Baker's Den",
    source: "bakers-den",
    rating: 4.5,
    distance: 3.2,
    minTime: 35,
    maxTime: 40,
    name: "Cake's and Pastery's",
    place: "Shankarmatmam road",
    DeliveryFee: 79,
    recommendedMenu: [
      {
        id: 1,
        name: "Chocolate Globe Premium Cake",
        description:
          "",
        image: "wcu9k3vzgrnvblbibzoe",
        defaultPrice: 620,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Belgium Chocolate Exotic Cake",
        description:
          "",
        image: "hk4h4jljbvlfpitlyljl",
        defaultPrice: 750,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Chocolate Caramel Exotic Cake",
        description:
          "",
        image: "ad3f4a4830d2ec293209090d01c95af3",
        defaultPrice: 700,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Choco Chips Exotic Cake",
        description:
          "",
        image: "kicfthw8liu4tgsdydz7",
        defaultPrice: 750,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "White Forest Exotic Cake",
        description:
          "",
        image: "xp7p87xbzda63xleytvj",
        defaultPrice: 700,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 11,
    image: BurgerKing,
    offer: "₹200 OFF ABOVE ₹449",
    title: "Burger King",
    source: "burger-king",
    rating: 4.5,
    distance: 4.5,
    minTime: 35,
    maxTime: 40,
    name: "Burgers",
    place: "Gajuwaka",
    location:
      "26-38-3, Exhibition Road Chairanya Nagar, Gajuwaka Visakhapatnam, 530026 Andhra Pradesh India",
    DeliveryFee: 109,
    recommendedMenu: [
      {
        id: 1,
        name: "Crispy Veg Burger+Fries(M)",
        description:
          "Crispy Veg Burger+Fries(M) \nQty: 251 Gms| Kcal: 694.7 | Carbs 498.8 Gms| Sugar: 6.5 Gms| Fat: 27.2 Gms| Saturated fat: 11.7 Gms| Protein: 14.3 Gms| Sodium: 3281.6 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
        image: "7798d7bed74c81bc0e5ffc677a7d2eef",
        defaultPrice: 160,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Crispy Veg Double Patty Burger+Fries(M)",
        description:
          "Crispy Veg Double Patty Burger+Fries(M) Qty: 318 Gms| Kcal: 863.9 | Carbs 516 Gms| Sugar: 9.1 Gms| Fat: 37.1 Gms| Saturated fat: 16 Gms| Protein: 17.1 Gms| Sodium: 1596.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image: "2b8b717cfc1d7aac9c1c9d16594735f8",
        defaultPrice: 189,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Crispy Chicken Double Patty Burger+Fries(M)",
        description:
          "Crispy Chicken Double Patty Burger+Fries(M) Qty: 296 Gms| Kcal: 867.6 | Carbs 498.1 Gms| Sugar: 10.2 Gms| Fat: 42.7 Gms| Saturated fat: 17.2 Gms| Protein: 23.3 Gms| Sodium: 1415.9 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image: "d065d5e9870ed98fb74d6b58c6e4f455",
        defaultPrice: 229,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Classic Family Feast for 4 - Veg",
        description:
          "Save Rs. 200 | 2 Crispy Veg + BK Veggie + Veg Crunchy Taco + 2 Med Fries + 2 Dips + Coca Cola Medium + Chocolate Thick Shake. Kcal: 2926.9 | Carbs 332.3 Gms| Sugar: 145 Gms| Fat: 114.9 Gms| Saturated fat: 51.7 Gms| Protein: 55.8 Gms| Sodium: 4274 Mg Contains: Gluten, Soybean , Milk , Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/4/6bd5ee8a-ee15-4647-a6ff-64c73da5398f_a6938e55-0190-42de-bae8-2c05615d25bf.jpg",
        defaultPrice: 731,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Veg Whopper",
        description:
          "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image: "f10379c6bd1edbbb7ee38da07c78058f",
        defaultPrice: 179,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 6,
        name: "Crispy Veg Burger",
        description:
          "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
        defaultPrice: 70,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 7,
        name: "Crispy Chicken Burger",
        description:
          "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 125 Gms| Kcal: 359.1 | Carbs 44.3 Gms| Sugar: 7.5 Gms| Fat: 15.1 Gms| Saturated fat: 4.8 Gms| Protein: 11.5 Gms| Sodium: 592.4 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
        defaultPrice: 90,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 8,
        name: "Crispy Chicken Double Patty Burger",
        description:
          "Double Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. Served with Crispy Fries & Cola. Qty: 182 Gms| Kcal: 535.1 | Carbs 52.7 Gms| Sugar: 10.2 Gms| Fat: 28.3 Gms| Saturated fat: 10.4 Gms| Protein: 17.4 Gms| Sodium: 887.1 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/060b47f3-77d6-4d92-8de2-d237fc2f0c33_441107a3-0545-4235-881c-08f1a21598c2.jpg",
        defaultPrice: 139,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 9,
        name: "Crispy Veg Double Patty Burger",
        description:
          "Double Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 204 Gms| Kcal: 531.4 | Carbs 70.6 Gms| Sugar: 9.1 Gms| Fat: 22.7 Gms| Saturated fat: 9.2 Gms| Protein: 11.2 Gms| Sodium: 1068 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9cd490f9-f191-49c2-9043-6dc3e7e58166_34badbda-4128-45d4-87e2-e9c580e8db43.jpg",
        defaultPrice: 99,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 10,
        name: "Hot 'N' Saucy Burger",
        description:
          "Chilli Creamy Patty, Spicy Sauce, Square Masala Buns. Qty: 255 Gms| Kcal: 682 | Carbs 82 Gms| Sugar: 17.5 Gms| Fat: 31.4 Gms| Saturated fat: 12.1 Gms| Protein: 17.9 Gms| Sodium: 1198.5 Mg Contains: Soybean, Milk",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/c13c49c8-90cc-4893-a04e-9699bf84ebeb_4ac6116d-f1d9-4508-88b2-c1a748ec0e31.jpg",
        defaultPrice: 199,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 11,
        name: "Fiery Chicken Burger",
        description:
          "Spicy Fried Chicken, Loads Of Sauces In Square Masala Buns. Qty: 247 Gms| Kcal: 588 | Carbs 64 Gms| Sugar: 12.1 Gms| Fat: 26.6 Gms| Saturated fat: 8.7 Gms| Protein: 23.1 Gms| Sodium: 1101.3 Mg Contains: Gluten, Soybean, Milk",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/c9c2be96-6ae0-4397-9e32-636965bdc2dd_b9809d7a-8b8b-428e-8d53-61c19ce85504.jpg",
        defaultPrice: 199,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 12,
        name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
        description:
          "2 Crispy Veg Double patty Qty: 408 Gms| Kcal: 1062.8 | Carbs 141.2 Gms| Sugar: 18.2 Gms| Fat: 45.4 Gms| Saturated fat: 18.4 Gms| Protein: 22.4 Gms| Sodium: 2136 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/acd65607-5910-4170-b3f9-4b7196cbbca6_01f38b7e-785c-4241-9e7a-3647ea947e35.jpg",
        defaultPrice: 198,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 13,
        name: "Veg Makhani Burst + Whopper Jr Veg",
        description:
          "Veg Makhani + Whopper Jr Veg Qty: 329 Gms| Kcal: 771 | Carbs 110.1 Gms| Sugar: 17.2 Gms| Fat: 29.2 Gms| Saturated fat: 15.3 Gms| Protein: 16.8 Gms| Sodium: 2196.1 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/7b7d7c01-d1f5-4983-a49a-55ae6dec0e85_29587c5e-1372-4e3a-956d-f4a2dd78ebdf.jpg",
        defaultPrice: 229,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 14,
        name: "4 Crispy Veg + 2 Medium Fries",
        description:
          "4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/26/35fd0ea5-d817-451b-bb22-01124511706b_9c70609b-9ae0-40c7-8701-45dc15b7e9c8.jpg",
        defaultPrice: 400,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 15,
        name: "Medium Fries",
        description:
          "The Perfect Crispy Partner. Qty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg Contains: Gluten",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
        defaultPrice: 115,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 16,
        name: "King Fries",
        description:
          "The Perfect Crispy Partner Qty: 156 Gms| Kcal: 455 | Carbs 609.48 Gms| Sugar: 0 Gms| Fat: 19.7 Gms| Saturated fat: 9.31 Gms| Protein: 8 Gms| Sodium: 723.7 Mg Contains: Gluten",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
        defaultPrice: 130,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 17,
        name: "King Peri Peri Fries",
        description:
          "Crispy Fries With Tangy Peri Peri Spice. Qty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg Contains: Gluten, Soybean",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/4/19/fa747205-3c4d-497c-a948-65f3c224a4cf_11129959-8182-4b8c-bbb5-db49665fba19.jpg",
        defaultPrice: 159,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
  {
    id: 12,
    image: StarBucks,
    offer: "₹100 OFF ABOVE ₹549",
    title: "Star Bucks",
    source: "starbucks",
    rating: 4.5,
    distance: 3,
    minTime: 35,
    maxTime: 40,
    name: "Star Bucks",
    place: "Dwarka nagar",
    DeliveryFee: 170,
    recommendedMenu: [
      {
        id: 1,
        name: "Mocha Cookie Crumble Cream Frappuccino",
        description:
          "Our Mocha Cookie crumble cream Frappuccino is a deliciously flavoured mocha indulgence - milk and cookies meet chocolate for a perfect combination. A coffee free delight. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 466 kcal, Grande: 431 ML, 641 kcal, Venti: 591 ML, 806 kcal Allergen - Contains Milk, Soy, Wheat.",
        image: "094ce306110e673511a2191b886b2123",
        defaultPrice: 475,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 2,
        name: "Mocha Cookie Crumble Frappuccino",
        description:
          "Our Mocha Cookie crumble Frappuccino is a deliciously flavoured mocha indulgence - Blended Coffee meets chocolate and cookies for a perfect combination. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 420 kcal, Grande: 431 ML, 620 kcal, Venti: 591 ML, 778 kcal Allergen - Contains Milk, Soy, Wheat.",
        image: "094ce306110e673511a2191b886b2123",
        defaultPrice: 475,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 3,
        name: "Stardust Macchiato Frappuccino",
        description:
          "Super smooth and creamy vanilla half and half blended with ice, marked with an intense ristretto shot and cocoa dust. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 406 kcal, Grande: 431 ML, 574 kcal, Venti: 591 ML, 704 kcal Allergen - Contains Milk.",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/6/27/7409d630-ca12-4578-b608-3c4207c28c3f_778dda57-188d-438a-84e8-1f830d512651.jpg",
        defaultPrice: 470,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 4,
        name: "Mocha Cookie Crumble Latte",
        description:
          "Our Mocha Cookie crumble Latte is a deliciously flavoured mocha indulgence - Hot coffee meets chocolate and cookies for a perfect combination. Serving size (ml)/Calories (kcal) - Short: 237 ML, 294 kcal, Tall: 354 ML, 446 kcal, Grande: 431 ML, 513 kcal, Venti: 591 ML, 635 kcal Allergen - Contains Milk, Soy, Wheat.",
        image: "2416ea38a033a4107aabd87b110245a3",
        defaultPrice: 400,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 5,
        name: "Stardust Macchiato",
        description:
          "Super smooth and creamy vanilla half and half crowned with sweet and subtle cold foam, marked with an intense ristretto shot and cocoa dust. Serving size (ml)/Calories (kcal) - Short: 237 ML, 541 kcal, Tall: 354 ML, 643 kcal Allergen - Contains Milk.",
        image:
          "FOOD_CATALOG/IMAGES/CMS/2024/6/27/d4f51f70-fb6d-4c9d-9134-1e928c468e31_74d70aee-9867-41a9-826a-9538b27808f8.jpg",
        defaultPrice: 395,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 6,
        name: "Iced Mocha Cookie Crumble Latte",
        description: "Our Mocha Cookie crumble Latte is a deliciously flavoured mocha indulgence - Hot coffee meets chocolate and cookies for a perfect combination. Served over ice. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 386 kcal, Grande: 431 ML, 481 kcal, Venti: 591 ML, 562 kcal Allergen - Contains Milk, Soy, Wheat.",
        image: "bb426eeef832ae5bbf1167614500ad79",
        defaultPrice: 440,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 7,
        name: "Iced Stardust Macchiato",
        description: "Super smooth and creamy vanilla half and half crowned with sweet and subtle cold foam, marked with an intense ristretto shot and cocoa dust. Served over ice. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 386 kcal Allergen - Contains Milk.",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/6/27/0750c6e3-4100-4006-9a04-fbf4af475801_e1a4edc8-713a-4f52-a2c7-3d044bc45712.jpg",
        defaultPrice: 435,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 8,
        name: "Cold Brew with Ginger Ale",
        description: "A delicious double layered cold brew beverage with ginger ale. A pure delight for a warm sunny day. Serving size (ml)/Calories (kcal) - Tall: 354 ML, 141 kcal, Grande: 431 ML, 152 kcal, Venti: 591 ML, 162 kcal Allergen - NA.",
        image: "FOOD_CATALOG/IMAGES/CMS/2024/4/8/09104348-48b5-408e-8592-355099f67412_969d6123-a598-4c38-99c5-c483a181fe25.jpg",
        defaultPrice: 325,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 9,
        name: "Java Chip Frappuccino.",
        description: "We blend mocha sauce and Frappuccino chips with Frappuccino roast coffee and milk and ice, then top with whipped vanilla topping and mocha drizzle to bring you endless java joy. Energy - Tall (354ml) - 391.7 kcal / Grande (473ml) - 536.19 kcal / Venti (591ml) 667.4 kcal. Allergen - Contains Wheat, Milk, Soy.",
        image: "ihv58ydtjom9ztugqgsk",
        defaultPrice: 290,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
      {
        id: 10,
        name: "Double Chocolate Chip Frappuccino",
        description: "Mocha-flavoured sauce meets up with chocolaty chips, milk and ice. Top it off with whipped vanilla topping and mocha drizzle for a real party in your mouth. Energy - Tall (354ml) - 414.9 kcal / Grande (473ml) - 580.35 kcal / Venti (591ml) 729.42 kcal. Allergen - Contains Wheat, Milk, Soy.",
        image: "7eca19e43a0014e011e36752dfdb6b0e",
        defaultPrice: 340,
        offerTags: [
          {
            title: "50% OFF",
            subTitle: "USE STEALDEAL",
          },
        ],
      },
    ],
    deals: [
      {
        id: 1,
        name: "Swiggy",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic",
        couponCode: "SWIGGY50",
        offerPercent: 50,
        maxOfferPrice: 100,
      },
      {
        id: 2,
        name: "Kotak",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/21e80364-d187-4037-8298-153e7feee2b0_Kotak.png",
        couponCode: "KOTAK125",
        offerPercent: 15,
        maxOfferPrice: 125,
      },
      {
        id: 3,
        name: "BOBDC",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/6/30/5652719b-c6bc-4f4b-a5d7-39917a6ffdf6_BOBMenuVisibilityLogo.png",
        couponCode: "BOBDC125",
        offerPercent: 20,
        maxOfferPrice: 125,
      },
    ],
  },
];

