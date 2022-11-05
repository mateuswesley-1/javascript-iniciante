/* primitives */

// primitives types are all imutable
// even strings
// when we try to change a string, a copy is made

// primitives are comparable by value
//strings are the same if they length is equal, and every 
// character in each index is the same


/* objects */
// objects are mutable
// two objects are not equal even if they 
// have the same values and the same length

/*
> a = [1, 2, 3]
[ 1, 2, 3 ]
> b = [1, 2, 3]
[ 1, 2, 3 ]
> a == b
false
> a == [1, 2, 3]
false
*/

// objects are called reference types
// two objects are the same if they refer to the same underlying object

/*> 
> a = [1, 2, 3]
[ 1, 2, 3 ]
> b = [1, 2, 3]
[ 1, 2, 3 ]
> a == b
false
> a = b
[ 1, 2, 3 ]
> a == b
true
> a === b
true
> a[0] = 'mateus'
'mateus'
> b
[ 'mateus', 2, 3 ]
*/


/* making a copy of a object*/
/*
a = [1, 2, 3];
b = [];

for(i = 0, i<a.length, i++){
    b[i] = a[i];
}
*/
/* comparing two distinct objects */
/*
function equalArrays(a, b){
    if (a.length != b.length) return false;
    for(i=0, i<a.length, i++);{
        if (a[i] != b[i]) return false;
    return true;
    }
}
*/