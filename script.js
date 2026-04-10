var curId = "";
var curPg = 1;
var totPgs = 0;

function openBook(id) {
    curId = id;
    curPg = 1; 
    var book = document.getElementById(id);
    totPgs = book.getElementsByClassName('book-page').length;
    book.classList.add('active');
}

function closeBook(id) {
    var book = document.getElementById(id);
    book.classList.remove('active');
    
    var pgs = book.getElementsByClassName('book-page');
    for (var i = 0; i < pgs.length; i++) {
        pgs[i].classList.remove('flipped');
        pgs[i].style.zIndex = pgs.length - i;
    }
    curId = "";
}

function flipNext() {
    if (curPg <= totPgs) {
        var pageElement = document.getElementById(curId + "-page" + curPg);
        if (pageElement) {
            pageElement.classList.add('flipped');
            pageElement.style.zIndex = curPg;
            curPg++;
        }
    }
}

function flipPrev() {
    if (curPg > 1) {
        curPg--;
        var pageElement = document.getElementById(curId + "-page" + curPg);
        if (pageElement) {
            pageElement.classList.remove('flipped');
            pageElement.style.zIndex = totPgs - curPg + 1;
        }
    }
}
