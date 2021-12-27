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
                <div class="manager-cards">
                    ${managerDeck}
                </div>
 
                <div class="engineer-cards">
                    ${engineerDeck}
                </div>
                <div class="intern-cards">
                    ${internDeck}
                </div>
            </div>
        </main>
    </body>
    </html>`
    return htmlTemplate
}

module.exports = createHtml