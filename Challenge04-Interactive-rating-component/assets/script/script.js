function ratingButton(id){
    const element = document.getElementById(id)
    const note = id
    
    element.style.background = "orange"
    if(element.style.background == "orange") element.style.background = "grey"
    else element.style.background = "orange"


    
    console.log(id, element.style.background)
}