//query selectors
var cookButton = document.querySelector('.lets-cook')
var showFoodArea = document.querySelector('.cookpot-container')
var cookpot = document.querySelector('.cook-pot')
var recipeContainer = document.querySelector('.recipe-container')

//DATA MODEL
var sides = ['Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];
var mainDishes = ['Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'];
var desserts = ['Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'];

//event listeners
cookButton.addEventListener('click', randomFood )
//event handlers

function randomFood(){
  var allFoods ={sides:sides,
    mainDishes:mainDishes,
    desserts:desserts};

  selectedBtn = document.querySelector('input[name="radio-btn"]:checked').value;
  cookpot.classList.add('cook-pot-animate')
  //fadeOutEffect();
  randomItem(allFoods[selectedBtn])
  unfade(addedText);
}

function fadeOutEffect() {

    var fadeEffect = setInterval(function () {
        if (!cookpot.style.opacity) {
            cookpot.style.opacity = 1;
        }
        if (cookpot.style.opacity > 0) {
            cookpot.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 400);
}


function fadeInEffect() {
    var addedText = document.querySelector('.added-text')
    var fadeEffect = setInterval(function () {
        if (!addedText.style.opacity) {
            addedText.style.opacity = 0;
        }
        if (addedText.style.opacity < 1) {
            addedText.style.opacity += 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 400);
}
var addedText = document.querySelector('div')

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 100);
}


function randomItem(food){
  var randomItem = food[Math.floor(Math.random()*food.length)]
  recipeContainer.innerHTML= `<div class = "added-text"><h4> You should make </h4>
                            <h2>${randomItem}</h2></div>`
  }
