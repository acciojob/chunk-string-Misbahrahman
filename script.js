function stringChop(str, size) {
	let arr = [];
   let i = 0;
	
	while(i < str.length){
		let s = "";
		let j = 0;
		while(j < size && j < str.length){
			s += str.charAt(i);
			j++;
			i++;
		}
		arr.push(s);
		
	}

	return arr;
}

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
