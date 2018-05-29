// JavaScript Document


//Running the Gallery
baguetteBox.run('.gallery', {
    animation: 'fadeIn'
});

//Search Bar Code

//Define search and input
const search = document.getElementById("search");
const img = document.querySelectorAll("a[data-caption]");

//Listener
 search.addEventListener("keyup", function(event) {
//Search input
     let result = search.value.toLowerCase();
//Display what is searched
     for (let i = 0; i < img.length; i++){
        let title = img[i].getAttribute("data-caption");
         if (title.toLowerCase().includes(result)) {
             img[i].style.display = '';
//Display nothing if input is wrong
         } else {
              img[i].style.display = 'none';
            
         }
     }
 });