let x = 1;
let products = [
  [
    {
      url: "media/pictures/duck banner.jpg",
      heading: "Duckie",
      Des: 'A whimsical, quirky duck, brandishing a knife, is rumored to be the enigmatic leader of the "Duck Cult." Whispers suggest that those who mock its diminutive butter knives mysteriously vanish, though conclusive evidence linking this character to these disappearances remains elusive.',
      location: "Duck Empire",
      price: "100$",
    },
    {
      url: "media/pictures/big duck.jpeg",
      heading: "Big Duck",
      Des: "A colossal duck hidden somewhere on our planet, according to ancient legends, holds the key to a remarkable event. It is said that when this magnificent duck is discovered, the Duck Army will mobilize for a noble cause, uniting all the ducks worldwide in a quest for global peace and harmony.",
      location: "Hidden",
      price: "9.99$",
    },
    {
      url: "media/pictures/rubber duck.jpeg",
      heading: "Rubber Duck",
      Des: "They may dismiss it as just a rubber duck, but I believe there's more to it than meets the eye. The mystery within beckons me, and I'm determined to uncover its secrets. Their claims cannot deter me; the truth must be revealed. If not me, then who will rise to the challenge?",
      location: "Super Market",
      price: "2.99$",
    },
    {
      url: "media/pictures/red duck.jpg",
      heading: "The Red Duck",
      Des: "Legend has it that a red duck is a harbinger of fear and malevolence. It's foretold that this crimson waterfowl will seize command of the duck army, instigating an all-encompassing conflict with those unswayed by its control. The ultimate outcome remains shrouded in mystery, leaving all in anticipation of what will transpire.",
      location: "Coming soon!",
      price: "99$",
    },
  ],
  [
    {
      url: "media/pictures/airpods.webp",
      heading: "Air Pods",
      Des: "Are you tired of dealing with tangled wires that constantly get in the way, making your life less convenient? Say goodbye to those frustrating moments and say hello to the future of audio with our cutting-edge innovation - the iPods. You should buy this because why not?",
      location: "Apple Store",
      price: "62$",
    },
    {
      url: "media/pictures/laptop.jpg",
      heading: "Laptop",
      Des: "From featherweight ultrabooks designed for the on-the-go professional to gaming behemoths that transport you to virtual worlds, laptops cater to a multitude of needs and desires. In a compact chassis, laptops house a universe of digital capabilities, serving as the indispensable companions of our fast-paced, connected lives",
      location: "11 Duck, Duckland",
      price: "500$",
    },
    {
      url: "media/pictures/iphone.webp",
      heading: "Iphone",
      Des: "Throughout the evolution of industries, an enduring debate has revolved around the superiority of the iPhone. Personally, I remain indifferent to the outcome, so feel free to follow your own preference since I am too lazy to debate on it.",
      location: "Apple Store",
      price: "200$",
    },
    {
      url: "media/pictures/keyboard.webp",
      heading: "Keyboard",
      Des: "Keyboards are an essential tool in the digital age, bridging the gap between your thoughts and the virtual world with every keystroke. From the satisfying click of mechanical keys to the sleek and silent touch of modern chiclet designs, keyboards offer a world of tactile experiences for every typist.",
      location: "41 Quack, Duckland",
      price: "30$",
    },
    {
      url: "media/pictures/mouse.avif",
      heading: "Mouse",
      Des: "The humble computer mouse, often taken for granted, is a precise and nimble instrument that guides our digital journeys with effortless precision. In the palm of your hand, a mouse bridges the physical and digital worlds, offering a tangible connection to your computer, making it an indispensable tool for every click, scroll, and swipe",
      location: "392 Meow, Duckland",
      price: "40$",
    },
  ],
];
const arrayPrice = ["ERROR", "1.99$", "2.99$", "99.11$"];

const cardHTML =
  '<div class="card-img bl">' +
  '<img class="card-img" id="card-img" src="">' +
  "</div>" +
  '<div class="card-text">' +
  '<div class="card-text-top">' +
  '<h1 id="cardHeading"></h1>' +
  '<h3 id="cardDescription"></h3>' +
  "</div>" +
  '<div class="card-text-bottom">' +
  "<h2>location</h2>" +
  '<h2 id="cardLocation"></h2>' +
  '<h2 id="cardPrice"></h2>' +
  "</div>" +
  "</div>";

mainBody = document.querySelector("#addMainBody");
let i = 0;

function list() {
  mainBody.innerHTML = "";
  for (let i = 0; i < products[x].length; i++) {
    mainBody.innerHTML +=
      '<div class="card">' +
      '<div class="card-img bl">' +
      '<img class="card-img" id="card-img-' +
      i +
      '" src="">' +
      "</div>" +
      '<div class="card-text">' +
      '<div class="card-text-top">' +
      '<h1 id="cardHeading-' +
      i +
      '"></h1>' +
      '<h3 id="cardDescription-' +
      i +
      '"></h3>' +
      "</div>" +
      '<div class="card-text-bottom">' +
      '<h2 id="cardLocation-' +
      i +
      '"></h2>' +
      '<h2 id="cardPrice-' +
      i +
      '"></h2>' +
      "</div>" +
      "</div>" +
      "</div>";

    document.getElementById("card-img-" + i + "").src = products[x][i].url;
    document.getElementById("cardHeading-" + i + "").innerText =
      products[x][i].heading;
    document.getElementById("cardDescription-" + i + "").innerText =
      products[x][i].Des;
    document.getElementById("cardLocation-" + i + "").innerText =
      products[x][i].location;
    document.getElementById("cardPrice-" + i + "").innerText =
      products[x][i].price;
  }
}
function sortP() {
  products[x].sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
  });
  list();
}
function sortA() {
  products[x].sort((a, b) => {
    const nameA = a.heading.toUpperCase();
    const nameB = b.heading.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  list();
}
function changeMode() {
  x = 0;
  list();
}
list();
function showCreate() {
  document.getElementById('create').style.display = 'flex';
}
function hideCreate() {
  document.getElementById('create').style.display = 'none';
}
function createCardBTN() {
  let url = document.getElementById("extactURL").value
  let heading = document.getElementById("extactHeading").value
  let description = document.getElementById("extactDescription").value
  let loc = document.getElementById("extactLocation").value
  let price = document.getElementById("extactPrice").value
  newarray = {
      "url": url,
      "heading": heading,
      "Des": description,
      "location": loc,
      "price": price,
  },
  document.getElementById('create').style.display = 'none';
  products[x].push(newarray)
  list()
  document.getElementById("extactURL").value = "";
  document.getElementById("extactHeading").value = "";
  document.getElementById("extactDescription").value = "";
  document.getElementById("extactLocation").value = "";
  document.getElementById("extactPrice").value = "";
}