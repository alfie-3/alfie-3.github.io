 activeButton = 1

function point(activeIndex){
    if (activeButton == activeIndex)
    {
        return;
    } 

    activeButton = activeIndex

    document.getElementById("arrow").animate(
        [
          // keyframes
          { transform: "translateY(0px)" },
          { transform: "translateY(5px)" },
          { transform: "translateY(0px)" },
        ],
        {
          // timing options
          duration: 200,
          iterations: 1,
        },
      );
}