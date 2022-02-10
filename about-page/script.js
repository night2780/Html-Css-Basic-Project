window.onscroll = function () { scrollFunction()};

const topbutton = document.getElementById("topBtn")
const btmbutton = document.getElementById("btmBtn")
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    topbutton.style.display = "block";
    btmbutton.style.display = "none";
  }else {
    document.getElementById("navbar").style.top = "-50px";
    topbutton.style.display = "none";
    btmbutton.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function btmFunction() {
  document.body.scrollIntoView(false);
  document.documentElement.scrollIntoView(false);
}

// let titleHeight = document.getElementsById("title")
// function go_down() {
//   let idArray = [256.5, , "#box-1"];
//   let prev,curr ,next;
//   curr = 0
//   console.log(btn_d.hash);
//   idArray.filter(myFunction);
//   function myFunction(value, index, array) {
//     if (value == btn_d.hash && index >= 0) {
//       console.log(true);
//       next = ++index;
//     };
//     return false;
//   }
//   curr = idArray[next]
//   btn_d.href = idArray[next]
//   console.log(btn_d.href);
// }