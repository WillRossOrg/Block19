const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Photographer"];
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
];

function displayFreelancers() {
    const freelancersList = document.getElementById("freelancers");
    freelancersList.innerHTML = '';
    freelancers.forEach(freelancer => {
        freelancersList.innerHTML += `<p>${freelancer.name}, the ${freelancer.occupation}, starting at $${freelancer.price}</p>`;
    });
}

function calculateAveragePrice() {
    const average = freelancers.reduce((acc, curr) => acc + curr.price, 0) / freelancers.length;
    document.getElementById("average-price").textContent = `Average Starting Price: $${average.toFixed(2)}`;
}

function generateRandomFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100) + 20; // random price between 20 and 120
    return { name, occupation, price };
}

function addNewFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    displayFreelancers();
    calculateAveragePrice();
}

// Initial display
displayFreelancers();
calculateAveragePrice();

// Add new freelancer every few seconds
setInterval(addNewFreelancer, 3000); // Adjust the interval as needed
