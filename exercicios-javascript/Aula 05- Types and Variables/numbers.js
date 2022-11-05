//JS does not make a distinction between integer and floating values

//64bit floating-point format IEEE 754 standard
//can represent numbers between +-5*10^(-324) and 1.798*10^(308)

//We can exactly represent all integers between -2e53 and 2e53

/*        integer literals         */
// when a number appears directly in a js program, its called a numeric literal

/*            float literals       */
// can have decimal point digit.digit
//or
// [digitis.digits][(E/e)(+/-)digits]

/* Arithmetic */
// in addition to the basic arithmetic operatos, js supports more comples
// mathematical operations through a set of functions and contants defined
// as properties of the Math object

// undefinec operations like 1/0 or 1/2e855 does not arise error.
// instead returns infinity or 0. 0/0 or infity/infinity arises NaN value

// NaN == NaN awayes return false, so if you want to check if a value is NaN
// you have to do value != value, it arises true only if value is NaN.


/*       Binary Floating-Point and Rounding Errors          */
// Only a finite real numbers can be exactily represented in JS
// binary representation can onmly represent fractions like 1/2^n
// normaly the values are close enothy, the problems arises when we attempt to compare values for equality

