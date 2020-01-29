
import '../assets/scss/index.scss'

export default (()=>{

    const notes = document.getElementById('notes')
    const reset = document.getElementById('reset')
    const pin = document.getElementById('pin')
    const title = document.getElementById('title')
    const content = document.getElementById('content')

    pin.addEventListener('click', event => {

        const note = {
            title: title.value.trim(),
            content: content.value.trim()
        }

        notes.appendChild(makeNote(note))
        localStorage.setItem(JSON.stringify(note),JSON.stringify(note))

        title.value = ''
        content.value = ''
    })

    reset.addEventListener('click', event => {

        localStorage.clear()

        while(notes.firstChild){
            notes.firstChild.remove()
        }
    })

    notes.addEventListener('click', event => {

        if(event.target.innerHTML === '❌'){

            const $note = event.target.parentElement.parentElement.parentElement
            const note = noteToJSON($note)

            localStorage.removeItem(JSON.stringify(note))
            note.remove()

        }else if(event.target.innerHTML === '✏️'){

            const $note = event.target.parentElement.parentElement.parentElement
            const note = noteToJSON($note)

            title.value = note.title
            content.value = note.value

            localStorage.removeItem(JSON.stringify(note))
            note.remove()
        }
    })

    setTimeout(()=>{
        for(let i=0; i<localStorage.length; i++){
            if(localStorage.key(i).includes('webpack')) continue
            const note = JSON.parse(localStorage.key(i))
            notes.appendChild(makeNote(note))
        }
    },1000)

    

})()

function noteToJSON( $note ){
    return {
        title: $note.querySelector('.title').innerHTML.trim(),
        content: $note.querySelector('.content').innerHTML.trim()
    }
}

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
            <pre class="content">${note.content}</pre>
        </div>
    `
    return $note
}