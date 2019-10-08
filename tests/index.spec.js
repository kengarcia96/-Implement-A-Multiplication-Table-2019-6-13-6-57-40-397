const validations = require('../index');


it('should compare two start and end numbers', () =>{
    expect(validations.validate_input_order(2,3)).toBe(true);
});

it('should compare two start and end numbers', () =>{
    expect(validations.validate_input_order(3,2)).toBe(false);
});

it('should check range of two numbers', () =>{
    expect(validations.validate_input_range(1,100)).toBe(true);
});

it('should check range of two numbers', () =>{
    expect(validations.validate_input_range(1500,1)).toBe(false);
});

it('should check range of two numbers', () =>{
    expect(validations.validate_input_range(1500,1500)).toBe(false);
});


