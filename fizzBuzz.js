//Write a program that counts from 1 to 50 in fizzbuzz fashion.
for (i = 1; i < 50; i++) {
    if (i % 15 == 0) console.log('fizzBuzz')
    else if (i % 3 == 0) console.log('fizz');
    else if (i % 5 == 0) console.log('buzz');     
    else console.log(i); 
}