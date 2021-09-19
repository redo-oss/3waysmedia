const navAnimation = () => {
  const burgerMenuOpen = document.querySelector(".checkbox");
//   const burgerMenuClose = document.querySelector("#close");
  const nav = document.querySelector('.ul');
  burgerMenuOpen.addEventListener('click',()=>{
      //nav toggle
      nav.classList.toggle('ul-active-nav')
      // burger toggle
       burgerMenuOpen.classList.toggle('toggle');
  })
  
};
