


 var photoContainer = document.querySelector("#photo"); 

var container2 = document.querySelector("#container2");
var welcome = document.querySelector("#welcome"); 


var photo = {
image1: "profilePhotos/b3_ver2.jpg", 
image2: "profilePhotos/b1_ver2.jpg",
image3: "profilePhotos/b2_ver2.jpg", 
image4: "profilePhotos/b4_ver2.jpg", 
image5: "profilePhotos/b5_ver2.jpg" , 
image6: "profilePhotos/b6_ver.jpg" , 
image7: "profilePhotos/b7_ver2.jpg" , 
image8: "profilePhotos/b8_ver2.jpg", 

};


var projectPhotos = {
image1: "projectPhotos/project_1.jpg", 
image2: "projectPhotos/project_2.jpg",
image3: "projectPhotos/project_3.jpg",
image4: "projectPhotos/project_4.jpg", 
image5: "projectPhotos/project_5.jpg", 
image6: "projectPhotos/project_6.jpg",
image7: "projectPhotos/project_7.jpg",

};

function changePhoto(){

}; 



function firstFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "red"; 
    // projectImage.style.opacity = "20%"; 

    // container2.appendChild(projectImage);

    projectPhoto1 = document.createElement("img"); 
    projectPhoto1.style.width = "54%"; 
    projectPhoto1.style.height = "80%";
    projectPhoto1.style.padding = "0"; 
    projectPhoto1.style.zindex = "2"; 
    projectPhoto1.src = projectPhotos.image1; 

    container2.appendChild(projectPhoto1); 

    photo1 = document.createElement("img");  
    photo1.style.width ="100%";
    photo1.style.height = "100%";
    photo1.style.padding ="0";
    photo1.style.position = "relative"; 
    photo1.src = photo.image1;

    photoContainer.appendChild(photo1); 
};

function removePhoto(){
    photoContainer.removeChild(photo1);
};



function removeFunction(){

    // container2.removeChild(projectImage);
    container2.removeChild(projectPhoto1); 

}


function secondFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "blue"; 

    // container2.appendChild(projectImage);

    projectPhoto2 = document.createElement("img"); 
    projectPhoto2.style.width = "46%"; 
    projectPhoto2.style.height = "80%";
    projectPhoto2.style.padding = "0"; 
    projectPhoto2.style.zindex = "2"; 
    projectPhoto2.src = projectPhotos.image2; 

    container2.appendChild(projectPhoto2); 

    photo2 = document.createElement("img");  
    photo2.style.width ="100%";
    photo2.style.height = "100%";
    photo2.style.padding = "0"; 
    photo2.style.position = "relative"; 
    photo2.src = photo.image2;

    photoContainer.appendChild(photo2); 

};
function removePhoto2(){
    photoContainer.removeChild(photo2);
};

function removeFunction2(){

    // container2.removeChild(projectImage);
    container2.removeChild(projectPhoto2);
};

function thirdFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "green"; 

    // container2.appendChild(projectImage);

    projectPhoto3 = document.createElement("img"); 
    projectPhoto3.style.width = "90%"; 
    projectPhoto3.style.height = "80%";
    projectPhoto3.style.padding = "0"; 
    projectPhoto3.style.zindex = "2"; 
    projectPhoto3.src = projectPhotos.image3; 

    container2.appendChild(projectPhoto3); 

    photo3 = document.createElement("img");  
    photo3.style.width ="100%";
    photo3.style.height = "100%";
    photo3.style.padding = "0"; 
    photo3.style.position = "relative"; 
    photo3.src = photo.image3;

    photoContainer.appendChild(photo3); 
};
function removePhoto3(){
    photoContainer.removeChild(photo3);
};


function removeFunction3(){
    container2.removeChild(projectPhoto3);
};



function fourthFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "yellow"; 

    projectPhoto4 = document.createElement("img"); 
    projectPhoto4.style.width = "75%"; 
    projectPhoto4.style.height = "80%";
    projectPhoto4.style.padding = "0"; 
    projectPhoto4.style.zindex = "2"; 
    projectPhoto4.src = projectPhotos.image4; 

    container2.appendChild(projectPhoto4); 

    photo4 = document.createElement("img");  
    photo4.style.width ="100%";
    photo4.style.height = "100%";
    photo4.style.padding = "0"; 
    photo4.style.position = "relative"; 
    photo4.src = photo.image4;

    photoContainer.appendChild(photo4);
};

function removePhoto4(){
    photoContainer.removeChild(photo4);
};

function removeFunction4(){
    container2.removeChild(projectPhoto4);
};

function fifthFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "pink"; 

    // container2.appendChild(projectImage);

    projectPhoto5 = document.createElement("img"); 
    projectPhoto5.style.width = "85%"; 
    projectPhoto5.style.height = "80%";
    projectPhoto5.style.padding = "0"; 
    projectPhoto5.style.zindex = "2"; 
    projectPhoto5.src = projectPhotos.image5; 

    container2.appendChild(projectPhoto5); 

    photo5 = document.createElement("img");  
    photo5.style.width ="100%";
    photo5.style.height = "100%";
    photo5.style.padding = "0"; 
    photo5.style.position = "relative"; 
    photo5.src = photo.image5;

    photoContainer.appendChild(photo5);
};

