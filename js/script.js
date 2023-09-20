const list = document.querySelectorAll('.modal')
var parent = document.querySelectorAll("body");
var child = document.getElementById("modal");
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('open'); 
      });
    })
})