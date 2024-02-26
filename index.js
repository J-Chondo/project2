

  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector("#nav-list");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    })
  );

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

  
