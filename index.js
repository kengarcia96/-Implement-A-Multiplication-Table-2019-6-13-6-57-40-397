function validate_input_order(startNumber, endNumber){

    if (startNumber <= endNumber){
        return true;
    }

    else{

        return false;
    }

}

function validate_input_range(startNumber, endNumber){

    if ((startNumber > 0 && startNumber <= 1000) && (endNumber > 0 && endNumber <= 1000)){
        return true;
    }

    else{ 
        return false;
    }

}


function createMultiplyTable(startNumber, endNumber){

    let multiplicationTable = "";

    if(validate_input_order(startNumber,endNumber) == true && validate_input_order(startNumber,endNumber) == true){
        for (let x = startNumber; x <= endNumber; x++){
            for (let y = startNumber; y <= x; y++){
                multiplicationTable += y + '*' + x +'='+ (y*x) +'  ';
            }
            multiplicationTable += '\n';
        }

        return multiplicationTable;
    }

}

module.exports = {
    validate_input_order: validate_input_order,
    validate_input_range: validate_input_range,
    create_multiplication_table: createMultiplyTable

}