function removePhoto5(){
    photoContainer.removeChild(photo5);
};
function removeFunction5(){
    container2.removeChild(projectPhoto5);
};


// var images = {
//     first: "./ssss",
//     second:
//  }
// // document.querySelector("#sdadd").src = images.first

function sixthFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "purple"; 

    // container2.appendChild(projectImage);

    projectPhoto6 = document.createElement("img"); 
    projectPhoto6.style.width = "60%"; 
    projectPhoto6.style.height = "80%";
    projectPhoto6.style.padding = "0"; 
    projectPhoto6.style.zindex = "2"; 
    projectPhoto6.src = projectPhotos.image6; 

    container2.appendChild(projectPhoto6); 

    photo6 = document.createElement("img");  
    photo6.style.width ="100%";
    photo6.style.height = "100%";
    photo6.style.padding = "0"; 
    photo6.style.position = "relative"; 
    photo6.src = photo.image6;

    photoContainer.appendChild(photo6);
};

function removePhoto6(){
    photoContainer.removeChild(photo6);
};

function removeFunction6(){
    container2.removeChild(projectPhoto6);
};


function seventhFunction(){

    // projectImage = document.createElement("div"); 
    // projectImage.style.width = "100%"; 
    // projectImage.style.height = "100%"; 
    // projectImage.style.backgroundColor = "teal"; 

    // container2.appendChild(projectImage);

    projectPhoto7 = document.createElement("img"); 
    projectPhoto7.style.width = "90%"; 
    projectPhoto7.style.height = "80%";
    projectPhoto7.style.padding = "0"; 
    projectPhoto7.style.zindex = "2"; 
    projectPhoto7.src = projectPhotos.image7; 

    container2.appendChild(projectPhoto7); 

    photo7 = document.createElement("img");  
    photo7.style.width ="100%";
    photo7.style.height = "100%";
    photo7.style.padding = "0"; 
    photo7.style.position = "relative"; 
    photo7.src = photo.image7;

    photoContainer.appendChild(photo7);
};

function removePhoto7(){
    photoContainer.removeChild(photo7);
};

function removeFunction7(){
    container2.removeChild(projectPhoto7);
};


// New Section --------------------------------------------------------------------------------------------

var fontChange1 = document.querySelector("#project1");
var fontChange2 = document.querySelector("#project2");
var fontChange3 = document.querySelector("#project3");
var fontChange4 = document.querySelector("#project4");
var fontChange5 = document.querySelector("#project5");
var fontChange6 = document.querySelector("#project6");
var fontChange7 = document.querySelector("#project7");


function fontFunction(){
    fontChange1.style.fontWeight = "900";
    fontChange1.style.fontSize = "2rem";  
    fontChange1.style.fontStyle = "italic"; 
    fontChange1.style.color = "red"; 
    fontChange1.style.opacity = "100%";

    welcome.style.fontWeight = "900";
    welcome.style.fontSize = "2rem";
    welcome.style.fontStyle = "italic"; 
    welcome.style.color = "red"; 
    welcome.style.opacity = "100%";

};

function removeFont(){

   fontChange1.style.fontWeight = ""; //returns text to normal, no need to remove or add a child text node
   fontChange1.style.fontSize = "";  
   fontChange1.style.fontStyle = ""; 
   fontChange1.style.color = "black"; 
    fontChange1.style.opacity = "100%";



   welcome.style.fontWeight = "";
    welcome.style.fontSize = "";
    welcome.style.fontStyle = ""; 
    welcome.style.color = "black"; 
    welcome.style.opacity = "100%";


console.log("remove1"); 

};

//----------------------------------------------------
function fontFunction2(){

    fontChange2.style.fontWeight = "900";
    fontChange2.style.fontSize = "2rem";
    fontChange2.style.fontStyle = "italic"; 
    fontChange2.style.color = "blue"; 
    fontChange2.style.opacity = "100%";

    welcome.style.fontWeight = "900";
    welcome.style.fontSize = "2rem";
    welcome.style.fontStyle = "italic"; 
    welcome.style.color = "blue"; 
    welcome.style.opacity = "100%";
    
    };
    
    function removeFont2(){
    
       fontChange2.style.fontWeight = ""; 
       fontChange2.style.fontSize = "";  
       fontChange2.style.fontStyle = "";
       fontChange2.style.color = "black";
       fontChange2.style.opacity = "100%";

       welcome.style.fontWeight = ""; 
       welcome.style.fontSize = "";  
       welcome.style.fontStyle = "";
       welcome.style.color = "black";
       welcome.style.opacity = "100%";
    
    console.log("remove2"); 
    
    };
//---------------------------------------------------

