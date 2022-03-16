let list = document.querySelectorAll(".navBar li");
// console.log(list);
let span = document.querySelectorAll("span.active");
// console.log(span);
let toggleBtn = document.getElementById('togglebtn');
let menuToggle = document.querySelector('.togglelinks')

for (let i = 0; i < list.length; i++) {
  let listHover = list[i];
  listHover.addEventListener("mouseover",() => span[i].classList.add("activehover"));
  listHover.addEventListener("mouseout",() => span[i].classList.remove("activehover"));
}


toggleBtn.addEventListener('click',() =>
{
  if(menuToggle.classList.contains('active'))
  {
  document.body.style.position = 'static'
   menuToggle.classList.remove('active')
  }
 else {
   menuToggle.classList.add('active')
   document.body.style.position = 'fixed'
  }
})



// let el = document.getElementById('menulinks');
// let span = document.querySelectorAll('.active');

// let x = el.children[0].getAttribute('value');
// console.log(x);
// let a = [...el.children]
// console.log(a);
// let result =a.filter(el => !el.classList.contains('active'));
// console.log(result)

// a.forEach((el) =>
// {

//     el.addEventListener('mouseover', (e) =>{
//         e.preventDefault();

//         span.forEach(spanEl =>
//             {
//                 e.target.spanEl.classList.add('activehover')
//             })

//     })
//     el.addEventListener('mouseout',() =>
//     {
//         span.forEach(spanEl =>
//             {
//                 spanEl.classList.remove('activehover')
//             })

//     })
//     //  console.log(el.getAttribute('value'));
// })

