const data = [
    {
        id : 0,
        image : `./images/image-tanya.jpg`,
        description : `“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”`,
        name : `Tanya Sinclair`,
        job : `UX Engineer`
    },
    {
        id : 1,
        image : `./images/image-john.jpg`,
        description : `“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        name : `John Tarkpor`,
        job : `Junior Front-end Developer`
    }
];
const image = document.querySelector('.image-div');
const description = document.querySelector('.description');
const names = document.querySelector('.name');
const jobs = document.querySelector('.job');

let counter = 0

function checking() {
    data.forEach((slides)=>{
        if (slides.id === counter) {
            image.style.backgroundImage = `url(${slides.image})`
            description.textContent = slides.description
            names.textContent = slides.name
            jobs.textContent = slides.job;
        }
    })
}
window.addEventListener('load', checking);

function prev() {
    counter--
    checking()
    if (counter === -1) {
        counter = data.length-1
        checking()
    }
}
function next() {
    counter++
    checking()
    if (counter === data.length) {
        counter = 0
        checking()
    }
}