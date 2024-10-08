$(".project-panel").hover(

//Show
function()
 {
    switchToAlt(this)
 }, 

//Hide
function() {
    switchToTitle(this)
 }
)

function switchToAlt(ele){
    var textEle = $(ele).find(".project-text")[0]

    fadeAnim = textEle.animate([
        {opacity:1},
        {opacity:0}]
        ,100);
    
    fadeAnim.finished.then(() => {
        textEle.innerHTML = textEle.getAttribute("alt")
        textEle.style.fontSize = "28px"
        textEle.style.fontWeight = "normal"
    
        textEle.animate([
            {opacity:0},
            {opacity:1}]
            ,100);
    });
}

function switchToTitle(ele){
    var textEle = $(ele).find(".project-text")[0]

    textEle.getAnimations().forEach(element => {
     element.cancel()
    });
 
    textEle.innerHTML = textEle.getAttribute("main")
    textEle.style.fontWeight = "bold"
    textEle.style.fontSize = "40px"
}