let menu = [
    "Panner Palak" , "Soya katori" , "Monster" , "redbull" , "Diet Coke" , "Sprite",
    "Milk" , "Shake" , "Reddit" , "Absurdism"
]

function isVeg (food){
  if((food.toLowerCase().indexOf("Chicken") !== -1) || food.toLowerCase().indexOf("egg") !== -1){
      return false ; 
  }
    return true ; 
}
let vegMenu = menu.filter(isVeg) ; 
console.log(menu)
console.log(vegMenu)
menu.filter(isveg)