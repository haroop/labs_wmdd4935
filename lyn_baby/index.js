let stringlength = process.argv.length;
let total = 0;
for (var i = 2; i < stringlength; i++) {
	//console.log(process.argv[i])
    total = total + Number(process.argv[i]);
}
console.log(total);