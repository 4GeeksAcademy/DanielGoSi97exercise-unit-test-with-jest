const { fromYenToPound } = require('./app.js');

test('100 Yen equal 0.56 Pounds', () => {
    let total = fromYenToPound(100);
    expect(total).toBeCloseTo(0.56, 2);
});

const { fromEuroToDollar } = require('./app.js');

test('100 Euros equal 107 Dollars', () => {
    let total = fromEuroToDollar(100);
    expect(total).toBeCloseTo(107, 2);
});

const { fromDollarToYen } = require('./app.js');

test('100 Dollars equal 14626.17 Yen', () => {
    let total = fromDollarToYen(100);
    expect(total).toBeCloseTo(14626.17, 2);
});