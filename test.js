const { fromYenToPound } = require('./app.js');

test('100 Yen equal 87 Pounds', () => {
    let total = fromYenToPound(100);
    expect(total).toBe(87);
});

const { fromEuroToDollar } = require('./app.js');

test('100 Euro equal 87 Pounds', () => {
    let total = fromEuroToDollar(100);
    expect(total).toBe(107);
});

const { fromDollarToYen } = require('./app.js');

test('100 Dollar equal 87 Yen', () => {
    let total = fromDollarToYen(100);
    expect(total).toBe(15650);
});