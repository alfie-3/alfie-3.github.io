function changeTextTitle(id, content){
   var ele = document.getElementById(id)

   ele.getAnimations().forEach(element => {
    element.cancel()
   });

   ele.innerHTML = content.bold()
   ele.style.fontWeight = "bold"
   ele.style.fontSize = "40px"
}

function changeTextDesc(id, content){
    var ele = document.getElementById(id)
    
    fadeAnim = ele.animate([
        {opacity:1},
        {opacity:0}]
        ,100);
    
        console.log(fadeAnim.finished)
    fadeAnim.finished.then(() => {
        ele.innerHTML = content
        ele.style.fontSize = "28px"
        ele.style.fontWeight = "normal"
    
        ele.animate([
            {opacity:0},
            {opacity:1}]
            ,100);
    });
}