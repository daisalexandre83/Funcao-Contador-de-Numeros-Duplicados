//Verificar se há valores iguais e filtrá-los
//mostrar a quantidade desses números repetidos.

function countDuplicate(numbers) {
   let duplicate1 = numbers.filter(index => index === 1); 
   let duplicate2 = numbers.filter(index=> index ===2);
   let duplicate3 = numbers.filter(index=> index ===3);

   console.log(` A quantidade do número 1 é: ${duplicate1.length}`);
   console.log(` A quantidade do número 2 é: ${duplicate2.length}`);
   console.log(` A quantidade do número 3 é: ${duplicate3.length}`);
   
}

let numbers =[1,2,3,4,1,5,6,7,2,8,9,3,3,1,4,5];

countDuplicate(numbers);
