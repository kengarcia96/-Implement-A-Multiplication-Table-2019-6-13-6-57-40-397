function validate_input_order(startNumber, endNumber){

    if (startNumber < endNumber){
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


function createMultiplyTable(startNumber,endNumber){

    let multiplicationTable;

    if(validate_input_order == true && validate_input_order == true){

        for (let x = 0; x < startNumber; x++){
            
            multiplicationTable = x +'x';

            for (let y = 0; y < startNumber; y++){
                multiplicationTable += y 
            }
            

        }


    }


}

module.exports = {
    validate_input_order: validate_input_order,
    validate_input_range: validate_input_range

}