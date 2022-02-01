const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back3 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit");

const progress = document.getElementById("progress");
const message = document.getElementById("message");
const amountDue = document.getElementById("amount-due");

const entreeOptions = document.getElementById("entree");
const sideOptions1 = document.getElementById("side1");
const sideOptions2 = document.getElementById("side2");

let total = 0; 

function randomMessage() {
  let randomChoices = ["Sounds delicious! Enjoy!", "I hope you enjoy your meal!", "Great choices! Don't forget to check out our other menus!"];
  let randomChoice = randomChoices[Math.floor(Math.random() * randomChoices.length)];
  return randomChoice;
}

function generateMealTotal() {
  if (entreeOptions.value === "pancakes") {
    total += 5.99;
  } 
  else if (entreeOptions.value === "frenchtoast") {
    total += 6.99;
  }
  else if (entreeOptions.value === "sandwich") {
    total += 8.99;
  }
  else if (entreeOptions.value === "eggs") {
    total += 4.99;
  }
  else if (entreeOptions.value === "steak") {
    total += 12.99;
  } 
  else if (entreeOptions.value === "tenders") {
    total += 8.99;
  }
  else if (entreeOptions.value === "club") {
    total += 7.99;
  }
  else if (entreeOptions.value === "burger") {
    total += 10.50;
  }
  else if (entreeOptions.value === "steak2") {
    total += 12.99;
  } 
  else if (entreeOptions.value === "tenders2") {
    total += 8.99;
  }
  else if (entreeOptions.value === "club2") {
    total += 7.99;
  }
  else if (entreeOptions.value === "burger2") {
    total += 10.50;
  }
  
  if (sideOptions1.value === "sausage") {
    total += 2.99;
  } 
  else if (sideOptions1.value === "bacon") {
    total += 1.99;
  }
  else if (sideOptions1.value === "fruit") {
    total += 3.99;
  }
  else if (sideOptions1.value === "muffin") {
    total += 4.50
  }
  else if (sideOptions1.value === "potatoes") {
    total += 2.99;
  } 
  else if (sideOptions1.value === "veg") {
    total += 1.99;
  }
  else if (sideOptions1.value === "fries") {
    total += 3.99;
  }
  else if (sideOptions1.value === "salad") {
    total += 4.50
  }
  else if (sideOptions1.value === "potatoes2") {
    total += 2.99;
  } 
  else if (sideOptions1.value === "veg2") {
    total += 1.99;
  }
  else if (sideOptions1.value === "fries2") {
    total += 3.99;
  }
  else if (sideOptions1.value === "salad2") {
    total += 4.50
  }

  if (sideOptions2.value === "sausage") {
    total += 2.99;
  } 
  else if (sideOptions2.value === "bacon") {
    total += 1.99;
  }
  else if (sideOptions2.value === "fruit") {
    total += 3.99;
  }
  else if (sideOptions2.value === "muffin") {
    total += 4.50
  }
  else if (sideOptions2.value === "potatoes") {
    total += 2.99;
  } 
  else if (sideOptions2.value === "veg") {
    total += 1.99;
  }
  else if (sideOptions2.value === "fries") {
    total += 3.99;
  }
  else if (sideOptions2.value === "salad") {
    total += 4.50
  }
  else if (sideOptions2.value === "potatoes2") {
    total += 2.99;
  } 
  else if (sideOptions2.value === "veg2") {
    total += 1.99;
  }
  else if (sideOptions2.value === "fries2") {
    total += 3.99;
  }
  else if (sideOptions2.value === "salad2") {
    total += 4.50
  }

  return total;
}


next1.onclick = function(){
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
}

back1.onclick = function(){
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
}

submit.onclick = function(){
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
  generateMealTotal();
  message.innerHTML = randomMessage();
  amountDue.innerHTML = "Your total today is $" + total;
}

back2.onclick = function(){
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
}

next2.onclick = function(){
  form3.style.left = "-450px";
  form1.style.left = "40px";
  progress.style.width = "120px";
}