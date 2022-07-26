const data = [
    {
        image : `images/image-tanya.jpg`,
        description : `“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”`,
        name : `Tanya Sinclair`,
        job : `UX Engineer`
    },
    {
        image : `images/image-john.jpg`,
        description : `“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        name : `John Tarkpor`,
        job : `Junior Front-end Developer`
    }
];
const image = document.querySelector('.main-img');
const description = document.querySelector('.description');
const names = document.querySelector('.name');
const jobs = document.querySelector('.job');

let counter = 0

checking()

function checking() {
    image.setAttribute("src", data[counter].image);
    setTimeout(() => {
        description.textContent = data[counter].description
        names.textContent = data[counter].name
        jobs.textContent = data[counter].job;
    }, 200);
}

function prev() {
    counter--
    if (counter === -1) {
        counter = data.length-1
    }
    checking()
}
function next() {
    counter++
    if (counter === data.length) {
        counter = 0
    }
    checking()
}