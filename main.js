function logBase2(x ){
	if (x === 1){
		return 0;
	}
	else{
		return  1 + logBase2(x/2);
	}

}

console.log(logBase2(32));

// function logBase2(x){
// 	return Math.pow(x, 2);
// }

