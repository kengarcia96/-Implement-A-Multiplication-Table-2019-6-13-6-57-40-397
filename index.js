function validate_input_order(startNumber, endNumber){
    return (startNumber <= endNumber)
}

function validate_input_range(startNumber, endNumber){
    return ((startNumber > 0 && startNumber <= 1000) && (endNumber > 0 && endNumber <= 1000))
}


function createMultiplyTable(startNumber, endNumber){

    let multiplicationTable = "";

    // evaluate first validations then else logic

    if(validate_input_order(startNumber,endNumber) && validate_input_range(startNumber,endNumber)){
        
        // clear variable namings
        for (let x = startNumber; x <= endNumber; x++){
            for (let y = startNumber; y <= x; y++){
                multiplicationTable += y + '*' + x +'='+ (y*x) +'  ';
            }
            multiplicationTable += '\n';
        }
    }
    else{
        multiplicationTable = null;
    }

    return multiplicationTable;

}

module.exports = {
    validate_input_order: validate_input_order,
    validate_input_range: validate_input_range,
    create_multiplication_table: createMultiplyTable

}