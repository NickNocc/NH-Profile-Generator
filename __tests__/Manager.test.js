const Manager = require('../lib/Manager');

test('Checking if functions work', () => {
    const test = new Manager('John Doe', 9492, "whatever@a.com");

    expect(test.getId()).toEqual(9492);
});

test('Changing role from Employee to Manager', () => {
    const roleSwap = new Manager('John Doe', 9492, "whatever@a.com")

    expect(roleSwap.getRole()).toEqual(expect.stringContaining('Manager'))
});

test('Set an office number for a Manager', () => {
    const offNum = new Manager ('John Doe', 9492, "whatever@a.com", 429696);

    expect(offNum.officeNo).toEqual(429696);
})