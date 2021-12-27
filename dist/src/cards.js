function createManagerCards (manager) {
    // An empty string allows us to add html for any number of employees, same for every card maker
    let managerCards = ``
    // for loop lets us cycle through all of our employees
    for(let i = 0; i < manager.length; i++) {
        let tempMan = manager[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${tempMan.name}</h3>
            <h4 class="type">Manager   <img src='./dist/images/Manager.png' alt='coffee cup' height='25px' width='25px'></h4>
        </div>
        <div class="card-body">
            <p>ID: <span class="ID">${tempMan.id}</span></p>
            <p>Email: <span class="Email"><a href="mailto:${tempMan.email}">${tempMan.email}</a></span></p>
            <p>Office Number: <span class="officeNumber">${tempMan.officeNo}</span></p></div>
        </div>`
        // adding cards individually to the whole of the cards
    managerCards += card
    }
    // sends back all of our created cards
    return managerCards
}

function createEngineerCards (engineers) {
    let engineerCards = ``
    for(let i = 0; i < engineers.length; i++) {
        let tempEngineer = engineers[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${tempEngineer.name}</h3>
            <h4 class="type">Engineer   <img src='./dist/images/Engineer.png' alt='Glasses bc they nerds lmao' height='25px' width='25px'></h4>
        </div>
        <div class="card-body">
            <p>ID: <span class="ID">${tempEngineer.id}</span></p>
            <p>Email: <span class="Email"><a href="mailto:${tempEngineer.email}">${tempEngineer.email}</a></span></p>
            <p>Github: <span class="Github"><a href="https://www.github.com/${tempEngineer.gitHub}"  target="_blank">${tempEngineer.gitHub}</a></span></p>
        </div>
        </div>`
    engineerCards += card
    }
    return engineerCards
}

function createInternCards (interns) {
    let internCards = ``
    for(let i = 0; i < interns.length; i++) {
        let tempIntern = interns[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${tempIntern.name}</h3>
            <h4 class="type">Intern <img src='./dist/images/Intern.png' alt='Graduation cap' height='25px' width='25px'></h4>
        </div>
        <div class="card-body">
            <p>ID: <span class="ID">${tempIntern.id}</span></p>
            <p>Email: <span class="Email"><a href="mailto:${tempIntern.email}">${tempIntern.email}</a></span></p>
            <p>School: <span class="Github">${tempIntern.school}</span></p>
        </div>
        </div>`

    internCards += card
    }
    return internCards
}

module.exports = { createManagerCards, createEngineerCards, createInternCards }