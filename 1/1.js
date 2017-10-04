const list = document.querySelector('.people-list');
const asc = document.querySelector('.people-list-asc');
const desc = document.querySelector('.people-list-desc');
const minors = document.querySelector('.people-list-minors');
const oldies = document.querySelector('.people-list-oldies');
const full = document.querySelector('.people-list-full');

const maryann = {
	firstName: 'Mary Ann',
	lastName: 'Belga',
	age: 26
}

const ellaine = {
	firstName: 'Ellaine',
	lastName: 'Diomampo',
	age: 32
}

const che = {
	firstName: 'Che',
	lastName: 'Baldevia',
	age: 16
}

const people = [maryann, ellaine, che]

const getFullInfo = function(person) {
	if (person.age < 18){
		return `${person.firstName} ${person.lastName} is a minor at ${person.age} years of age.`;
	}
	else{
		return `${person.firstName} ${person.lastName} is an adult at ${person.age} years of age.`;	
	}
};

const createLi = function(person) {
	const li = document.createElement('li');
	li.innerHTML = `${person.firstName} ${person.lastName}, ${person.age}`;
	li.dataset.name = person.firstName;
	return li;
};

// All

people.forEach(function(person){
	const li = createLi(person);
	list.appendChild(li);
});

// Ascending Age

const _fromYoungestToEldest = people.sort(function (p1, p2) {
  return p1.age - p2.age;
});

_fromYoungestToEldest.forEach(function(person){
	const li = document.createElement('li');
	li.innerHTML = `${person.firstName} ${person.lastName}, ${person.age}`;
	li.dataset.name = person.firstName;

	asc.appendChild(li);
});

// Descending Age 

const _fromEldestToYoungest = people.sort(function (p1, p2) {
  return p2.age - p1.age;
});

_fromEldestToYoungest.forEach(function(person){
	const li = document.createElement('li');
	li.innerHTML = `${person.firstName} ${person.lastName}, ${person.age}`;
	li.dataset.name = person.firstName;

	desc.appendChild(li);
});

// Only Minor or Only Oldie

const _only = people.map(function (person){
	const li = document.createElement('li');
		li.innerHTML = `${person.firstName} ${person.lastName}, ${person.age}`;
		li.dataset.name = person.firstName;
	if (person.age < 18){
		
		minors.appendChild(li);
	}

	else{
		oldies.appendChild(li);
	}
});


// Full Info 

people.forEach(function(person){
	const li = document.createElement('li');
	li.innerHTML = getFullInfo(person);
	li.dataset.name = person.firstName;

	full.appendChild(li);
});

// List Items

const listItems = document.querySelectorAll('li');

listItems.forEach(function (li) {
	li.addEventListener('click', function (evt) {
		const found = people.find(function(person){
			return person.firstName == li.dataset.name;
		});
		alert(getFullInfo(found));
	});
});