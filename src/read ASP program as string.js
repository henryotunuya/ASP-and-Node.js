const clingo = require("clingo-wasm");

var program = ` % Define a constant
#const n = 3.
% Generates atoms for colour
{ colour(X,1..n) } = 1 :- point(X).
% Testing answer sets
:- link(X,Y), colour(X,C), colour(Y,C).
% Points
point(1..6).
% (Directed lines)
link(1,(2;3;4)). link(2,(4;5;6)). link(3,(1;4;5)).
link(4,(1;2)). link(5,(3;4;6)). Link(6,(2;3;5)).

% Output
#show colour/2.`;

clingo.run(program, 0).then(
stablemodel => {
	for (let i in stablemodel.Call[0].Witnesses){
		console.log(stablemodel.Call[0].Witnesses[i].Value);
	}
});