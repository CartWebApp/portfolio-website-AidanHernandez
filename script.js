
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if(scrollTop <= 5){
    document.querySelector("nav").classList.remove("expand");
    document.getElementById("homeContent").classList.remove("expand")
    document.getElementById("aboutContent").classList.remove("expand")
  }
  else if(scrollTop >= 10){
    document.querySelector("nav").classList.add("expand");
    document.getElementById("homeContent").classList.add("expand")
    document.getElementById("aboutContent").classList.add("expand")
  }
});


function navSelection(selected){
    if(selected === "home"){
      
      if(document.getElementById("aboutContent").classList.contains("show")){
        document.getElementById("aboutContent").classList.toggle("show")
        document.getElementById("homeContent").classList.toggle("show")
        document.getElementById("arrowHome").classList.toggle("rotate")
        document.getElementById("arrowAbout").classList.toggle("rotate")
      }
      else{
        document.getElementById("homeContent").classList.toggle("show")
        document.getElementById("arrowHome").classList.toggle("rotate")
      }
      
      

    }
    else if(selected === "about"){


      if(document.getElementById("homeContent").classList.contains("show")){
        document.getElementById("homeContent").classList.toggle("show")
        document.getElementById("aboutContent").classList.toggle("show")
        document.getElementById("arrowHome").classList.toggle("rotate")
        document.getElementById("arrowAbout").classList.toggle("rotate")
      }
      else{
        document.getElementById("aboutContent").classList.toggle("show")
        document.getElementById("arrowAbout").classList.toggle("rotate")
      }
        
    }
}

function share(){

    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        console.log('URL copied to clipboard successfully!');
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  
  


}