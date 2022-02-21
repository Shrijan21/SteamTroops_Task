const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')

const Tab1 = document.getElementById('residential-solar')
const Tab2 = document.getElementById('commercial-solar')
const Tab3 = document.getElementById('es-system')
const Tab4 = document.getElementById('evc-station')
const Tab5 = document.getElementById('gp-set')


btn1.addEventListener('click', () => {
    clearAll()
    btn1.classList.add('active')
    Tab1.classList.add('active')
})

btn2.addEventListener('click', () => {
    clearAll()
    btn2.classList.add('active')
    Tab2.classList.add('active')
})

btn3.addEventListener('click', () => {
    clearAll()
    btn3.classList.add('active')
    Tab3.classList.add('active')
})

btn4.addEventListener('click', () => {
    clearAll()
    btn4.classList.add('active')
    Tab4.classList.add('active')
})

btn5.addEventListener('click', () => {
    clearAll()
    btn5.classList.add('active')
    Tab5.classList.add('active')
})


function clearAll () {
    Tab1.classList.remove('active')
    Tab2.classList.remove('active')
    Tab3.classList.remove('active')
    Tab4.classList.remove('active')
    Tab5.classList.remove('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
    btn5.classList.remove('active')
}