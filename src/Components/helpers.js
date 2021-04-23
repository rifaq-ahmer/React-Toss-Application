function choice(arr) {
	console.log(arr);
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

export { choice };
