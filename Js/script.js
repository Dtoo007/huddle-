const btn = document.getElementById ('menu-btn')
const menubar = document.getElementById ('menu')
const menulist =document.getElementById ('menu-list')
// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })


btn.addEventListener("click", () => {
    
    if(menubar.classList.contains("top-[9%]") && menulist.classList.contains("hidden"))  {
        menubar.classList.add("bg-white");
        menubar.classList.remove("bg-none");
    //   menubar.classList.remove("top-[9%]");
    //   menubar.classList.add("top-[100%]");
      menulist.classList.remove("hidden")
      menulist.classList.add("flex")
    } else if (menubar.classList.contains("top-[9%]") && menulist.classList.contains("flex")) {
    //   menubar.classList.remove("top-[100%]");
      menubar.classList.remove("bg-white");
      menubar.classList.add("bg-none");
      menulist.classList.remove("flex")
      menulist.classList.add("hidden")
    }

    btn.classList.toggle('open')
  })

  btn.addEventListener('click');




