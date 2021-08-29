const searchde=()=>{
    const inputbox=document.getElementById('search-box');
    const inputText= inputbox.value;
    
    inputbox.value= '';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
    .then(res=>res.json())
    .then(item=>getMeal(item))

}
const getMeal=getitem=>{
    // console.log(getitem.meals);
    const getItemfood=getitem.meals;
    const container=document.getElementById('container-div');
    
    getItemfood.forEach(food => {
    // console.log(food.strMeal);
    const div= document.createElement('div');
    div.style.border='1px solid black'
    div.innerHTML=`
    <img class='img-fluid align-center' src="${food.strMealThumb}">
    <h4>${food.strMeal}</h4>
    <p>${food.strInstructions.slice(0,120)}
    
    
    `
    container.appendChild(div);

    });
}