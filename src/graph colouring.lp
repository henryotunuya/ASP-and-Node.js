 % Define a constant
 #const n = 3.

 % Generate atoms for colour
 { colour(X, 1..n) } = 1 :- point(X).
 % Testing answer sets
 :- link(X,Y), colour(X,C), colour(Y,C).

 % Points
 point(1..6).
 % (Directed links)
 link(1,(2;3;4)). link(2,(4;5;6)). link(3,(1;4;5)).
 link(4,(1;2)).  link(5,(3;4;6)). link(6,(2;3;5)).

 % Output
 #show colour/2.