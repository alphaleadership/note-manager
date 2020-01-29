
import '../assets/scss/index.scss'

export default (()=>{

    const notes = document.getElementById('notes')
    const reset = document.getElementById('reset')
    const pin = document.getElementById('pin')
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    pin.addEventListener('click', event => {
        notes.appendChild(makeNote({
            title: title.value,
            content: content.value
        }))
    })

    reset.addEventListener('click', event => {
        while(notes.firstChild){
            notes.firstChild.remove()
        }
    })

})()

function makeNote( note ){
    const $note = document.createElement('div')
    $note.className = 'note'
    $note.innerHTML = `
        <div class="menu">
            <div class="buttons">
                <button>❌</button>
                <button>✏️</button>
            </div>
            <img src="https://www.ville-guebwiller.fr/wp-content/uploads/2017/04/pushpin-147918_1280.png" width="50">
        </div>
        <div class="body">
            <h2 class="title"> ${note.title} </h2>
            <p class="content"><pre>${note.content}</pre></p>
        </div>
    `
    return $note
}