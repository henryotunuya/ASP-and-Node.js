const clingo = require("clingo-wasm");
const fs = require('fs');

fs.readFile("graph colouring.lp", "utf8", (err, program) =>{

clingo.run(program, 0).then(
stablemodel => {
	for (let i in stablemodel.Call[0].Witnesses){
		console.log(stablemodel.Call[0].Witnesses[i].Value);
	}
});
});