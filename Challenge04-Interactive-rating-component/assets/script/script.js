let ratinglist = document.getElementsByClassName("rating-list")[0].children 
let maindiv = document.getElementsByClassName('container-support')[0]
let notediv = document.getElementsByClassName('card-state-active')[0]


var userNote
let noteSelected = false
const note = document.getElementsByClassName('selected-rating');

function ratingButton(id) {

    userNote = id

    for (let i = 0; i < ratinglist.length; i++) {
       id === i ? (addingClass(ratinglist[i]), noteSelected = true) : addingClass(ratinglist[i])
    }

}

function addingClass(element) {
    element.classList.contains('selected-yet') ? element.classList.remove('selected.yet') :     element.classList.add('selected.yet')
}


function submitButton() {
    noteSelected == true ? (maindiv.style.display = 'none', notediv.style.display = 'block', note.innerHTML = userNote + 1) : alert("Selecione uma nota")

}