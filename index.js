

//Criar uma variável auxiliar para o index do array
//Se essa variável tiver  mais que dois valores iguais, deve-se filtrar
//mostrar a quantidade desses números repetidos.

function countDuplicate(numbers) {
   
   let duplicate1 = numbers.filter(index => index === 1); //mostrar se há valores iguais
   let duplicate2 = numbers.filter(index=> index ===2);
   let duplicate3 = numbers.filter(index=> index ===3);
  /*  let qt = duplicate; 
   if (qt > 1) { */
    
      
  console.log(duplicate1.length);
  console.log(duplicate2.length);
  console.log(duplicate3.length);
  
}

let numbers =[1,2,3,4,1,5,6,7,2,8,9,3,3,1,4,5];

countDuplicate(numbers);
