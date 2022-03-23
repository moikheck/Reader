var page = 0;
    
var prevBtn
var nextBtn
var book
var chapter

var paper1
var paper2
var paper3
var paper4
var paper5
var paper6
var paper7
var paper8
var paper9
var paper10
var pageList



// Business Logic
let currentLocation = 1
let numOfPapers = 10
let maxLocation = numOfPapers + 1


$(document).ready(function($) {
    prevBtn = document.getElementById("prev-btn")
    nextBtn = document.getElementById("next-btn")
    book = document.getElementById("book")
    chapter = document.getElementById("chapter-cover")
    
    paper1 = document.getElementById("p1")
    paper2 = document.getElementById("p2")
    pageList = [document.getElementById("page1"), document.getElementById("page2"),
                        document.getElementById("page3")]
    
    // Event Listener
    prevBtn.addEventListener("click", goPrevPage)
    nextBtn.addEventListener("click", goNextPage)
    
})

function openBook() {
    book.style.transform = "translateX(50%)"
    prevBtn.style.transform = "translateX(-180px)"
    nextBtn.style.transform = "translateX(180px)"
    prevBtn.style.display = "inherit"
    nextBtn.style.display = "inherit"
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)"
        currentLocation = 1
        page = 0
    } else {
        book.style.transform = "translateX(100%)"
        currentLocation = 11
        page = 20
    }
    if(isAtBeginning) {
        prevBtn.style.display = "none"
        nextBtn.style.display = "inherit"
    } else {
        nextBtn.style.display = "none"
        prevBtn.style.display = "inherit"
    }
    
    prevBtn.style.transform = "translateX(0px)"
    nextBtn.style.transform = "translateX(0px)"
    chapter.style.transition = "transform .5s"
    chapter.style.transform = "scale(1)"
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        prevBtn.style.display = "inherit"
        nextBtn.style.display = "inherit"
        page += 2
        switch(currentLocation) {
            case 1:
                openBook()
                paper1.classList.add("flipped")
                paper1.style.zIndex = 1
                currentLocation++
                break
            case 2:
                paper2.classList.add("flipped")
                paper2.style.zIndex = 2
                currentLocation++
                break
            default:
                throw new Error("unknown state")
        }
        if (currentLocation > numOfPapers) {
            closeBook(false)
        }
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        var mobile = false
        page -= 2
        if (window.innerWidth <= 750) {
            mobile = true
            page += 1
        }
        switch(currentLocation) {
            case 2:
                if (mobile && mobileFlip) {
                    document.getElementById("page2").innerHTML = chapterList[0]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    paper1.classList.remove("flipped")
                    paper1.style.zIndex = 10
                    currentLocation--
                    closeBook(true)
                }
                break
            case 3:
                if (mobile && mobileFlip) {
                    document.getElementById("page4").innerHTML = chapterList[2]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page2").innerHTML = chapterList[1]
                    paper2.classList.remove("flipped")
                    paper2.style.zIndex = 9
                    currentLocation--
                }
                break
            case 4:
                if (mobile && mobileFlip) {
                    document.getElementById("page6").innerHTML = chapterList[4]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page4").innerHTML = chapterList[3]
                    paper3.classList.remove("flipped")
                    paper3.style.zIndex = 8
                    currentLocation--
                }
                break
            case 5:
                if (mobile && mobileFlip) {
                    document.getElementById("page8").innerHTML = chapterList[6]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page6").innerHTML = chapterList[5]
                    paper4.classList.remove("flipped")
                    paper4.style.zIndex = 7
                    currentLocation--
                }
                break
            case 6:
                if (mobile && mobileFlip) {
                    document.getElementById("page10").innerHTML = chapterList[8]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page8").innerHTML = chapterList[7]
                    paper5.classList.remove("flipped")
                    paper5.style.zIndex = 6
                    currentLocation--
                }
                break
            case 7:
                if (mobile && mobileFlip) {
                    document.getElementById("page12").innerHTML = chapterList[10]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page10").innerHTML = chapterList[9]
                    paper6.classList.remove("flipped")
                    paper6.style.zIndex = 5
                    currentLocation--
                }
                break
            case 8:
                if (mobile && mobileFlip) {
                    document.getElementById("page14").innerHTML = chapterList[12]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page12").innerHTML = chapterList[11]
                    paper7.classList.remove("flipped")
                    paper7.style.zIndex = 4
                    currentLocation--
                }
                break
            case 9:
                if (mobile && mobileFlip) {
                    document.getElementById("page16").innerHTML = chapterList[14]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page14").innerHTML = chapterList[13]
                    paper8.classList.remove("flipped")
                    paper8.style.zIndex = 3
                    currentLocation--
                }
                break
            case 10:
                if (mobile && mobileFlip) {
                    document.getElementById("page18").innerHTML = chapterList[16]
                    mobileFlip = false
                } else {
                    mobileFlip = true
                    document.getElementById("page16").innerHTML = chapterList[15]
                    paper9.classList.remove("flipped")
                    paper9.style.zIndex = 2
                    currentLocation--
                }
                break
            case 11:
                paper10.classList.remove("flipped")
                paper10.style.zIndex = 1
                if (mobile) {
                    mobileFlip = true
                    document.getElementById("page18").innerHTML = chapterList[17]
                }
                currentLocation--
                break
            default:
                throw new Error("unknown state")
        }
        if ((chapterList[page - 2] == `` && !mobile) || (chapterList[page - 1] ==`` && mobile)) {
            mobileFlip = false
            checkPagesReverse(mobile)
        }
        if (currentLocation == numOfPapers) {
            openBook()
        }

        
    }
}