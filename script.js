
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if(scrollTop <= 5){
    document.querySelector("nav").classList.remove("expand");
  }
  else if(scrollTop >= 104){
    document.querySelector("nav").classList.add("expand");
  }
});
