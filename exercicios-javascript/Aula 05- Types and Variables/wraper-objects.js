// objects are a collection of properties or named values
// we refer to a propertie using object.property
// when the property is a function, we call it a method

//in js we can use methods or properties of primitive types
//when we try to refer to a property of a primitive type, js
// converts the primitive value to an wrapper object
//new String(s), new Number(n).
// the wrapper object is a temporary object, created just to use the 
//property in a String


// when we run the second line, a object is created using new String(nome)
// then used to acess the string length, then discarded
/*> nome = 'mateus'
'mateus'
> nome.length
6
*/

/*
in the second line of the fallowing code, when we run s.len, 
 a object is created, we set its property .len to 4, but then the object is discard
so we cant acess the property we just create

in the third line, s.len is not 4, is undefined, because another object 
was created that dont have the .len property

//var s = "test"; // Start with a string value.
//s.len = 4; // Set a property on it.
//var t = s.len; // Now query the property.
*/


//string, numbers and boolean behave like objects when you try to read the value of
// a property or method from them. but you cant change its properties, any change
//is made on a temporary object and does not persist.


//we can create a wrapper object with the 'new' keyword
// nome = new String('Mateus')
// nome == 'Mateus' --> true
//nome === 'Mateus' --> false
// typeof name --> object