//----------------------------------------------------
function fontFunction3(){
    fontChange3.style.fontWeight = "900";
    fontChange3.style.fontSize = "2rem";  
    fontChange3.style.fontStyle = "italic"; 
    fontChange3.style.color = "green"; 
    fontChange3.style.opacity = "100%";
    
    welcome.style.fontWeight = "900"; 
    welcome.style.fontSize = "2rem";  
    welcome.style.fontStyle = "italic";
    welcome.style.color = "green";
    welcome.style.opacity = "100%";

    };
    
    function removeFont3(){
    
       fontChange3.style.fontWeight = ""; 
       fontChange3.style.fontSize = "";  
       fontChange3.style.fontStyle = ""; 
        fontChange3.style.color = "black"; 
        fontChange3.style.opacity = "100%";

       welcome.style.fontWeight = ""; 
       welcome.style.fontSize = "";  
       welcome.style.fontStyle = "";
       welcome.style.color = "black";
       welcome.style.opacity = "100%";
    
    console.log("remove3"); 
    
    };
//---------------------------------------------------

//----------------------------------------------------
function fontFunction4(){
    fontChange4.style.fontWeight = "900";
    fontChange4.style.fontSize = "2rem";
    fontChange4.style.fontStyle = "italic";
    fontChange4.style.color = "yellow";
    fontChange4.style.opacity = "100%";

    welcome.style.fontWeight = "900"; 
    welcome.style.fontSize = "2rem";  
    welcome.style.fontStyle = "italic";
    welcome.style.color = "yellow";
    welcome.style.opacity = "100%";
    };
    
    function removeFont4(){
    
    fontChange4.style.fontWeight = ""; 
    fontChange4.style.fontSize = "";  
    fontChange4.style.fontStyle = "";
    fontChange4.style.color = "black";
    fontChange4.style.opacity = "100%";

    welcome.style.fontWeight = ""; 
    welcome.style.fontSize = "";  
    welcome.style.fontStyle = "";
    welcome.style.color = "black";
    welcome.style.opacity = "100%";
    
    console.log("remove4"); 
    };
//---------------------------------------------------

//----------------------------------------------------
function fontFunction5(){
    fontChange5.style.fontWeight = "900";
    fontChange5.style.fontSize = "2rem";  
    fontChange5.style.fontStyle = "italic";
    fontChange5.style.color = "pink";
    fontChange5.style.opacity = "100%";

    welcome.style.fontWeight = "900"; 
    welcome.style.fontSize = "2rem";  
    welcome.style.fontStyle = "";
    welcome.style.color = "pink";
    welcome.style.opacity = "100%";
    };
    
    function removeFont5(){
    
       fontChange5.style.fontWeight = ""; 
       fontChange5.style.fontSize = "";
       fontChange5.style.fontStyle = "";
        fontChange5.style.color = "black";
        fontChange5.style.opacity = "100%";  

       welcome.style.fontWeight = ""; 
        welcome.style.fontSize = "";  
        welcome.style.fontStyle = "";
        welcome.style.color = "black";
        welcome.style.opacity = "100%";
    
    
    console.log("remove5"); 
    };
//---------------------------------------------------

//----------------------------------------------------
function fontFunction6(){
    fontChange6.style.fontWeight = "900";
    fontChange6.style.fontSize = "2rem"; 
    fontChange6.style.fontStyle = "italic";
    fontChange6.style.color = "purple";
    fontChange6.style.opacity = "100%"; 
        
        welcome.style.fontWeight = "900"; 
        welcome.style.fontSize = "2rem";  
        welcome.style.fontStyle = "italic";
        welcome.style.color = "purple";
        welcome.style.opacity = "100%";
    
    };
    
    function removeFont6(){
    
       fontChange6.style.fontWeight = ""; 
       fontChange6.style.fontSize = "";
       fontChange6.style.fontStyle = "";
       fontChange6.style.color = "black";
       fontChange6.style.opacity = "100%"; 
       
       welcome.style.fontWeight = ""; 
        welcome.style.fontSize = "";  
        welcome.style.fontStyle = "";
        welcome.style.color = "black";
        welcome.style.opacity = "100%";
    
    console.log("remove6"); 
    
    };
//--------------------------------------------------- 

//----------------------------------------------------
function fontFunction7(){
    fontChange7.style.fontWeight = "900";
    fontChange7.style.fontSize = "2rem"; 
    fontChange7.style.fontStyle = "italic";
    fontChange7.style.color = "teal";
    fontChange7.style.opacity = "100%"; 
    

    welcome.style.fontWeight = "900"; 
        welcome.style.fontSize = "2rem";  
        welcome.style.fontStyle = "italic";
        welcome.style.color = "teal";
        welcome.style.opacity = "100%"; 
    };
    
    function removeFont7(){
    
       fontChange7.style.fontWeight = ""; 
       fontChange7.style.fontSize = ""; 
       fontChange7.style.fontStyle = "";
    fontChange7.style.color = "black";
    fontChange7.style.opacity = "100%"; 

       welcome.style.fontWeight = ""; 
        welcome.style.fontSize = "";  
        welcome.style.fontStyle = "";
        welcome.style.color = "black";
        welcome.style.opacity = "100%"; 
    
    console.log("remove7"); 
    
    };
//--------------------------------------------------- 

