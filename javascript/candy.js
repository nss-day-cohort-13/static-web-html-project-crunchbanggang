// Create an array to hold your products.

var products = []

// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.

var assortedTruffles = {
	name: "Assorted Truffles",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow pudding chocolate bar chupa chups. Oat cake jelly beans tiramisu sugar plum bonbon tiramisu cookie powder bear claw. Wafer I love tootsie roll cupcake. Oat cake cookie jelly beans.",
	price: "5 for $3.50",
	url: "images/crunchBangAssortedTruffles.jpg",
};

products.push(assortedTruffles);

console.log("VarProducts", products);

var candyApples = {
	name: "Candy Apples",
	description: "Tiramisu cotton candy caramels. I love sweet roll marshmallow donut I love. Apple pie croissant wafer chocolate cake fruitcake gummies I love biscuit. Sweet chupa chups croissant gingerbread cake dessert donut. Pudding topping pudding cupcake lollipop danish gummi bears ice cream sweet roll. Ice cream muffin soufflé pastry sesame snaps I love gummies. ",
	price: "3 for $3.50",
	url: "images/crunchBangCandyApple.jpg"
};

products.push(candyApples);

console.log("VarProducts", products);

var candyPretzels = {
	name: "Candy Pretzels",
	description: "Icing sweet roll candy canes brownie jujubes ice cream. Jelly-o I love gummi bears. Candy canes oat cake chocolate bar apple pie marzipan. Jujubes sweet tiramisu cheesecake jelly gingerbread fruitcake gingerbread pudding. Caramels cookie halvah sweet roll. Candy pudding danish.",
	price: "1lb for $3.50",
	url: "images/crunchBangCandyPretzel.jpg"
};

products.push(candyPretzels);

console.log("VarProducts", products);

var assortedTaffy = {
	name: "Assorted Taffy",
	description: "TAFFY, TAFFY, TAFFFY. Gummi bears I love dessert tart cupcake brownie. Halvah caramels chocolate bar cotton candy. Pie liquorice sweet. Lemon drops lollipop sweet powder candy macaroon. Biscuit marshmallow pudding I love. Chocolate sesame snaps toffee pudding I love danish chocolate cake liquorice macaroon. Bear claw candy canes oat cake I love.",
	price: "$3.00 per lb",
	url: "images/cBAssortedTaffy.jpeg"
};

products.push(assortedTaffy);

console.log("VarProducts", products);

var lollipops = {
	name: "Lollipops",
	description: "Lollipop carrot cake cupcake jelly-o chocolate cake. Fruitcake biscuit I love muffin. I love I love I love lemon drops powder danish candy canes. Bonbon cake jelly oat cake bear claw sweet roll candy I love. Topping chocolate bar sesame snaps lollipop jelly-o tiramisu chocolate powder I love. Bear claw sweet jelly beans chocolate lemon drops.",
	price: "1 for $2.50",
	url: "images/cBLollipops.jpeg"
};

products.push(lollipops);

console.log("VarProducts", products);

var licorice = {
	name: "Licorice",
	description: "liquorice jelly beans. Icing tart topping. Jelly cotton candy cheesecake caramels I love. Donut muffin cookie. Wafer candy croissant. Carrot cake topping ice cream marshmallow. Candy lollipop candy canes wafer marshmallow bonbon cake. Pastry jujubes jelly beans gummi bears.",
	price: "10 for $1.00",
	url: "images/cBLicorice.jpg"
};

products.push(licorice);

var  jawbreakers= {
	name: "Jaw Breakers",
	description: "Candy canes lemon drops fruitcake topping. Gingerbread cake dessert. Candy pudding gummies cheesecake powder muffin candy liquorice. Jujubes apple pie pastry marshmallow jujubes jujubes toffee oat cake. Marzipan fruitcake chupa chups croissant cupcake bear claw I love cupcake I love.",
	price: "4 for $1.00",
	url: "images/cBJawBreakers.jpeg"
};

products.push(jawbreakers);

var jellybeans= {
	name: "Jelly Beans",
	description: "Jelly beans jelly beans biscuit sweet roll liquorice cake. Macaroon carrot cake toffee. Candy canes lemon drops fruitcake topping. Gingerbread cake dessert. Candy pudding gummies cheesecake powder muffin candy liquorice. Jujubes apple pie pastry marshmallow jujubes jujubes toffee oat cake.",
	price: "$3.50 per lb",
	url: "images/cBJellyBeans.jpg"
};

products.push(jellybeans);

var pixiesticks = {
	name: "Pixie Sticks",
	description: "Powder tootsie roll lollipop gingerbread. Cookie liquorice cheesecake fruitcake ice cream brownie soufflé. Cake icing pudding chupa chups marshmallow soufflé. Sweet roll liquorice chocolate cake I love macaroon. Cupcake I love soufflé. Bonbon I love dragée bear claw. Macaroon marshmallow gummies powder. I love chocolate bar jelly jelly-o caramels. ",
	price: "4 for $1.00",
	url: "images/cBPixieStick.jpeg"
};

products.push(pixiesticks);


var productElements = document.getElementById("combodiv");

// The team will use JavaScript to add each product to the DOM.

var productSelection = productElements[0]

for (var i = 0; i < products.length; i++) {
	var currentProduct = products[i];
	var img = "<div class='product'><div class='productimg'><img src='" + currentProduct.url + "' alt='" + currentProduct.name + "'></div>";
	var name = "<div class='carddescription'><div class='productName'><h2>" + currentProduct.name + "</h2></div>";
	var description = "<div class='productDescription'><p>" + currentProduct.description + "</p></div>";
	var price = "<div class='productPrice'><h4>" + currentProduct.price + "</h4></div>";
	var button = "<div class='button'><input type='button' value='Read More'></div></div><div>";


	productElements.innerHTML += img + name + description + price + button;
}

// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.



// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.

