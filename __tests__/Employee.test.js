const Employee = require('../lib/Employee');

test('Gets an employee`s name', () => {
    const newHire = new Employee('John Doe');

    expect(newHire.name).toEqual(expect.stringContaining('John Doe'));
});

test('Sets an employee`s id number', () => {
    const setId = new Employee('John Doe', 6969420);


    expect(setId.id).toEqual(6969420)
});

test('Sets an employee`s email', () => {
    const setEmail = new Employee('John Doe', 6490, 'fakemail@aol.com')

    expect(setEmail.email).toEqual(expect.stringContaining('fakemail@aol.com'));
})

test('Returns an employee`s name', () => {
    const nameGet = new Employee('John Doe', 9492, "whatever@a.com");

    expect(nameGet.getName()).toEqual(expect.stringContaining("John Doe"));
});

test(`Returns an employee's id`, () => {
    const idGetter = new Employee('John Doe', 9492, "whatever@a.com");

    expect(idGetter.getId()).toEqual(9492);
});

test(`Returns an emloyee's email`, () => {
    const emailGetter = new Employee('John Doe', 9492, "whatever@a.com");

    expect(emailGetter.getEmail()).toEqual(expect.stringContaining('whatever@a.com'));
})

test(`Returns an employee's role`, () => {
    const roleGet = new Employee('John Doe', 9492, "whatever@a.com");

    expect(roleGet.getRole()).toEqual(expect.stringContaining('Employee'));
})