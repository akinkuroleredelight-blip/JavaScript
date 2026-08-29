let name = document.getElementById('name')
let submit = document.getElementById('submit')
let result = document.getElementById('result')
let theme = document.getElementById('theme')

submit.addEventListener('click', () => {
    if(name.value !== "") {
        result.textContent = `${name.value}`
    } else {
        result.textContent = "Name is required"
        result.style.color = "red"
        alert("Name is required")
    }
})

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})