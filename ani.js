gsap.set(["#play-toggle", "#render-toggle", "#pause-toggle", "#totalDuration", "#download"], {autoAlpha:0});
console.log(gsap);

// gsap.set("#content", {height:"70%", width:"70%"})
gsap.set("#bg_circle", {x:-500})
gsap.set("#bg_circle2", {x:"110vw", y:"110vh"})
gsap.set("#artist_name", {rotate:-10})

var tl = gsap.timeline();
// tl.to("#bg_circle", {duration: 30, x:"100vw", y:"100vh", delay:1, repeat:-1},0);
// tl.to("#bg_circle2", {duration: 30, x:-300, y:-300, repeat:-1},0);


// tl.from(".wrapper", {x: 100, duration: 1});
// tl.from("#content", {duration:0.2, backgroundSize:"0% 0%"},0)



document.getElementById("content").addEventListener("mouseover", mouseOverPlayer);
document.getElementById("content").addEventListener("mouseleave", mouseOffPlayer);

// gsap.set("#content", {height:"80%", width:"80%"})
gsap.set(".wrapper", {width:"100%", x:"110%"}) 
// gsap.set(".wrapper", {height:"80%", width:"80%"}) 

gsap.set("#status", {autoAlpha:0})   
function mouseOverPlayer(){
    // console.log("TEST")
    // gsap.to("#content", {duration:0.2, height:"80%", width:"80%"})
    // gsap.to("#artist_name", {duration:0.2, autoAlpha:0})    
    // gsap.to("#contentBlock", {duration: 0.2, autoAlpha:0});
    // gsap.to("#play-toggle", {duration: 0.2, autoAlpha:1});
    // // gsap.to("#pause-toggle", {duration: 0.2, autoAlpha:1});
    // gsap.to("#render-toggle", {duration: 0.2, autoAlpha:1});
    // gsap.to("#download", {duration: 0.2, autoAlpha:1});
    // gsap.to("#totalDuration", {duration: 0.2, autoAlpha:1});
    // gsap.to("#render-toggle", {duration: 0.2, autoAlpha:1});
    // gsap.to("#contentSplash", {duration: 0.2, autoAlpha:0});
    // gsap.set(".wrapper", {width:"100%"},0) 
    // gsap.to(".wrapper", {duration:0.2, x:0, delay:0.3, autoAlpha:1}) 
   
    // gsap.from("#status", {duration:0.2, autoAlpha:1})       
}

function mouseOffPlayer(){
    // gsap.to(".wrapper", {duration:0.2, x:"+=1200", delay:0.3, autoAlpha:1},0) 
    // console.log("TEST")
    // gsap.to("#content", {duration:0.2, width:336, height:280})
    // gsap.to("#contentBlock", {duration: 0.2, autoAlpha:1});
    // // gsap.to("#play-toggle", {duration: 0.2, autoAlpha:0});
    // gsap.to("#contentSplash", {duration: 0.2, autoAlpha:0});
    // gsap.to("#artist_name", {duration:0.2, autoAlpha:1})   
    // // gsap.set("#status", {autoAlpha:1})  

    // gsap.to("#render-toggle", {duration: 0.2, autoAlpha:0});
    // gsap.to("#download", {duration: 0.2, autoAlpha:0});
    // gsap.to("#totalDuration", {duration: 0.2, autoAlpha:0});
    // gsap.to("#render-toggle", {duration: 0.2, autoAlpha:0});
    // gsap.to("#play-toggle", {duration: 0.2, autoAlpha:0});

}

// console.log(SplitText);