//variable declarations
var employeeNum;
var employeeObject;
var employeeObjects;
var cardDiv;
//employee objects
var employee_0 = {
	image: "images/andrew.jpg",
	name: "Andrew Meyers",
	title: "Head Chocolatier, Co. Founder",
	phone: "555.555.5555",
	email: "andrew.meyers@crunchbangang.com"
}
var employee_1 = {
	image: "images/carrolLang.jpg",
	name: "Carrol Lang",
	title: "Co. Founder",
	phone: "555.555.5555",
	email: "carrol.lang@crunchbangang.com"
}
var employee_2 = {
	image: "images/dave.jpg",
	name: "Dave Douglas",
	title: "Confectioner",
	phone: "555.555.5555",
	email: "dave.douglas@crunchbangang.com"
}
var employee_3 = {
	image: "images/melissa.jpg",
	name: "Melissa Carlton",
	title: "Marketing, Social Media",
	phone: "555.555.5555",
	email: "melissa.carlton@crunchbangang.com"
}
var employees = [employee_0, employee_1, employee_2, employee_3];
//writes employee information to the DOM
var cardCreator = function(image, name, title, phone, email) {
cardDiv.innerHTML = ('<div class="employeeDiv">'+
							'<div class=firstColumn>'+
								<!-- Picture -->
								'<li class="employeePic"><img src="'+image+'"alt="Employee Picture"></li>'+
							'</div>'+
							'<div class="secondColumn">'+
								<!-- Name -->
								'<li class="employeeName"><h2>'+name+'</h2></li>'+
								<!-- Title -->
								'<li class="employeeTitle"><h3>'+title+'</h3></li>'+
								<!-- Phone -->
								'<li class="employeePhone"><p>'+phone+'</p></li>'+
								<!-- email -->	
								'<li class="employeeEmail"><p>'+email+'</p></li>'+
							'</div>'+
						'</div>');
}
//main for loop cycles through employee objects and selects corresponding div in html
for (var i = 0; i < employees.length; i++) {
	employeeNum = ("employeeDiv_"+i);
	employeeObject = employees[i];
	cardDiv = document.getElementById(employeeNum);
	cardCreator(employeeObject.image,employeeObject.name,employeeObject.title,employeeObject.phone,employeeObject.email);
};
