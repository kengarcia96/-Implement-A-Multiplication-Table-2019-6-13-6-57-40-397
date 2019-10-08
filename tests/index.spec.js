const validations = require('../index');


it('should compare start and end numbers and returns true where first is less than the second', () =>{
    const startNumber = 2;
	const endNumber = 3;
	const getValidationResult = validations.validate_input_order(startNumber, endNumber);
    expect(getValidationResult).toBe(true);
});

it('should compare start and end numbers and returns false where first is greater than the second', () =>{
    const startNumber = 3;
	const endNumber = 2;
	const getValidationResult = validations.validate_input_order(startNumber, endNumber);
    expect(getValidationResult).toBe(false);
});


it('should check start and end if it is in range from 1 to 1000 and returns true when both are in range', () =>{
    const startNumber = 1;
	const endNumber = 1000;
	const getValidationResult = validations.validate_input_range(startNumber, endNumber);
    expect(getValidationResult).toBe(true);
});

it('should check start and end if it is in range from 1 to 1000 and returns false when one is out of range', () =>{
    const startNumber = 2000;
	const endNumber = 1000;
	const getValidationResult = validations.validate_input_range(startNumber, endNumber);
    expect(getValidationResult).toBe(false);
});

it('should create multiplication table by start and end number as parameters', () =>{
    const startNumber = 2;
	const endNumber = 4;
    const getValidationResult = validations.create_multiplication_table(startNumber, endNumber);
    const output = "2*2=4  \n"+ "2*3=6  3*3=9  \n"+ "2*4=8  3*4=12  4*4=16  \n";
    expect(getValidationResult).toBe(output);
});

it('should return null because one of validations fails', () =>{
    const startNumber = 5000;
	const endNumber = 10;
    const getValidationResult = validations.create_multiplication_table(startNumber, endNumber);
    expect(getValidationResult).toBe(null);
});