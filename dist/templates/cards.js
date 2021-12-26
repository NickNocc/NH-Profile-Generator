function createManagerCards (manager) {
    let managerCards = ``
    for(let i = 0; i < manager.length; i++) {
        let tempMan = manager[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${tempMan.name}</h3>
            <h4 class="type">Manager</h4>
        </div>
        <div class="card-body">
            <p>ID: <span class="ID">${tempMan.id}</span></p>
            <p>Email: <span class="Email"><a href="mailto:${tempMan.email}">${tempMan.email}</a></span></p>
            <p>Office Number: <span class="officeNumber">${tempMan.officeNo}</span></p></div>
    </div>`
    managerCards += card
    }
    return managerCards
}

function createEngineerCards (engineers) {
    let engineerCards = ``
    for(let i = 0; i < engineers.length; i++) {
        let tempEngineer = engineers[i]
        let card = `<div class="card">
        <div class="card-title">
            <h3 class="name">${tempEngineer.name}</h3>
            <h4 class="type">Engineer</h4>
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
            <h4 class="type">Intern</h4>
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