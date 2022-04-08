//ELEMENTI DEL DOM
const userNameInput = document.getElementById ('user-name');
const distanceInput = document.getElementById ('distance');
const userAgeInput = document.getElementById ('user-age');
const generateBtn = document.getElementById ('generate-btn');
const clearBtn = document.getElementById ('clear-btn');
const ticket = document.querySelector('.wrapper');

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
  let discountType = 'Biglietto Standard';
  console.log(price);

  // Calcolare lo sconto

  if (userAge === 'under-age') {
      discount = price * 0.2
      discountType = 'Ridotto Minorenni';
  } else if (userAge === 'over') {
      discount = price * 0.4
      discountType = 'Ridotto Over 65';
  }

  price = price - discount;
  console.log(price);

  //inserire le informazione nel biglietto
  const userNameDisplay = document.getElementById('user-name-display');
  const discountDisplay = document.getElementById('discount');
  const vanDisplay = document.getElementById('van');
  const codeDisplay = document.getElementById('code');
  const priceDisplay = document.getElementById('price');

  userNameDisplay.innerHTML = userName;
  discountDisplay.innerHTML = discountType;
  priceDisplay.innerHTML = '€' + price.toFixed(2);

  //generare numero carrozza e codice cp
  const vanNumber = Math.floor(Math.random() * 12 + 1);
  vanDisplay.innerHTML = vanNumber;

  const codeCp = Math.floor(Math.random() * (99999 - 90000) + 90000);
  codeDisplay.innerHTML = codeCp;

  //mostrare il biglietto
  ticket.classList.remove('d-none');
});