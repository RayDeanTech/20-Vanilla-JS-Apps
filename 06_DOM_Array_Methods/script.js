const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {

    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();


    const user = data.results[0];

    // console.log(user);

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    // console.log(newUser)

    addData(newUser);


};


// double everyones money -- YOU GET A CAR
function doubleMoney() {
    // console.log(data)
    data = data.map(user => {
        // console.log({...user, money: user.money * 2})
        return { ...user, money: user.money * 2 };

    });

    updateDOM();

};


// filter only millionaires
function showMillionaires() {
    data = data.filter(person => person.money >= 1000000);

    updateDOM();
};


// sort by richest
function sortByRichest() {
    data.sort((a, b) => b.money - a.money);

    updateDOM();
};


// calculate wealth
function calculateWealth() {


    // const sum = data.reduce((accumulator, user) => {
    //     console.log('Accumulator:', accumulator);
    //     console.log('Money:', user.money);
    //     return accumulator + user.money;
    // }, 0);

    // console.log('Final sum:', sum);

    // Mutate the accumulator? BAD OR OK??????
    // const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealth = data.reduce((acc, user) => (acc + user.money), 0);

    // console.log(formatMoney(wealth));

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);



};




// add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
};

// update DOM; default param is [data]
function updateDOM(providedData = data) {
    // console.log(providedData);
    // console.log(data)

    // clear main div
    main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

    providedData.forEach(person => {
        const el = document.createElement('div');
        el.classList.add('person');
        el.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`;
        main.appendChild(el);
    });

};


// Format number as $$$
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', () => {

    console.log(`Calculating performance of "sortByRichest"...`);

    // Start the timer
    const startTime = performance.now();

    sortByRichest();

    // End the timer
    const endTime = performance.now();

    // Calculate the elapsed time
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Elapsed time: ${elapsedTime} milliseconds`);

});
calculateWealthBtn.addEventListener('click', () => {
    console.log(`Calculating performance of "calculateWealth"...`);

    // Start the timer
    const startTime = performance.now();

    calculateWealth();

    // End the timer
    const endTime = performance.now();

    // Calculate the elapsed time
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Elapsed time: ${elapsedTime} milliseconds`);

});