

//Criar uma variável auxiliar para o index do array
//Se essa variável tiver  mais que dois valores iguais, deve-se filtrar
//mostrar a quantidade desses números repetidos.

function countDuplicate(numbers) {
   let value = numbers[index]; 
   let duplicate = numbers.filter(value => value === value); //mostrar se há valores iguais
   let qt = duplicate; 
   if (qt > 1) {
       // mostrar a quantidade de vezez que tem esse número
   }
  

  console.log(duplicate);
}

let numbers =[1,2,3,4,1,5,6,7,2,8,9,3,3];

countDuplicate(numbers);