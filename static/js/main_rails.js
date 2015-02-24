window.onload=function(){
  // These define the document elements, the slider, slides, and control
  var $slider = document.getElementById("slideshow-slider");
  var $slide = document.getElementsByClassName("slide");
  var $control = document.getElementById("slideshow-control");
  
  $slider.style.width=($slide.length*100)+"%";
  
  for (var i=0;i<$slide.length;i++) {
    $slide[i].style.width=(100/$slide.length)+"%";
    $control.style.height=($slide.length*30)+"px";
    $control.style.marginTop="-"+(($slide.length*30)/2)+"px"
    $control.innerHTML+="<div class='slideshow-pip' data-active='false'></div>";
  }
  $control.getElementsByClassName("slideshow-pip")[0].setAttribute("data-active", "true");
  
  var $pip = document.getElementsByClassName("slideshow-pip");
  for (var i=0;i<$pip.length;i++) {
    $pip[i].id=i;
    $pip[i].onclick=function(){
      $slider.style.left="-"+(this.id*100)+"%";
      clearInterval(autoscroll)
      for (var i=0;i<$pip.length;i++) {
        if ($pip[i].getAttribute("data-active") === "true") $pip[i].setAttribute("data-active","false"); 
      }
      
      this.setAttribute("data-active","true");
    }
  }
  
  
  asn = 1;
  autoscroll = setInterval(function(){
    for (var i=0;i<$pip.length;i++) {
      if ($pip[i].getAttribute("data-active") === "true") $pip[i].setAttribute("data-active","false"); 
    }
    $pip[asn].setAttribute("data-active", "true");
    $slider.style.left="-"+(asn*100)+"%";
    if (asn<$slide.length-1) {
      asn++;
    } else {asn = 0;}
    console.log(asn);
  }, 8000);
}
