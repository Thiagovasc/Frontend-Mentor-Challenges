function ratingButton(id){
    var element = document.getElementById(id)
    var spanNote = document.getElementsByClassName("selected-rating")

    var note = id
    spanNote.innerHTML = id
    element.style.background = "orange"

}