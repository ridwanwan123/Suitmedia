let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//FORM VALIDATE 
function validate() {
  var ipName =document.f1.name.value;  

  if(ipName.length<1){  
    document.getElementById("nameloc").innerHTML=  
    "  Please enter your name";  
    status=false;  
    }else{  
    document.getElementById("nameloc").innerHTML=" ";  
    status=true;  
    }
    
    var ipemail =document.f1.email.value;  

    if(ipemail.length<1){  
      document.getElementById("emailloc").innerHTML=  
      "  Please enter your email";  
      status=false;  
      }else{  
      document.getElementById("emailloc").innerHTML=" ";  
      status=true;  
      }

    var ipalamat =document.f1.alamat.value;  

    if(ipalamat.length<1){  
      document.getElementById("alamatloc").innerHTML=  
      "  Please enter your Alamat";  
      status=false;  
      }else{  
      document.getElementById("alamatloc").innerHTML=" ";  
      status=true;  
      }
}