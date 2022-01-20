/*
JS-05 Conditions and Expressions

Exercise #1
You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]

------------------------------------------------------------------------------------------------
Part 1
Write a function to insert a name to the end of the list. Add your own name to the end of the list.*/

var names = ["Maria", "Antony", "Joy", "Juan"];

function agregar(){
    var owname = prompt("¿Cual es tu nombre?")
    names.push(owname);
    alert(names);
}
//agregar();

/*------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
Part 2
Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.*/

function checkname(){
    var check=false;
    let nombre = prompt("¿Que nombre quieres buscar?");
    for(let i=0;i<=nombre.length;i++){
    if(nombre==names[i]){
       check=true;
       }
    }
    alert(names);
    alert("Existe el nombre en la lista? " + check);
}
//checkname();

//--------------------------------------------------------------------------------------------

/*----------------------------------------------------------------------------------------------
Part 3
Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.
------------------------------------------------------------------------------------------------/*/

function matriz(){
    var names2 = ["Karen", "Omar", "Antony", "Joy","Juan"];
    var matriz1=[];
    var contador=0;
    for(let j=0;j<names.length;j++){
        names[j];
        for(let u=0;u<names2.length;u++){
        if(names2[u]==names[j]){
            matriz1[contador]=names2[u];
            contador++;
        }
      }
    }
    alert(matriz1);
}
//matriz();

/*----------------------------------------------------------------------------------------------------------
Part 4
Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function
----------------------------------------------------------------------------------------------------------*/

function listInt(){
    var longitud=[];
    for(let i=0;i<names.length;i++){
        longitud.push(names[i].length);
    }
    alert(names);
    alert(longitud);
}
//listInt();

/*-------------------------------------------------------------------------------------------------------------
Exercise #2
What do the following expressions evaluate to?

false || (true && false);
true || (11 + 12);
(31 + 22) || true;
true && (1 + 7);
false && (3 + 4);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (887 == '887');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

--------------------------------------------------------------------------------------------------*/



/*---------------------------------------------------------------------------------------------------
Exercise #3
Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'
--------------------------------------------------------------------------------------------------*/

var num = parseInt(prompt("Dame un numero "));

function compare(){
    if (num > 100){
        alert("Tu numero es mas grande que 100");
    }else if(num >= 26 && num <= 100){
        alert("Tu numero esta entre 26 y 100");
    }else if(num >= 0 && num <= 25){
        alert("Tu numero esta entre 0 y 25");
    }else
    alert("Tu numero es menor a 0")
}
//compare();