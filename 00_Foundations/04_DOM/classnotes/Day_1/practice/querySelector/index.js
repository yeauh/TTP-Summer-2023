let elements = document.getElementsByClassName('myClass');
console.log(elements.length);

const myClass = document.getElementsByClassName('toggle-button');

const buttons = document.getElementsByClassName('toggle-button')

function toggleClass() {
    for (let i = 0; i < buttons.length; i++) {
        // const element = array[i];
        buttons[i].classList.toggle('active');
        
    }
}
toggleClass();