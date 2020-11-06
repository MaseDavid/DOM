//1.  console.log(document.getElementById("container"));

// 2. var section = document.querySelector('#container')
// console.log(container)

// 3 var second = document.getElementsByClassName('second')
// console.log(second)

// 4. var third = document.getElementsByClassName('third')[1];
// console.log(third)

// 5. var section = document.querySelector("#container");
//  section.innerText = "Hello";
//  console.log(section);
  
// 6 var footerDiv = document.querySelector(".footer");
// footerDiv.classList.add("main");
// console.log(footerDiv);

// 7 var main = document.getElementsByTagName('div')[1]
// main.classList.remove("main")
// console.log(main)

/* 8 var newLi = document.createElement('li')
console.log(newLi);*/

/* 9 var newLi = document.createElement("li");
 newLi.innerText = "four";
 console.log(newLi);*/

// 10  container.appendChild(newLi)//

//11 var loop = document.getElementsByTagName('ol')
// for (var i = 0; i < loop.length; i++) {
//     loop[i].style.backgroundColor = "green";
// }

var removeFooter = document.querySelector('.footer');
var body = document.querySelector('body');
body.removeChild(removeFooter);
console.log(body)