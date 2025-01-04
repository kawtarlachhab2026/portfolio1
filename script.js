  ///Circle skilll //////////////////////////////////
  const circles = document.querySelectorAll('.circle')
  circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var market = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * market) / 100);
    var points = "";  
    var rotate = 360 / dots;
  
    for(let j = 0 ; j < dots ; j++){
      points += `<div class="points" style="--j:${j}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
  
    const pointsMarket = elem.querySelectorAll('.points');
    for(let j = 0 ; j < percent ; j++){
      pointsMarket[j].classList.add('marked')
    }
  })
  
  /// Active Menu ///////////////////////////////////
  let menuli = document.querySelectorAll('header ul li a');
  let section = document.querySelectorAll('section');
  
  function activeMenu(){
   let len = section.length;
   while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
   
  }
  activeMenu();
  window.addEventListener("scroll",activeMenu);

  /////Sticky navebar ////////////////////////////////
  const  header = document.querySelector('header');
  window.addEventListener("scroll",function(){
      header.classList.toggle("sticky",window.scrollY > 50)
  })

  ///toggle icon navbae////
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  menuIcon.onclick =()=>{
      menuIcon.classList.toggle("bx-x");
      navlist.classList.toggle("open");
  }
  window.onscroll = ()=>{
      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open");
  }


  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show-items");
      }
      else{
        entry.target.classList.remove("show-items");
      }
    })
  })

  const scrollScale = document.querySelectorAll(".scroll-scale")
  scrollScale.forEach((el)=>observer.observe(el));

  const scrollbottom = document.querySelectorAll(".scroll-bottom")
  scrollbottom.forEach((el)=>observer.observe(el));

  const scrollTop = document.querySelectorAll(".scroll-top")
  scrollTop.forEach((el)=>observer.observe(el));



///Job description /////
function toggleDescription(descriptionId, button) {
  var description = document.getElementById(descriptionId);
  description.classList.toggle("hidden");

  // Toggle button text based on visibility
  if (description.classList.contains("hidden")) {
    button.textContent = "Role Details"; // If hidden, show "Read more"
  } else {
    button.textContent = "Read less"; // If shown, show "Read less"
  }
}

//About//////
function toggleContent() {
  var moreContent = document.getElementById("read-more-content");
  var activitiesContent = document.getElementById("activities");
  var toggleButton = document.getElementById("toggle-btn");

  if (moreContent.classList.contains("hidden") && activitiesContent.classList.contains("hidden")) {
    moreContent.classList.remove("hidden");
    activitiesContent.classList.remove("hidden");
    toggleButton.textContent = "Read Less";
  } else {
    moreContent.classList.add("hidden");
    activitiesContent.classList.add("hidden");
    toggleButton.textContent = "Read More";
  }
}