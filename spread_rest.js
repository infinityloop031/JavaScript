// Spread Operator

const numbers = [1, 2, 3, 4]

const numbers_with_spread = [...numbers, 5, 6]

const numbers_without_spread = [numbers, 5, 6]

console.log(numbers_with_spread)

console.log(numbers_without_spread)

const n=[6,9,8,...numbers]
console.log(n);


const human = {
    name : "Kedar"
  }
  
  const human_age_with_spread = {
    ...human,
    age : '24'
  }
  
  const human_age_without_spread = {
    human,
    age : '24'
  }
  
  
  console.log(human_age_with_spread)
  console.log(human_age_without_spread)

  // Rest Operator

  