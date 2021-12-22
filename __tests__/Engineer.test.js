const Engineer = require('../lib/Engineer');

test("Sets github account", () => {
    const hubby = new Engineer('John Doe', 9492, "whatever@a.com", "NickNocc");

    expect(hubby.gitHub).toEqual(expect.stringContaining("NickNocc"));
})

test("Returns github account", () => {
    const huby = new Engineer('John Doe', 9492, "whatever@a.com", "NickNocc");

    expect(huby.getGitHub()).toEqual(expect.stringContaining('NickNocc'));
})

test("Retuns engineer role", () => {
    const rolly = new Engineer('John Doe', 9492, "whatever@a.com", "NickNocc");

    expect(rolly.getRole()).toEqual(expect.stringContaining("Engineer"));
})