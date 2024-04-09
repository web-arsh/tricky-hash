let element = document.getElementsByClassName("popUp")[0];

function myfunc(){
  element.classList.toggle("show");
  let ipframe = document.getElementsByTagName("iframe")[0];
  ipframe.setAttribute("src","https://www.youtube.com/embed/LXX8WLpfIRc?si=v9rUoPEFVFzccI-w"); 
  ipframe.stopVideo();
}

function redirect1(){
  window.open("https://www.amazon.in/shop/trickyhash/list/1X0OCH8ACPB71?ref_=cm_sw_r_cp_ud_aipsflist_aipsftrickyhash_RXRZHGM4NPB6Y7NFD9AA","_blank");
}

function redirect2(){
  window.open("https://nordvpn.com/creator/?coupon=thnord&utm_medium=affiliate&utm_term=&utm_content&utm_campaign=off601&utm_source=aff64953","_blank");
}
