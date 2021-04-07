const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
    'Hello World!',
    'lorem ipsum',
    'Please Restart',
    'New Update Available'
]

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => createNot())

function createNot(message = null, type = null){
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : getType())
    toast.innerHTML = message ? message : getMessage()
    toasts.appendChild(toast)
    setTimeout(function(){
        toast.remove(); }, 2000)
}

function getMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getType(){
    return types[Math.floor(Math.random() * types.length)]
}