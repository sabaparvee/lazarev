function navAnimation(){
    var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function(){
    let t1=gsap.timeline()
     t1.to("#nav-bottom",{
        height:'21vh',
        duration:0.5
    })
    t1.to(".nav-part2 h5",{
        display:"block",
        duration:0.1
    })
    t1.to(".nav-part2 span",{
        y:0,
        //duration:0.3,
        stagger:{
            amount:0.6
        }
    });
})
nav.addEventListener("mouseleave",function(){
    let t1=gsap.timeline()
   
    t1.to(".nav-part2 span",{
        y:25,
        //duration:0.3,
        stagger:{
            amount:0.2
        }
    })
    t1.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    t1.to("#nav-bottom",{
        height:0,
        duration:0.1
    })
})
}

function page2Animation(){
    var rightElems=document.querySelectorAll(".right-ele")
rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        console.log(elem.getBoundingClientRect().y)
        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-10,
            y:dets.y-elem.getBoundingClientRect().y-100

        })
    })

})
}
function page3VideoAnimation(){
    var page3Center=document.querySelector(".page3-center");
    var video=document.querySelector("#page3 video");
    page3Center.addEventListener('click',function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener('click',function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}
function page7VideoAnimation(){

var sections=document.querySelectorAll('.sec-right')
sections.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        ele.childNodes[3].style.opacity=1
        ele.childNodes[3].play()
    })
    ele.addEventListener("mouseleave",function(){
        ele.childNodes[3].style.opacity=0
/*         ele.childNodes[3].pause()
 */    
          ele.childNodes[3].load()  
        })
    })
}
function page8video(){
var secs=document.querySelectorAll('.page81')
secs.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        ele.childNodes[7].style.height='90%'
        ele.childNodes[7].style.top='20%'

        ele.childNodes[7].style.opacity=1
        ele.childNodes[7].play()
    })
    ele.addEventListener("mouseleave",function(){
        ele.childNodes[7].style.opacity=0
        ele.childNodes[7].load()
        ele.childNodes[7].style.height='100%'

    })
})
}

//navAnimation()

//page2Animation()
//page3VideoAnimation()
page7VideoAnimation()
page8video()