//1 select target element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

//2 create new html element (document.createElement())
function createProfileCard (){
    //create profile card container
    const profileCard = document.createElement("div");
    //add class
    profileCard.className = "profile-Card";
    //create image element for the profile card
    const profileImage = document.createElement("img");
    //add image to img element
    profileImage.src ="myPhoto.jpg";
    //create h3 element for name
    const profileName = document.createElement("h3");
    profileName.textContent = "Ama Dandy";
    //create paragraph for profile description
    const profileDescription = document.createElement("p");
    profileDescription.textContent = "A passionate web developer with experience in HTML, CSS and JAVASCRIPT."; 
    //append elements to profile card
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    //append profile card to container/DOM
    appContainer.appendChild(profileCard);
    
}
//add event listener(click)
generateBtn.addEventListener("click", createProfileCard);