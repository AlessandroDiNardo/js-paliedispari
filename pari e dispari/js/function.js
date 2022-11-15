// funzione pari dispari
function pariDispari(num1, num2) {
   
    userNum = num1;
    pcNum = num2;
    
    const somma = num1 + num2;

    // controllo numero user
    if(num1 % 2 === 0) {
        console.log("numero pari", num1);
    }else{
        console.log("numero dispari", num1);
    }

    // controllo numero pc
    if(num2 % 2 === 0) {
        console.log("numero pari", num2);
    }else{
        console.log("numero dispari" , num2);
    }

    return somma;
}