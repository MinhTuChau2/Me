// References to DOM elements
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const book = document.getElementById('book');

const papers = [
    document.getElementById('p1'),
    document.getElementById('p2'),
    document.getElementById('p3'),
    document.getElementById('p4'),
    document.getElementById('p5'),
    document.getElementById('p6'),
    document.getElementById('p7'),
    document.getElementById('p8'),
    document.getElementById('p9'),
    document.getElementById('p10'),
    document.getElementById('p11'),
    document.getElementById('p12')
];

// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
const numOfPapers = papers.length;
const maxState = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isFirstPage) {
    if (isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 1:
                openBook();
                papers[0].classList.add("flipped");
                papers[0].style.zIndex = 1;
                break;
            default:
                const paperIndex = currentState - 1;
                papers[paperIndex].classList.add("flipped");
                papers[paperIndex].style.zIndex = currentState;
                break;
        }
        currentState++;
    }
}

function goPrevious() {
    if (currentState > 1) {
        switch (currentState) {
            case 2:
                closeBook(true);
                papers[0].classList.remove("flipped");
                papers[0].style.zIndex = numOfPapers;
                break;
            default:
                const paperIndex = currentState - 2;
                openBook();
                papers[paperIndex].classList.remove("flipped");
                papers[paperIndex].style.zIndex = numOfPapers - paperIndex;
                break;
        }
        currentState--;
    }
}
