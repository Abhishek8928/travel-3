console.log("App.js is connected");

// js for navigation
let t1 = gsap.timeline(); 
let openNavigationHandler = () => {

    let navi = document.getElementById("navi");

    if (navi.classList.contains("d-none-third"))
    {
        navi.classList.remove("d-none-third");
        t1.from("#fi-link", {
            x: -20,
            opacity: 0,
        })
        .from("#se-link", {
            x: -20,
            opacity:0
        })
        .from("#th-link", {
            x: -20,
            opacity:0
        })
        .from("#fo-link", {
            x: -20,
            opacity:0
        })

        
    }
    else {
        navi.classList.add("d-none-third");
        
    }
}

// gsap

t1.from(".bg-img", {
    x: "-100vw",
    opacity: 0,
    duration:6
})
   
    .from(".input-container",3, {
        opacity: 0,
        y:"-60vh"
        
})
.from("nav", {
    y: 20,
    opacity: 0
})
.from(".first-container", {
    scale: 1.2,
    opacity: 0
})
