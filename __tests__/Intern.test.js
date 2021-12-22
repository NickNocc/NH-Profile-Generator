const Intern = require("../lib/Intern");

test("Checks an interns current school", () => {
    const schooly = new Intern('John Doe', 6490, 'fakemail@aol.com', "UCLA");

    expect(schooly.school).toEqual(expect.stringContaining("UCLA"));
});

test("Returns an interns current school", () => {
    const school = new Intern('John Doe', 6490, 'fakemail@aol.com', "UCLA");

    expect(school.getSchool()).toEqual(expect.stringContaining("UCLA"));
});

test('Changing role from Employee to Intern', () => {
    const roleSwap = new Intern('John Doe', 6490, 'fakemail@aol.com', "UCLA");

    expect(roleSwap.getRole()).toEqual(expect.stringContaining('Intern'))
});