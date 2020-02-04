



//var lifeEvents = ["firstPet", "karate", "freshman", "sophomore", "junior", "senior"];

var cardOne = {
title:"My First Pet",
class:"petClass",
description:"I was very excited Swhen I got my first pet! He was a beta fish that I named Porkchop. I really enjoyed having him as he was very colorful. He lived for a long time in a small bowl." ,
image: "https://www.petstock.com.au/images/cache/product_zoom/images/products/5c3436f78db004.67892987.jpeg" 
    
};


function displayPet(){

    var container = document.querySelector("#container1");
    var title = document.createElement("h3"); 
    var petImage = document.createElement("img"); 
    var description = document.createElement("p"); 

    description.innerHTML = cardOne.description; 
    petImage.src = cardOne.image; 
    title.innerHTML = cardOne.title; 

    description.className = "descriptionClass1"; 
    petImage.className = "imageClass1";
    title.className = "titleClass1";
    
    container.appendChild(petImage); 
    container.appendChild(title);
    container.appendChild(description);

};

//end card one------------------------------------------

var cardTwo = {
    title:"Karate Practice",
    class:"karateClass",
    description:"I took karate as  kid. I remember really enjoying the rush I got from moving my body. It felt like an open space where I could be myself.",
    image: "https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2019/05/dnsdndfjklh_0.jpg?itok=224hLLQu" 
        
};
    
    
    function displayKarate(){
    
        var container = document.querySelector("#container2");
        var title = document.createElement("h3"); 
        var karateImage = document.createElement("img"); 
        var description = document.createElement("p"); 
    
        description.innerHTML = cardTwo.description; 
        karateImage.src = cardTwo.image; 
        title.innerHTML = cardTwo.title; 
    
        description.className = "descriptionClass2"; 
        karateImage.className = "imageClass2";
        title.className = "titleClass2";
        
        container.appendChild(karateImage); 
        container.appendChild(title);
        container.appendChild(description); 
         
    };

//end card two--------------------------------------------



var cardThree = {
    title:"Freshman Year",
    class:"freshmanClass",
    description:"The begining of freshman year was exciting! The routine of foundation year was exciting and helped me nurture my ideas. It was a greate experiance and I grew from all the new experiances",
    image: "https://cdn.shopify.com/s/files/1/1989/7529/products/CHARCOAL_GLAM_800x.jpg?v=1556057799" 
        
};

function displayFreshman(){
    
    var container = document.querySelector("#container3");
    var title = document.createElement("h3"); 
    var freshmanImage = document.createElement("img"); 
    var description = document.createElement("p"); 

    description.innerHTML = cardThree.description; 
    freshmanImage.src = cardThree.image; 
    title.innerHTML = cardThree.title; 

    description.className = "descriptionClass3"; 
    freshmanImage.className = "imageClass3";
    title.className = "titleClass3";
    
    container.appendChild(freshmanImage); 
    container.appendChild(title);
    container.appendChild(description); 
     
};

//end card three--------------------------------

var cardFour = {
    title:"Sophomore Year",
    class:"sophomoreClass",
    description:"Sophomore year was a fun change. I was able to focus more on my interstes. I made many new friends along the way, as well as getting to know my professors better.",
    image: "https://images-na.ssl-images-amazon.com/images/I/61y9PRPth0L._SL1009_.jpg" 
        
};

function displaySophomore(){
    
    var container = document.querySelector("#container4");
    var title = document.createElement("h3"); 
    var sophomoreImage = document.createElement("img"); 
    var description = document.createElement("p"); 

    description.innerHTML = cardFour.description; 
    sophomoreImage.src = cardFour.image; 
    title.innerHTML = cardFour.title; 

    description.className = "descriptionClass4"; 
    sophomoreImage.className = "imageClass4";
    title.className = "titleClass4";
    
    container.appendChild(sophomoreImage); 
    container.appendChild(title);
    container.appendChild(description); 
     
};

//end card four-------------------------

var cardFive = {
    title:"Junior Year",
    class:"juniorClass",
    description:" In my junior year at RISD I was able to really purusre my interests. I still tried out many different ideas",
    image: "http://sauze.english.free.fr/IMG/jpg/triple3.jpg" 
        
};

function displayJunior(){
    
    var container = document.querySelector("#container5");
    var title = document.createElement("h3"); 
    var juniorImage = document.createElement("img"); 
    var description = document.createElement("p"); 

    description.innerHTML = cardFive.description; 
    juniorImage.src = cardFive.image; 
    title.innerHTML = cardFive.title; 

    description.className = "descriptionClass5"; 
    juniorImage.className = "imageClass5";
    title.className = "titleClass5";
    
    container.appendChild(juniorImage); 
    container.appendChild(title);
    container.appendChild(description); 
     
};

//end card five--------------------------------

var cardSix = {
    title:"Senior Year",
    class:"seniorClass",
    description:"Senior has been so exciting! While I have discovered new interests, I am still pursuing my old techniques that I love to do! With graduation soon I am excited to start the next chapter in my life.",
    image: "http://sauze.english.free.fr/IMG/jpg/triple3.jpg" 
        
};

function displaySenior(){
    
    var container = document.querySelector("#container6");
    var title = document.createElement("h3"); 
    var seniorImage = document.createElement("img"); 
    var description = document.createElement("p"); 

    description.innerHTML = cardSix.description; 
    seniorImage.src = cardSix.image; 
    title.innerHTML = cardSix.title; 

    description.className = "descriptionClass6"; 
    seniorImage.className = "imageClass6";
    title.className = "titleClass6";
    
    container.appendChild(seniorImage); 
    container.appendChild(title);
    container.appendChild(description); 
     
};

//end card six-------------------------------