// ELEMENTS
const list    = document.querySelector('.people-list');
const asc     = document.querySelector('.people-list--asc');
const desc    = document.querySelector('.people-list--desc');
const minors  = document.querySelector('.people-list--minors');
const oldies  = document.querySelector('.people-list--oldies');
const info    = document.querySelector('.people-list--info');

const mei = {
  firstName: 'Mei',
  lastName: 'Chagas',
  age: 26
};

const josh = {
  firstName: 'Josh',
  lastName: 'Cerbito',
  age: 28
};

const rizal = {
  firstName: 'Jose',
  lastName: 'Protacio Rizal Mercado Alonzo Y Realonda',
  age: 35
};

const stewie = {
  firstName: 'Stewie',
  lastName: 'Little',
  age: 5
};

const cm = {
  firstName: 'Christine Mae',
  lastName: 'Cerbito',
  age: 27
};

const people = [mei, josh, rizal, stewie];

const _minors = people.filter(function (person) {
  return person.age < 18;
});

const _oldies = people.filter(function (person) {
  return person.age >= 18;
});

const _firstOldie = people.find(function (person) {
  return person.age >= 18;
});

const _fromYoungestToEldest = people.sort();

const _fromEldestToYoungest = people.sort(function (p1, p2) {
  return p2.age - p1.age;
});

const _peoplesInfo = people.map(function (person) {
  return `${person.firstName} ${person.lastName} is a minor at ${person.age} years of age.`;
});

/**
 * HTML RENDER FUNCTIONS
 */

// get full person info
const getFullInfo = function (person) {
  return `${person.firstName} ${person.lastName} is a minor at ${person.age} years of age.`;
};

// render list items under default list
people.forEach(function (person) {
   // create new element
  const listItem = document.createElement('li');

  // add concatenated value inside li element
  listItem.innerHTML = `${person.firstName} ${person.lastName}, ${person.age}`;

  // add data attribute identifier
  listItem.dataset.name = person.firstName;

  // render list item to DOM
  list.appendChild(listItem);
});

// get all li inside the page
const listItems = document.querySelectorAll('li');

// loop through all the li
listItems.forEach(function (li) {
  // attach click event to li
  li.addEventListener('click', function (evt) {
    // find selected person inside 'people' array
    const found = people.find(function(person) {
      return person.firstName == li.dataset.name;
    });

    // alert name
    alert(getFullInfo(found));
  });
});
