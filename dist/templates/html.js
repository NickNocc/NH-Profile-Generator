function createHtml(managerDeck, engineerDeck, internDeck) {
    const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./dist/css/style.css">
    </head>
    <body>
        <nav>
            <h1>The Team</h1>
        </nav>
        <main>
            <div class="employees">
                <div class="manager">
                <div class="manager-card">
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    ${managerDeck}
                </div>
            </div>
                <div class="engineers">

                    <div class="engineer-cards">
                        ${engineerDeck}
                    </div>
                </div>
                <div class="interns">

                    <div class="intern-cards">
                        ${internDeck}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>`
    return htmlTemplate
}

module.exports = createHtml