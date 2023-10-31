const likes = {
  "01.07.2020": { likes: 80, dislikes: 30 },
  "02.07.2020": { likes: 140, dislikes: 90 },
  "03.07.2020": { likes: 40, dislikes: 20 },
  "04.07.2020": { likes: 20, dislikes: 30 },
  "05.07.2020": { likes: 190, dislikes: 60 },
  "06.07.2020": { likes: 80, dislikes: 30 },
  "07.07.2020": { likes: 140, dislikes: 90 },
  "08.07.2020": { likes: 40, dislikes: 20 },
  "09.07.2020": { likes: 20, dislikes: 30 },
  "10.07.2020": { likes: 190, dislikes: 60 },
};

// напишіть функцію що рахує суму всіх дат (перші два числа) об`єкта likes 
// 01 + 02 + 03..+ 09 + 10 = 55

function dateSum(likes){
  let sum = 0;
  for(key in likes){
    sum += parseInt(key.slice(0,2))
  }
  return sum;
}

console.log(dateSum(likes))