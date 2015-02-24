// This is standard, so document elements can be selected, otherwise "document" would be undefined.
window.onload=function(){
  // These define the document elements, the slider, slides, and control
  var $slider = document.getElementById("slideshow-slider");
  var $slide = document.getElementsByClassName("slide");
  var $control = document.getElementById("slideshow-control");
  
  // This defines the width of the slider, based on each slide, e.g. if there were 3 slides - 300%;
  $slider.style.width=($slide.length*100)+"%";
  
  // This loops - so all the slide elements are selected (In JavaScript, you have to loop through each class element)
  for (var i=0;i<$slide.length;i++) {
    // This defines the width of the slides, if you had 4 slides, the slider would be 400%, but if the slide was 100% that would take up the whole slider.
    // but 25% would technically take up the screens width.
    $slide[i].style.width=(100/$slide.length)+"%";
    
    // This defines the button controller height (depending on the number of slides), e.g. if there was 3 slides, 3*40 = 120
    $control.style.height=($slide.length*30)+"px";
 
    // This is for positioning, so it's vertically centered
    $control.style.marginTop="-"+(($slide.length*30)/2)+"px"
    
    // This creates a button for each slide.
    $control.innerHTML+="<div class='slideshow-pip' data-active='false'></div>";
  }
  
  // This sets the first button to active (because the website starts with the first slide open)
  $control.getElementsByClassName("slideshow-pip")[0].setAttribute("data-active", "true");
  
  // This defines the button class
  var $pip = document.getElementsByClassName("slideshow-pip");
  // This creates a loop for the buttons
  for (var i=0;i<$pip.length;i++) {
    // This sets an ID for the buttons, e.g. button1 would have id of 1;
    $pip[i].id=i;
    // Event - when a button is clicked...
    $pip[i].onclick=function(){
      // This changes the slider position, based on which button was clicked, if the button had an ID of 2, it would end up being -200%.  Which rotates to the second slide.
      $slider.style.left="-"+(this.id*100)+"%";
      // This stops the auto-scrolling when a button is clicked. (To prevent annoyance, basically.)
      clearInterval(autoscroll)
      // This changes the previous button's state to "false", or else all the buttons would end up being red (when you click a button, the previous on is unchecked)
      for (var i=0;i<$pip.length;i++) {
        if ($pip[i].getAttribute("data-active") === "true") $pip[i].setAttribute("data-active","false"); 
      }
      
      // Sets the clicked button's state to active.
      this.setAttribute("data-active","true");
    }
  }
  
  
  // AUTO SCROLL STUFF.
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