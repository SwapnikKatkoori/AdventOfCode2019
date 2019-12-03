
function compute(noun,verb)
{
	var input = [1,noun,verb,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0]

	var op_code_spot = 0

	while (op_code_spot < input.length)
	{
		var op_code = input[op_code_spot]
		if(op_code == 1) {
		  input[input[op_code_spot+3]] = input[input[op_code_spot+1]] + input[input[op_code_spot+2]]
		}
		else if(op_code == 2){
			input[input[op_code_spot+3]] = input[input[op_code_spot+1]] * input[input[op_code_spot+2]]
		}
		else if(op_code == 99){
			break
		}

		op_code_spot += 4
	}

	return input[0]
}
	

for (var i = 0; i <= 100; i++){
	for (var x = 0; x <= 100; x++){
		if (compute(i, x) === 19690720)
		{
			console.log(100 * i + x)
		}
	}
}
	
