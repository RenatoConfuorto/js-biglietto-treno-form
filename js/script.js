//ELEMENTI DEL DOM
const userNameInput = document.getElementById ('user-name');
const distanceInput = document.getElementById ('distance');
const userAgeInput = document.getElementById ('user-age');
const generateBtn = document.getElementById ('generate-btn');
const clearBtn = document.getElementById ('clear-btn');

// console.log(userName, distance, userAge, generateBtn, clearBtn);

generateBtn.addEventListener('click', function(){
  //raccogliere i dati dell'utente
  const userName = userNameInput.value;
  console.log(userName);
  const distance = parseInt(distanceInput.value);
  console.log(distance, typeof(distance));
  const userAge = userAgeInput.value;
  console.log(userAge);

  //constrollare se i dati sono corretti
  if(userName === '' || isNaN(distance)){
    alert('Inserire dati corretti');
    return;
  }

  //calcolare il prezzo
  let price = distance * 0.21;
  let discount = 0;
  console.log(price);

  // Calcolare lo sconto

  if (userAge === 'under-age') {
      discount = price * 0.2
  } else if (userAge === 'over') {
      discount = price * 0.4
  }

  price = price - discount;
  console.log(price);
});