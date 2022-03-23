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
    prevBtn = document.querySelector("#prev-btn")
    nextBtn = document.querySelector("#next-btn")
    book = document.querySelector("#book")
    chapter = document.querySelector("#chapter-cover")
    
    paper1 = document.querySelector("#p1")
    paper2 = document.querySelector("#p2")
    paper3 = document.querySelector("#p3")
    paper4 = document.querySelector("#p4")
    paper5 = document.querySelector("#p5")
    paper6 = document.querySelector("#p6")
    paper7 = document.querySelector("#p7")
    paper8 = document.querySelector("#p8")
    paper9 = document.querySelector("#p9")
    paper10 = document.querySelector("#p10")
    pageList = [document.getElementById("page1"), document.getElementById("page2"),
                        document.getElementById("page3"), document.getElementById("page4"),
                        document.getElementById("page5"), document.getElementById("page6"),
                        document.getElementById("page7"), document.getElementById("page8"),
                        document.getElementById("page9"), document.getElementById("page10"), 
                        document.getElementById("page11"), document.getElementById("page12"), 
                        document.getElementById("page13"), document.getElementById("page14"), 
                        document.getElementById("page15"), document.getElementById("page16"), 
                        document.getElementById("page17"), document.getElementById("page18")]
    
    // Event Listener
    prevBtn.addEventListener("click", goPrevPage)
    nextBtn.addEventListener("click", goNextPage)

    loadDropDownContent()

    if (window.innerWidth <= 750) {
        loadChapter(1, true)
    }
    else {
        loadChapter(1, false)
    }
    
})




function openBook() {
    if (window.innerWidth > 750) {
        book.style.transform = "translateX(50%)"
        prevBtn.style.transform = "translateX(-180px)"
        nextBtn.style.transform = "translateX(180px)"
        chapter.style.transition = "0s"
        chapter.style.transform = "scale(0)"
    }
    prevBtn.style.display = "inherit"
    nextBtn.style.display = "inherit"
}

function closeBook(isAtBeginning) {
    if (window.innerWidth > 750) {
        if(isAtBeginning) {
            book.style.transform = "translateX(0%)"
            currentLocation = 1
            page = 0
        } else {
            book.style.transform = "translateX(100%)"
            currentLocation = 11
            page = 20
        }
    } else if (!isAtBeginning) {
        currentLocation = 11
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
        var mobile = false
        page += 2
        if (window.innerWidth <= 750) {
            mobile = true
            page -= 1
        }
        switch(currentLocation) {
            case 1:
                openBook()
                paper1.classList.add("flipped")
                paper1.style.zIndex = 1
                if (mobile) {
                    document.getElementById("page2").innerHTML = chapterList[0]
                    mobileFlip = false
                }
                currentLocation++
                break
            case 2:
                if (mobile && !mobileFlip) {
                    document.getElementById("page2").innerHTML = chapterList[1]
                    mobileFlip = true
                } else {
                    paper2.classList.add("flipped")
                    paper2.style.zIndex = 2
                    if (mobile) {
                        document.getElementById("page4").innerHTML = chapterList[2]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 3:
                if (mobile && !mobileFlip) {
                    document.getElementById("page4").innerHTML = chapterList[3]
                    mobileFlip = true
                } else {
                    paper3.classList.add("flipped")
                    paper3.style.zIndex = 3
                    if (mobile) {
                        document.getElementById("page6").innerHTML = chapterList[4]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 4:
                if (mobile && !mobileFlip) {
                    document.getElementById("page6").innerHTML = chapterList[5]
                    mobileFlip = true
                } else {
                    paper4.classList.add("flipped")
                    paper4.style.zIndex = 4
                    if (mobile) {
                        document.getElementById("page8").innerHTML = chapterList[6]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 5:
                if (mobile && !mobileFlip) {
                    document.getElementById("page8").innerHTML = chapterList[7]
                    mobileFlip = true
                } else {
                    paper5.classList.add("flipped")
                    paper5.style.zIndex = 5
                    if (mobile) {
                        document.getElementById("page10").innerHTML = chapterList[8]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 6:
                if (mobile && !mobileFlip) {
                    document.getElementById("page10").innerHTML = chapterList[9]
                    mobileFlip = true
                } else {
                    paper6.classList.add("flipped")
                    paper6.style.zIndex = 6
                    if (mobile) {
                        document.getElementById("page12").innerHTML = chapterList[10]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 7:
                if (mobile && !mobileFlip) {
                    document.getElementById("page12").innerHTML = chapterList[11]
                    mobileFlip = true
                } else {
                    paper7.classList.add("flipped")
                    paper7.style.zIndex = 7
                    if (mobile) {
                        document.getElementById("page14").innerHTML = chapterList[12]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 8:
                if (mobile && !mobileFlip) {
                    document.getElementById("page14").innerHTML = chapterList[13]
                    mobileFlip = true
                } else {
                    paper8.classList.add("flipped")
                    paper8.style.zIndex = 8
                    if (mobile) {
                        document.getElementById("page16").innerHTML = chapterList[14]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 9:
                if (mobile && !mobileFlip) {
                    document.getElementById("page16").innerHTML = chapterList[15]
                    mobileFlip = true
                } else {
                    paper9.classList.add("flipped")
                    paper9.style.zIndex = 9
                    if (mobile) {
                        document.getElementById("page18").innerHTML = chapterList[16]
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            case 10:
                if (mobile && !mobileFlip) {
                    document.getElementById("page18").innerHTML = chapterList[17]
                    mobileFlip = true
                } else {
                    paper10.classList.add("flipped")
                    paper10.style.zIndex = 10
                    if (mobile) {
                        mobileFlip = false
                    }
                    currentLocation++
                }
                break
            default:
                throw new Error("unknown state")
        }
        if ((chapterList[page - 2] == `` && !mobile) || (chapterList[page - 1] ==`` && mobile)) {
            mobileFlip = true
            currentLocation++
            checkPagesForward(mobile)
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

function changeChapter() {
    resetBook()
    if (window.innerWidth <= 750) {
        chapterValue = parseInt(document.getElementById("chapter-mobile").value)
        loadChapter(parseInt(document.getElementById("chapter-mobile").value), true)
    }
    else {
        if (parseInt(document.getElementById("chapter-back").value) == chapterValue) {
            chapterValue = parseInt(document.getElementById("chapter-cover").value)
            loadChapter(parseInt(document.getElementById("chapter-cover").value), false)
        }
        else {
            chapterValue = parseInt(document.getElementById("chapter-back").value)
            loadChapter(parseInt(document.getElementById("chapter-back").value), false)
        }
    }
    document.getElementById("chapter-back").value = chapterValue
    document.getElementById("chapter-cover").value = chapterValue
    document.getElementById("chapter-mobile").value = chapterValue

}

function resetBook() {
    currentLocation = 1
    page = 0
    paper10.classList.remove("flipped")
    paper10.style.zIndex = 1
    paper9.classList.remove("flipped")
    paper9.style.zIndex = 2
    paper8.classList.remove("flipped")
    paper8.style.zIndex = 3
    paper7.classList.remove("flipped")
    paper7.style.zIndex = 4
    paper6.classList.remove("flipped")
    paper6.style.zIndex = 5
    paper5.classList.remove("flipped")
    paper5.style.zIndex = 6
    paper4.classList.remove("flipped")
    paper4.style.zIndex = 7
    paper3.classList.remove("flipped")
    paper3.style.zIndex = 8
    paper2.classList.remove("flipped")
    paper2.style.zIndex = 9
    paper1.classList.remove("flipped")
    paper1.style.zIndex = 10
    mobileFlip = false

    
    closeBook(true)
}

function loadDropDownContent() {
    document.getElementById("chapter-mobile").innerHTML = chapterSelection
    document.getElementById("chapter-cover").innerHTML = chapterSelection
    document.getElementById("chapter-back").innerHTML = chapterSelection
}

function checkPagesForward(mobile) {
    for (item in chapterList) {
    }
    if (chapterList[16] === `` && (mobileFlip || !mobile)) {
        paper9.classList.add("flipped")
        paper9.style.zIndex = 9
        paper10.classList.add("flipped")
        paper10.style.zIndex = 10
        currentLocation ++
        page = 19
        closeBook(false)
    }
    if (chapterList[14] === `` && (mobileFlip || !mobile)) {
        paper8.classList.add("flipped")
        paper8.style.zIndex = 8
        currentLocation ++
    }
    if (chapterList[12] === `` && (mobileFlip || !mobile)) {
        paper7.classList.add("flipped")
        paper7.style.zIndex = 7
        currentLocation ++
    }
    if (chapterList[10] === `` && (mobileFlip || !mobile)) {
        paper6.classList.add("flipped")
        paper6.style.zIndex = 6
        currentLocation ++
    }
    if (chapterList[8] === `` && (mobileFlip || !mobile)) {
        paper5.classList.add("flipped")
        paper5.style.zIndex = 5
        currentLocation ++
    }
}

function checkPagesReverse(mobile) {
    if (chapterList[16] === `` && (!mobileFlip || !mobile)) {
        paper9.classList.remove("flipped")
        paper9.style.zIndex = 2
        paper10.classList.remove("flipped")
        paper10.style.zIndex = 1
        currentLocation --
        page -= 2
        openBook()
        
    }
    if (chapterList[14] === `` && (!mobileFlip || !mobile)) {
        paper8.classList.remove("flipped")
        paper8.style.zIndex = 3
        currentLocation --
        page -= 2
    }
    if (chapterList[12] === `` && (!mobileFlip || !mobile)) {
        paper7.classList.remove("flipped")
        paper7.style.zIndex = 4
        currentLocation --
        page -= 2
    }
    if (chapterList[10] === `` && (!mobileFlip || !mobile)) {
        paper6.classList.remove("flipped")
        paper6.style.zIndex = 5
        currentLocation --
        page -= 2
    }
    if (chapterList[8] === `` && (!mobileFlip || !mobile)) {
        paper5.classList.remove("flipped")
        paper5.style.zIndex = 6
        currentLocation --
        page -= 2
    }

    if (mobile && chapterList[page - 1] ==`` && chapterList[page - 2] != ``) {
        mobileFlip = false
        pageList[page - 1].innerHTML = chapterList[page - 2]
        page--
    }
    else if (mobile){
        mobileFlip = true
    }
}


var chapterList = []
var chapterValue = 1

const chapterSelection = `  <option value="1">Chapter 1</option>
                                <option value="2">Chapter 2</option>
                                <option value="3">Chapter 3</option>
                                <option value="4">Chapter 4</option>
                                <option value="5">Chapter 5</option>
                                <option value="6">Chapter 6</option>
                                <option value="7">Chapter 7</option>
                                <option value="8">Chapter 8</option>
                                <option value="9">Chapter 9</option>
                                <option value="2">Chapter 10</option>
                                <option value="11">Chapter 11</option>
                                <option value="12">Chapter 12</option>
                                <option value="13">Chapter 13</option>
                                <option value="14">Chapter 14</option>
                                <option value="15">Chapter 15</option>
                                <option value="16">Chapter 16</option>
                                <option value="17">Chapter 17</option>
                                <option value="18">Chapter 18</option>
                                <option value="19">Chapter 19</option>
                                <option value="20">Chapter 20</option>`

var mobileFlip = false


const ch1p1 = `1`
const ch1p1mobile = `1mobile`
const ch1p2 = `2`
const ch1p2mobile = `2mobile`
const ch1p3 = `3`
const ch1p3mobile = `3mobile`
const ch1p4 = `4`
const ch1p4mobile = `4mobile`
const ch1p5 = `5`
const ch1p5mobile = `5mobile`
const ch1p6 = `6`
const ch1p6mobile = `6mobile`
const ch1p7 = `7`
const ch1p7mobile = `7mobile`
const ch1p8 = `8`
const ch1p8mobile = `8mobile`
const ch1p9 = `9`
const ch1p9mobile = `9mobile`
const ch1p10 = `10`
const ch1p10mobile = `10mobile`
const ch1p11 = `11`
const ch1p11mobile = `11mobile`
const ch1p12 = `12`
const ch1p12mobile = `12mobile`
const ch1p13 = `13`
const ch1p13mobile = `13mobile`
const ch1p14 = `14`
const ch1p14mobile = `14mobile`
const ch1p15 = `15`
const ch1p15mobile = `15mobile`
const ch1p16 = `16`
const ch1p16mobile = `16mobile`
const ch1p17 = `17`
const ch1p17mobile = `17mobile`
const ch1p18 = `18`
const ch1p18mobile = `18mobile`
const ch1 = [ch1p1, ch1p2, ch1p3, ch1p4, ch1p5, ch1p6, ch1p7, ch1p8, ch1p9, ch1p10, ch1p11, ch1p12, ch1p13, ch1p14, ch1p15, ch1p16, ch1p17, ch1p18]
const ch1mobile = [ch1p1mobile, ch1p2mobile, ch1p3mobile, ch1p4mobile, ch1p5mobile, ch1p6mobile, ch1p7mobile, ch1p8mobile, ch1p9mobile, ch1p10mobile, ch1p11mobile, ch1p12mobile, ch1p13mobile, ch1p14mobile, ch1p15mobile, ch1p16mobile, ch1p17mobile, ch1p18mobile]

const ch2p1 = `1`
const ch2p1mobile = `1mobile`
const ch2p2 = `2`
const ch2p2mobile = `2mobile`
const ch2p3 = `3`
const ch2p3mobile = `3mobile`
const ch2p4 = `4`
const ch2p4mobile = `4mobile`
const ch2p5 = `5`
const ch2p5mobile = `5mobile`
const ch2p6 = `6`
const ch2p6mobile = `6mobile`
const ch2p7 = `7`
const ch2p7mobile = `7mobile`
const ch2p8 = `8`
const ch2p8mobile = `8mobile`
const ch2p9 = `9`
const ch2p9mobile = `9mobile`
const ch2p10 = `10`
const ch2p10mobile = `10mobile`
const ch2p11 = `11`
const ch2p11mobile = `11mobile`
const ch2p12 = `12`
const ch2p12mobile = `12mobile`
const ch2p13 = `13`
const ch2p13mobile = `13mobile`
const ch2p14 = `14`
const ch2p14mobile = `14mobile`
const ch2p15 = `15`
const ch2p15mobile = `15mobile`
const ch2p16 = `16`
const ch2p16mobile = `16mobile`
const ch2p17 = `17`
const ch2p17mobile = `17mobile`
const ch2p18 = `18`
const ch2p18mobile = `18mobile`
const ch2 = [ch2p1, ch2p2, ch2p3, ch2p4, ch2p5, ch2p6, ch2p7, ch2p8, ch2p9, ch2p10, ch2p11, ch2p12, ch2p13, ch2p14, ch2p15, ch2p16, ch2p17, ch2p18]
const ch2mobile = [ch2p1mobile, ch2p2mobile, ch2p3mobile, ch2p4mobile, ch2p5mobile, ch2p6mobile, ch2p7mobile, ch2p8mobile, ch2p9mobile, ch2p10mobile, ch2p11mobile, ch2p12mobile, ch2p13mobile, ch2p14mobile, ch2p15mobile, ch2p16mobile, ch2p17mobile, ch2p18mobile]

const ch3p1 = `1`
const ch3p1mobile = `1mobile`
const ch3p2 = `2`
const ch3p2mobile = `2mobile`
const ch3p3 = `3`
const ch3p3mobile = `3mobile`
const ch3p4 = `4`
const ch3p4mobile = `4mobile`
const ch3p5 = `5`
const ch3p5mobile = `5mobile`
const ch3p6 = `6`
const ch3p6mobile = `6mobile`
const ch3p7 = `7`
const ch3p7mobile = `7mobile`
const ch3p8 = `8`
const ch3p8mobile = `8mobile`
const ch3p9 = `9`
const ch3p9mobile = `9mobile`
const ch3p10 = `10`
const ch3p10mobile = `10mobile`
const ch3p11 = `11`
const ch3p11mobile = `11mobile`
const ch3p12 = `12`
const ch3p12mobile = `12mobile`
const ch3p13 = `13`
const ch3p13mobile = `13mobile`
const ch3p14 = `14`
const ch3p14mobile = `14mobile`
const ch3p15 = `15`
const ch3p15mobile = `15mobile`
const ch3p16 = `16`
const ch3p16mobile = `16mobile`
const ch3p17 = `17`
const ch3p17mobile = `17mobile`
const ch3p18 = `18`
const ch3p18mobile = `18mobile`
const ch3 = [ch3p1, ch3p2, ch3p3, ch3p4, ch3p5, ch3p6, ch3p7, ch3p8, ch3p9, ch3p10, ch3p11, ch3p12, ch3p13, ch3p14, ch3p15, ch3p16, ch3p17, ch3p18]
const ch3mobile = [ch3p1mobile, ch3p2mobile, ch3p3mobile, ch3p4mobile, ch3p5mobile, ch3p6mobile, ch3p7mobile, ch3p8mobile, ch3p9mobile, ch3p10mobile, ch3p11mobile, ch3p12mobile, ch3p13mobile, ch3p14mobile, ch3p15mobile, ch3p16mobile, ch3p17mobile, ch3p18mobile]

const ch4p1 = `1`
const ch4p1mobile = `1mobile`
const ch4p2 = `2`
const ch4p2mobile = `2mobile`
const ch4p3 = `3`
const ch4p3mobile = `3mobile`
const ch4p4 = `4`
const ch4p4mobile = `4mobile`
const ch4p5 = `5`
const ch4p5mobile = `5mobile`
const ch4p6 = `6`
const ch4p6mobile = `6mobile`
const ch4p7 = `7`
const ch4p7mobile = `7mobile`
const ch4p8 = `8`
const ch4p8mobile = `8mobile`
const ch4p9 = `9`
const ch4p9mobile = `9mobile`
const ch4p10 = `10`
const ch4p10mobile = `10mobile`
const ch4p11 = `11`
const ch4p11mobile = `11mobile`
const ch4p12 = `12`
const ch4p12mobile = `12mobile`
const ch4p13 = `13`
const ch4p13mobile = `13mobile`
const ch4p14 = `14`
const ch4p14mobile = `14mobile`
const ch4p15 = `15`
const ch4p15mobile = `15mobile`
const ch4p16 = `16`
const ch4p16mobile = `16mobile`
const ch4p17 = `17`
const ch4p17mobile = `17mobile`
const ch4p18 = `18`
const ch4p18mobile = `18mobile`
const ch4 = [ch4p1, ch4p2, ch4p3, ch4p4, ch4p5, ch4p6, ch4p7, ch4p8, ch4p9, ch4p10, ch4p11, ch4p12, ch4p13, ch4p14, ch4p15, ch4p16, ch4p17, ch4p18]
const ch4mobile = [ch4p1mobile, ch4p2mobile, ch4p3mobile, ch4p4mobile, ch4p5mobile, ch4p6mobile, ch4p7mobile, ch4p8mobile, ch4p9mobile, ch4p10mobile, ch4p11mobile, ch4p12mobile, ch4p13mobile, ch4p14mobile, ch4p15mobile, ch4p16mobile, ch4p17mobile, ch4p18mobile]

const ch5p1 = `1`
const ch5p1mobile = `1mobile`
const ch5p2 = `2`
const ch5p2mobile = `2mobile`
const ch5p3 = `3`
const ch5p3mobile = `3mobile`
const ch5p4 = `4`
const ch5p4mobile = `4mobile`
const ch5p5 = `5`
const ch5p5mobile = `5mobile`
const ch5p6 = `6`
const ch5p6mobile = `6mobile`
const ch5p7 = `7`
const ch5p7mobile = `7mobile`
const ch5p8 = `8`
const ch5p8mobile = `8mobile`
const ch5p9 = `9`
const ch5p9mobile = `9mobile`
const ch5p10 = `10`
const ch5p10mobile = `10mobile`
const ch5p11 = `11`
const ch5p11mobile = `11mobile`
const ch5p12 = `12`
const ch5p12mobile = `12mobile`
const ch5p13 = `13`
const ch5p13mobile = `13mobile`
const ch5p14 = `14`
const ch5p14mobile = `14mobile`
const ch5p15 = `15`
const ch5p15mobile = `15mobile`
const ch5p16 = `16`
const ch5p16mobile = `16mobile`
const ch5p17 = `17`
const ch5p17mobile = `17mobile`
const ch5p18 = `18`
const ch5p18mobile = `18mobile`
const ch5 = [ch5p1, ch5p2, ch5p3, ch5p4, ch5p5, ch5p6, ch5p7, ch5p8, ch5p9, ch5p10, ch5p11, ch5p12, ch5p13, ch5p14, ch5p15, ch5p16, ch5p17, ch5p18]
const ch5mobile = [ch5p1mobile, ch5p2mobile, ch5p3mobile, ch5p4mobile, ch5p5mobile, ch5p6mobile, ch5p7mobile, ch5p8mobile, ch5p9mobile, ch5p10mobile, ch5p11mobile, ch5p12mobile, ch5p13mobile, ch5p14mobile, ch5p15mobile, ch5p16mobile, ch5p17mobile, ch5p18mobile]

const ch6p1 = `1`
const ch6p1mobile = `1mobile`
const ch6p2 = `2`
const ch6p2mobile = `2mobile`
const ch6p3 = `3`
const ch6p3mobile = `3mobile`
const ch6p4 = `4`
const ch6p4mobile = `4mobile`
const ch6p5 = `5`
const ch6p5mobile = `5mobile`
const ch6p6 = `6`
const ch6p6mobile = `6mobile`
const ch6p7 = `7`
const ch6p7mobile = `7mobile`
const ch6p8 = `8`
const ch6p8mobile = `8mobile`
const ch6p9 = `9`
const ch6p9mobile = `9mobile`
const ch6p10 = `10`
const ch6p10mobile = `10mobile`
const ch6p11 = `11`
const ch6p11mobile = `11mobile`
const ch6p12 = `12`
const ch6p12mobile = `12mobile`
const ch6p13 = `13`
const ch6p13mobile = `13mobile`
const ch6p14 = `14`
const ch6p14mobile = `14mobile`
const ch6p15 = `15`
const ch6p15mobile = `15mobile`
const ch6p16 = `16`
const ch6p16mobile = `16mobile`
const ch6p17 = `17`
const ch6p17mobile = `17mobile`
const ch6p18 = `18`
const ch6p18mobile = `18mobile`
const ch6 = [ch6p1, ch6p2, ch6p3, ch6p4, ch6p5, ch6p6, ch6p7, ch6p8, ch6p9, ch6p10, ch6p11, ch6p12, ch6p13, ch6p14, ch6p15, ch6p16, ch6p17, ch6p18]
const ch6mobile = [ch6p1mobile, ch6p2mobile, ch6p3mobile, ch6p4mobile, ch6p5mobile, ch6p6mobile, ch6p7mobile, ch6p8mobile, ch6p9mobile, ch6p10mobile, ch6p11mobile, ch6p12mobile, ch6p13mobile, ch6p14mobile, ch6p15mobile, ch6p16mobile, ch6p17mobile, ch6p18mobile]

const ch7p1 = `1`
const ch7p1mobile = `1mobile`
const ch7p2 = `2`
const ch7p2mobile = `2mobile`
const ch7p3 = `3`
const ch7p3mobile = `3mobile`
const ch7p4 = `4`
const ch7p4mobile = `4mobile`
const ch7p5 = `5`
const ch7p5mobile = `5mobile`
const ch7p6 = `6`
const ch7p6mobile = `6mobile`
const ch7p7 = `7`
const ch7p7mobile = `7mobile`
const ch7p8 = `8`
const ch7p8mobile = `8mobile`
const ch7p9 = `9`
const ch7p9mobile = `9mobile`
const ch7p10 = `10`
const ch7p10mobile = `10mobile`
const ch7p11 = `11`
const ch7p11mobile = `11mobile`
const ch7p12 = `12`
const ch7p12mobile = `12mobile`
const ch7p13 = `13`
const ch7p13mobile = `13mobile`
const ch7p14 = `14`
const ch7p14mobile = `14mobile`
const ch7p15 = `15`
const ch7p15mobile = `15mobile`
const ch7p16 = `16`
const ch7p16mobile = `16mobile`
const ch7p17 = `17`
const ch7p17mobile = `17mobile`
const ch7p18 = `18`
const ch7p18mobile = `18mobile`
const ch7 = [ch7p1, ch7p2, ch7p3, ch7p4, ch7p5, ch7p6, ch7p7, ch7p8, ch7p9, ch7p10, ch7p11, ch7p12, ch7p13, ch7p14, ch7p15, ch7p16, ch7p17, ch7p18]
const ch7mobile = [ch7p1mobile, ch7p2mobile, ch7p3mobile, ch7p4mobile, ch7p5mobile, ch7p6mobile, ch7p7mobile, ch7p8mobile, ch7p9mobile, ch7p10mobile, ch7p11mobile, ch7p12mobile, ch7p13mobile, ch7p14mobile, ch7p15mobile, ch7p16mobile, ch7p17mobile, ch7p18mobile]

const ch8p1 = `1`
const ch8p1mobile = `1mobile`
const ch8p2 = `2`
const ch8p2mobile = `2mobile`
const ch8p3 = `3`
const ch8p3mobile = `3mobile`
const ch8p4 = `4`
const ch8p4mobile = `4mobile`
const ch8p5 = `5`
const ch8p5mobile = `5mobile`
const ch8p6 = `6`
const ch8p6mobile = `6mobile`
const ch8p7 = `7`
const ch8p7mobile = `7mobile`
const ch8p8 = `8`
const ch8p8mobile = `8mobile`
const ch8p9 = `9`
const ch8p9mobile = `9mobile`
const ch8p10 = `10`
const ch8p10mobile = `10mobile`
const ch8p11 = `11`
const ch8p11mobile = `11mobile`
const ch8p12 = `12`
const ch8p12mobile = `12mobile`
const ch8p13 = `13`
const ch8p13mobile = `13mobile`
const ch8p14 = `14`
const ch8p14mobile = `14mobile`
const ch8p15 = `15`
const ch8p15mobile = `15mobile`
const ch8p16 = `16`
const ch8p16mobile = `16mobile`
const ch8p17 = `17`
const ch8p17mobile = `17mobile`
const ch8p18 = `18`
const ch8p18mobile = `18mobile`
const ch8 = [ch8p1, ch8p2, ch8p3, ch8p4, ch8p5, ch8p6, ch8p7, ch8p8, ch8p9, ch8p10, ch8p11, ch8p12, ch8p13, ch8p14, ch8p15, ch8p16, ch8p17, ch8p18]
const ch8mobile = [ch8p1mobile, ch8p2mobile, ch8p3mobile, ch8p4mobile, ch8p5mobile, ch8p6mobile, ch8p7mobile, ch8p8mobile, ch8p9mobile, ch8p10mobile, ch8p11mobile, ch8p12mobile, ch8p13mobile, ch8p14mobile, ch8p15mobile, ch8p16mobile, ch8p17mobile, ch8p18mobile]

const ch9p1 = `1`
const ch9p1mobile = `1mobile`
const ch9p2 = `2`
const ch9p2mobile = `2mobile`
const ch9p3 = `3`
const ch9p3mobile = `3mobile`
const ch9p4 = `4`
const ch9p4mobile = `4mobile`
const ch9p5 = `5`
const ch9p5mobile = `5mobile`
const ch9p6 = `6`
const ch9p6mobile = `6mobile`
const ch9p7 = `7`
const ch9p7mobile = `7mobile`
const ch9p8 = `8`
const ch9p8mobile = `8mobile`
const ch9p9 = `9`
const ch9p9mobile = `9mobile`
const ch9p10 = `10`
const ch9p10mobile = `10mobile`
const ch9p11 = `11`
const ch9p11mobile = `11mobile`
const ch9p12 = `12`
const ch9p12mobile = `12mobile`
const ch9p13 = `13`
const ch9p13mobile = `13mobile`
const ch9p14 = `14`
const ch9p14mobile = `14mobile`
const ch9p15 = `15`
const ch9p15mobile = `15mobile`
const ch9p16 = `16`
const ch9p16mobile = `16mobile`
const ch9p17 = `17`
const ch9p17mobile = `17mobile`
const ch9p18 = `18`
const ch9p18mobile = `18mobile`
const ch9 = [ch9p1, ch9p2, ch9p3, ch9p4, ch9p5, ch9p6, ch9p7, ch9p8, ch9p9, ch9p10, ch9p11, ch9p12, ch9p13, ch9p14, ch9p15, ch9p16, ch9p17, ch9p18]
const ch9mobile = [ch9p1mobile, ch9p2mobile, ch9p3mobile, ch9p4mobile, ch9p5mobile, ch9p6mobile, ch9p7mobile, ch9p8mobile, ch9p9mobile, ch9p10mobile, ch9p11mobile, ch9p12mobile, ch9p13mobile, ch9p14mobile, ch9p15mobile, ch9p16mobile, ch9p17mobile, ch9p18mobile]

const ch10p1 = `1`
const ch10p1mobile = `1mobile`
const ch10p2 = `2`
const ch10p2mobile = `2mobile`
const ch10p3 = `3`
const ch10p3mobile = `3mobile`
const ch10p4 = `4`
const ch10p4mobile = `4mobile`
const ch10p5 = `5`
const ch10p5mobile = `5mobile`
const ch10p6 = `6`
const ch10p6mobile = `6mobile`
const ch10p7 = `7`
const ch10p7mobile = `7mobile`
const ch10p8 = `8`
const ch10p8mobile = `8mobile`
const ch10p9 = `9`
const ch10p9mobile = `9mobile`
const ch10p10 = `10`
const ch10p10mobile = `10mobile`
const ch10p11 = `11`
const ch10p11mobile = `11mobile`
const ch10p12 = `12`
const ch10p12mobile = `12mobile`
const ch10p13 = `13`
const ch10p13mobile = `13mobile`
const ch10p14 = `14`
const ch10p14mobile = `14mobile`
const ch10p15 = `15`
const ch10p15mobile = `15mobile`
const ch10p16 = `16`
const ch10p16mobile = `16mobile`
const ch10p17 = `17`
const ch10p17mobile = `17mobile`
const ch10p18 = `18`
const ch10p18mobile = `18mobile`
const ch10 = [ch10p1, ch10p2, ch10p3, ch10p4, ch10p5, ch10p6, ch10p7, ch10p8, ch10p9, ch10p10, ch10p11, ch10p12, ch10p13, ch10p14, ch10p15, ch10p16, ch10p17, ch10p18]
const ch10mobile = [ch10p1mobile, ch10p2mobile, ch10p3mobile, ch10p4mobile, ch10p5mobile, ch10p6mobile, ch10p7mobile, ch10p8mobile, ch10p9mobile, ch10p10mobile, ch10p11mobile, ch10p12mobile, ch10p13mobile, ch10p14mobile, ch10p15mobile, ch10p16mobile, ch10p17mobile, ch10p18mobile]

const ch11p1 = `1`
const ch11p1mobile = `1mobile`
const ch11p2 = `2`
const ch11p2mobile = `2mobile`
const ch11p3 = `3`
const ch11p3mobile = `3mobile`
const ch11p4 = `4`
const ch11p4mobile = `4mobile`
const ch11p5 = `5`
const ch11p5mobile = `5mobile`
const ch11p6 = `6`
const ch11p6mobile = `6mobile`
const ch11p7 = `7`
const ch11p7mobile = `7mobile`
const ch11p8 = `8`
const ch11p8mobile = `8mobile`
const ch11p9 = `9`
const ch11p9mobile = `9mobile`
const ch11p10 = `10`
const ch11p10mobile = `10mobile`
const ch11p11 = `11`
const ch11p11mobile = `11mobile`
const ch11p12 = `12`
const ch11p12mobile = `12mobile`
const ch11p13 = `13`
const ch11p13mobile = `13mobile`
const ch11p14 = `14`
const ch11p14mobile = `14mobile`
const ch11p15 = `15`
const ch11p15mobile = `15mobile`
const ch11p16 = `16`
const ch11p16mobile = `16mobile`
const ch11p17 = `17`
const ch11p17mobile = `17mobile`
const ch11p18 = `18`
const ch11p18mobile = `18mobile`
const ch11 = [ch11p1, ch11p2, ch11p3, ch11p4, ch11p5, ch11p6, ch11p7, ch11p8, ch11p9, ch11p10, ch11p11, ch11p12, ch11p13, ch11p14, ch11p15, ch11p16, ch11p17, ch11p18]
const ch11mobile = [ch11p1mobile, ch11p2mobile, ch11p3mobile, ch11p4mobile, ch11p5mobile, ch11p6mobile, ch11p7mobile, ch11p8mobile, ch11p9mobile, ch11p10mobile, ch11p11mobile, ch11p12mobile, ch11p13mobile, ch11p14mobile, ch11p15mobile, ch11p16mobile, ch11p17mobile, ch11p18mobile]

const ch12p1 = `1`
const ch12p1mobile = `1mobile`
const ch12p2 = `2`
const ch12p2mobile = `2mobile`
const ch12p3 = `3`
const ch12p3mobile = `3mobile`
const ch12p4 = `4`
const ch12p4mobile = `4mobile`
const ch12p5 = `5`
const ch12p5mobile = `5mobile`
const ch12p6 = `6`
const ch12p6mobile = `6mobile`
const ch12p7 = `7`
const ch12p7mobile = `7mobile`
const ch12p8 = `8`
const ch12p8mobile = `8mobile`
const ch12p9 = `9`
const ch12p9mobile = `9mobile`
const ch12p10 = `10`
const ch12p10mobile = `10mobile`
const ch12p11 = `11`
const ch12p11mobile = `11mobile`
const ch12p12 = `12`
const ch12p12mobile = `12mobile`
const ch12p13 = `13`
const ch12p13mobile = `13mobile`
const ch12p14 = `14`
const ch12p14mobile = `14mobile`
const ch12p15 = `15`
const ch12p15mobile = `15mobile`
const ch12p16 = `16`
const ch12p16mobile = `16mobile`
const ch12p17 = `17`
const ch12p17mobile = `17mobile`
const ch12p18 = `18`
const ch12p18mobile = `18mobile`
const ch12 = [ch12p1, ch12p2, ch12p3, ch12p4, ch12p5, ch12p6, ch12p7, ch12p8, ch12p9, ch12p10, ch12p11, ch12p12, ch12p13, ch12p14, ch12p15, ch12p16, ch12p17, ch12p18]
const ch12mobile = [ch12p1mobile, ch12p2mobile, ch12p3mobile, ch12p4mobile, ch12p5mobile, ch12p6mobile, ch12p7mobile, ch12p8mobile, ch12p9mobile, ch12p10mobile, ch12p11mobile, ch12p12mobile, ch12p13mobile, ch12p14mobile, ch12p15mobile, ch12p16mobile, ch12p17mobile, ch12p18mobile]

const ch13p1 = `1`
const ch13p1mobile = `1mobile`
const ch13p2 = `2`
const ch13p2mobile = `2mobile`
const ch13p3 = `3`
const ch13p3mobile = `3mobile`
const ch13p4 = `4`
const ch13p4mobile = `4mobile`
const ch13p5 = `5`
const ch13p5mobile = `5mobile`
const ch13p6 = `6`
const ch13p6mobile = `6mobile`
const ch13p7 = `7`
const ch13p7mobile = `7mobile`
const ch13p8 = `8`
const ch13p8mobile = `8mobile`
const ch13p9 = `9`
const ch13p9mobile = `9mobile`
const ch13p10 = `10`
const ch13p10mobile = `10mobile`
const ch13p11 = `11`
const ch13p11mobile = `11mobile`
const ch13p12 = `12`
const ch13p12mobile = `12mobile`
const ch13p13 = `13`
const ch13p13mobile = `13mobile`
const ch13p14 = `14`
const ch13p14mobile = `14mobile`
const ch13p15 = `15`
const ch13p15mobile = `15mobile`
const ch13p16 = `16`
const ch13p16mobile = `16mobile`
const ch13p17 = `17`
const ch13p17mobile = `17mobile`
const ch13p18 = `18`
const ch13p18mobile = `18mobile`
const ch13 = [ch13p1, ch13p2, ch13p3, ch13p4, ch13p5, ch13p6, ch13p7, ch13p8, ch13p9, ch13p10, ch13p11, ch13p12, ch13p13, ch13p14, ch13p15, ch13p16, ch13p17, ch13p18]
const ch13mobile = [ch13p1mobile, ch13p2mobile, ch13p3mobile, ch13p4mobile, ch13p5mobile, ch13p6mobile, ch13p7mobile, ch13p8mobile, ch13p9mobile, ch13p10mobile, ch13p11mobile, ch13p12mobile, ch13p13mobile, ch13p14mobile, ch13p15mobile, ch13p16mobile, ch13p17mobile, ch13p18mobile]

const ch14p1 = `1`
const ch14p1mobile = `1mobile`
const ch14p2 = `2`
const ch14p2mobile = `2mobile`
const ch14p3 = `3`
const ch14p3mobile = `3mobile`
const ch14p4 = `4`
const ch14p4mobile = `4mobile`
const ch14p5 = `5`
const ch14p5mobile = `5mobile`
const ch14p6 = `6`
const ch14p6mobile = `6mobile`
const ch14p7 = `7`
const ch14p7mobile = `7mobile`
const ch14p8 = `8`
const ch14p8mobile = `8mobile`
const ch14p9 = `9`
const ch14p9mobile = `9mobile`
const ch14p10 = `10`
const ch14p10mobile = `10mobile`
const ch14p11 = `11`
const ch14p11mobile = `11mobile`
const ch14p12 = `12`
const ch14p12mobile = `12mobile`
const ch14p13 = `13`
const ch14p13mobile = `13mobile`
const ch14p14 = `14`
const ch14p14mobile = `14mobile`
const ch14p15 = `15`
const ch14p15mobile = `15mobile`
const ch14p16 = `16`
const ch14p16mobile = `16mobile`
const ch14p17 = `17`
const ch14p17mobile = `17mobile`
const ch14p18 = `18`
const ch14p18mobile = `18mobile`
const ch14 = [ch14p1, ch14p2, ch14p3, ch14p4, ch14p5, ch14p6, ch14p7, ch14p8, ch14p9, ch14p10, ch14p11, ch14p12, ch14p13, ch14p14, ch14p15, ch14p16, ch14p17, ch14p18]
const ch14mobile = [ch14p1mobile, ch14p2mobile, ch14p3mobile, ch14p4mobile, ch14p5mobile, ch14p6mobile, ch14p7mobile, ch14p8mobile, ch14p9mobile, ch14p10mobile, ch14p11mobile, ch14p12mobile, ch14p13mobile, ch14p14mobile, ch14p15mobile, ch14p16mobile, ch14p17mobile, ch14p18mobile]

const ch15p1 = `1`
const ch15p1mobile = `1mobile`
const ch15p2 = `2`
const ch15p2mobile = `2mobile`
const ch15p3 = `3`
const ch15p3mobile = `3mobile`
const ch15p4 = `4`
const ch15p4mobile = `4mobile`
const ch15p5 = `5`
const ch15p5mobile = `5mobile`
const ch15p6 = `6`
const ch15p6mobile = `6mobile`
const ch15p7 = `7`
const ch15p7mobile = `7mobile`
const ch15p8 = `8`
const ch15p8mobile = `8mobile`
const ch15p9 = `9`
const ch15p9mobile = `9mobile`
const ch15p10 = `10`
const ch15p10mobile = `10mobile`
const ch15p11 = `11`
const ch15p11mobile = `11mobile`
const ch15p12 = `12`
const ch15p12mobile = `12mobile`
const ch15p13 = `13`
const ch15p13mobile = `13mobile`
const ch15p14 = `14`
const ch15p14mobile = `14mobile`
const ch15p15 = `15`
const ch15p15mobile = `15mobile`
const ch15p16 = `16`
const ch15p16mobile = `16mobile`
const ch15p17 = `17`
const ch15p17mobile = `17mobile`
const ch15p18 = `18`
const ch15p18mobile = `18mobile`
const ch15 = [ch15p1, ch15p2, ch15p3, ch15p4, ch15p5, ch15p6, ch15p7, ch15p8, ch15p9, ch15p10, ch15p11, ch15p12, ch15p13, ch15p14, ch15p15, ch15p16, ch15p17, ch15p18]
const ch15mobile = [ch15p1mobile, ch15p2mobile, ch15p3mobile, ch15p4mobile, ch15p5mobile, ch15p6mobile, ch15p7mobile, ch15p8mobile, ch15p9mobile, ch15p10mobile, ch15p11mobile, ch15p12mobile, ch15p13mobile, ch15p14mobile, ch15p15mobile, ch15p16mobile, ch15p17mobile, ch15p18mobile]

const ch16p1 = `1`
const ch16p1mobile = `1mobile`
const ch16p2 = `2`
const ch16p2mobile = `2mobile`
const ch16p3 = `3`
const ch16p3mobile = `3mobile`
const ch16p4 = `4`
const ch16p4mobile = `4mobile`
const ch16p5 = `5`
const ch16p5mobile = `5mobile`
const ch16p6 = `6`
const ch16p6mobile = `6mobile`
const ch16p7 = `7`
const ch16p7mobile = `7mobile`
const ch16p8 = `8`
const ch16p8mobile = `8mobile`
const ch16p9 = `9`
const ch16p9mobile = `9mobile`
const ch16p10 = `10`
const ch16p10mobile = `10mobile`
const ch16p11 = `11`
const ch16p11mobile = `11mobile`
const ch16p12 = `12`
const ch16p12mobile = `12mobile`
const ch16p13 = `13`
const ch16p13mobile = `13mobile`
const ch16p14 = `14`
const ch16p14mobile = `14mobile`
const ch16p15 = `15`
const ch16p15mobile = `15mobile`
const ch16p16 = `16`
const ch16p16mobile = `16mobile`
const ch16p17 = `17`
const ch16p17mobile = `17mobile`
const ch16p18 = `18`
const ch16p18mobile = `18mobile`
const ch16 = [ch16p1, ch16p2, ch16p3, ch16p4, ch16p5, ch16p6, ch16p7, ch16p8, ch16p9, ch16p10, ch16p11, ch16p12, ch16p13, ch16p14, ch16p15, ch16p16, ch16p17, ch16p18]
const ch16mobile = [ch16p1mobile, ch16p2mobile, ch16p3mobile, ch16p4mobile, ch16p5mobile, ch16p6mobile, ch16p7mobile, ch16p8mobile, ch16p9mobile, ch16p10mobile, ch16p11mobile, ch16p12mobile, ch16p13mobile, ch16p14mobile, ch16p15mobile, ch16p16mobile, ch16p17mobile, ch16p18mobile]

const ch17p1 = `1`
const ch17p1mobile = `1mobile`
const ch17p2 = `2`
const ch17p2mobile = `2mobile`
const ch17p3 = `3`
const ch17p3mobile = `3mobile`
const ch17p4 = `4`
const ch17p4mobile = `4mobile`
const ch17p5 = `5`
const ch17p5mobile = `5mobile`
const ch17p6 = `6`
const ch17p6mobile = `6mobile`
const ch17p7 = `7`
const ch17p7mobile = `7mobile`
const ch17p8 = `8`
const ch17p8mobile = `8mobile`
const ch17p9 = `9`
const ch17p9mobile = `9mobile`
const ch17p10 = `10`
const ch17p10mobile = `10mobile`
const ch17p11 = `11`
const ch17p11mobile = `11mobile`
const ch17p12 = `12`
const ch17p12mobile = `12mobile`
const ch17p13 = `13`
const ch17p13mobile = `13mobile`
const ch17p14 = `14`
const ch17p14mobile = `14mobile`
const ch17p15 = `15`
const ch17p15mobile = `15mobile`
const ch17p16 = `16`
const ch17p16mobile = `16mobile`
const ch17p17 = `17`
const ch17p17mobile = `17mobile`
const ch17p18 = `18`
const ch17p18mobile = `18mobile`
const ch17 = [ch17p1, ch17p2, ch17p3, ch17p4, ch17p5, ch17p6, ch17p7, ch17p8, ch17p9, ch17p10, ch17p11, ch17p12, ch17p13, ch17p14, ch17p15, ch17p16, ch17p17, ch17p18]
const ch17mobile = [ch17p1mobile, ch17p2mobile, ch17p3mobile, ch17p4mobile, ch17p5mobile, ch17p6mobile, ch17p7mobile, ch17p8mobile, ch17p9mobile, ch17p10mobile, ch17p11mobile, ch17p12mobile, ch17p13mobile, ch17p14mobile, ch17p15mobile, ch17p16mobile, ch17p17mobile, ch17p18mobile]

const ch18p1 = `1`
const ch18p1mobile = `1mobile`
const ch18p2 = `2`
const ch18p2mobile = `2mobile`
const ch18p3 = `3`
const ch18p3mobile = `3mobile`
const ch18p4 = `4`
const ch18p4mobile = `4mobile`
const ch18p5 = `5`
const ch18p5mobile = `5mobile`
const ch18p6 = `6`
const ch18p6mobile = `6mobile`
const ch18p7 = `7`
const ch18p7mobile = `7mobile`
const ch18p8 = `8`
const ch18p8mobile = `8mobile`
const ch18p9 = `9`
const ch18p9mobile = `9mobile`
const ch18p10 = `10`
const ch18p10mobile = `10mobile`
const ch18p11 = `11`
const ch18p11mobile = `11mobile`
const ch18p12 = `12`
const ch18p12mobile = `12mobile`
const ch18p13 = `13`
const ch18p13mobile = `13mobile`
const ch18p14 = `14`
const ch18p14mobile = `14mobile`
const ch18p15 = `15`
const ch18p15mobile = `15mobile`
const ch18p16 = `16`
const ch18p16mobile = `16mobile`
const ch18p17 = `17`
const ch18p17mobile = `17mobile`
const ch18p18 = `18`
const ch18p18mobile = `18mobile`
const ch18 = [ch18p1, ch18p2, ch18p3, ch18p4, ch18p5, ch18p6, ch18p7, ch18p8, ch18p9, ch18p10, ch18p11, ch18p12, ch18p13, ch18p14, ch18p15, ch18p16, ch18p17, ch18p18]
const ch18mobile = [ch18p1mobile, ch18p2mobile, ch18p3mobile, ch18p4mobile, ch18p5mobile, ch18p6mobile, ch18p7mobile, ch18p8mobile, ch18p9mobile, ch18p10mobile, ch18p11mobile, ch18p12mobile, ch18p13mobile, ch18p14mobile, ch18p15mobile, ch18p16mobile, ch18p17mobile, ch18p18mobile]

const ch19p1 = `1`
const ch19p1mobile = `1mobile`
const ch19p2 = `2`
const ch19p2mobile = `2mobile`
const ch19p3 = `3`
const ch19p3mobile = `3mobile`
const ch19p4 = `4`
const ch19p4mobile = `4mobile`
const ch19p5 = `5`
const ch19p5mobile = `5mobile`
const ch19p6 = `6`
const ch19p6mobile = `6mobile`
const ch19p7 = `7`
const ch19p7mobile = `7mobile`
const ch19p8 = `8`
const ch19p8mobile = `8mobile`
const ch19p9 = `9`
const ch19p9mobile = `9mobile`
const ch19p10 = `10`
const ch19p10mobile = `10mobile`
const ch19p11 = `11`
const ch19p11mobile = `11mobile`
const ch19p12 = `12`
const ch19p12mobile = `12mobile`
const ch19p13 = `13`
const ch19p13mobile = `13mobile`
const ch19p14 = `14`
const ch19p14mobile = `14mobile`
const ch19p15 = `15`
const ch19p15mobile = `15mobile`
const ch19p16 = `16`
const ch19p16mobile = `16mobile`
const ch19p17 = `17`
const ch19p17mobile = `17mobile`
const ch19p18 = `18`
const ch19p18mobile = `18mobile`
const ch19 = [ch19p1, ch19p2, ch19p3, ch19p4, ch19p5, ch19p6, ch19p7, ch19p8, ch19p9, ch19p10, ch19p11, ch19p12, ch19p13, ch19p14, ch19p15, ch19p16, ch19p17, ch19p18]
const ch19mobile = [ch19p1mobile, ch19p2mobile, ch19p3mobile, ch19p4mobile, ch19p5mobile, ch19p6mobile, ch19p7mobile, ch19p8mobile, ch19p9mobile, ch19p10mobile, ch19p11mobile, ch19p12mobile, ch19p13mobile, ch19p14mobile, ch19p15mobile, ch19p16mobile, ch19p17mobile, ch19p18mobile]

const ch20p1 = `1`
const ch20p1mobile = `1mobile`
const ch20p2 = `2`
const ch20p2mobile = `2mobile`
const ch20p3 = `3`
const ch20p3mobile = `3mobile`
const ch20p4 = `4`
const ch20p4mobile = `4mobile`
const ch20p5 = `5`
const ch20p5mobile = `5mobile`
const ch20p6 = `6`
const ch20p6mobile = `6mobile`
const ch20p7 = `7`
const ch20p7mobile = `7mobile`
const ch20p8 = `8`
const ch20p8mobile = `8mobile`
const ch20p9 = `9`
const ch20p9mobile = `9mobile`
const ch20p10 = `10`
const ch20p10mobile = `10mobile`
const ch20p11 = `11`
const ch20p11mobile = `11mobile`
const ch20p12 = `12`
const ch20p12mobile = `12mobile`
const ch20p13 = `13`
const ch20p13mobile = `13mobile`
const ch20p14 = `14`
const ch20p14mobile = `14mobile`
const ch20p15 = `15`
const ch20p15mobile = `15mobile`
const ch20p16 = `16`
const ch20p16mobile = `16mobile`
const ch20p17 = `17`
const ch20p17mobile = `17mobile`
const ch20p18 = `18`
const ch20p18mobile = `18mobile`
const ch20 = [ch20p1, ch20p2, ch20p3, ch20p4, ch20p5, ch20p6, ch20p7, ch20p8, ch20p9, ch20p10, ch20p11, ch20p12, ch20p13, ch20p14, ch20p15, ch20p16, ch20p17, ch20p18]
const ch20mobile = [ch20p1mobile, ch20p2mobile, ch20p3mobile, ch20p4mobile, ch20p5mobile, ch20p6mobile, ch20p7mobile, ch20p8mobile, ch20p9mobile, ch20p10mobile, ch20p11mobile, ch20p12mobile, ch20p13mobile, ch20p14mobile, ch20p15mobile, ch20p16mobile, ch20p17mobile, ch20p18mobile]



function loadChapter(num, isMobile) {

    var toCopy = []
    switch (num) {
        case 1:
            if (isMobile)
                toCopy = ch1mobile
            else
                toCopy = ch1
            break
        case 2:
            if (isMobile)
                toCopy = ch2mobile
            else
                toCopy = ch2
            break
        case 3:
            if (isMobile)
                toCopy = ch3mobile
            else
                toCopy = ch3
            break
        case 4:
            if (isMobile)
                toCopy = ch4mobile
            else
                toCopy = ch4
            break
        case 5:
            if (isMobile)
                toCopy = ch5mobile
            else
                toCopy = ch5
            break
        case 6:
            if (isMobile)
                toCopy = ch6mobile
            else
                toCopy = ch6
            break
        case 7:
            if (isMobile)
                toCopy = ch7mobile
            else
                toCopy = ch7
            break
        case 8:
            if (isMobile)
                toCopy = ch8mobile
            else
                toCopy = ch8
            break
        case 9:
            if (isMobile)
                toCopy = ch9mobile
            else
                toCopy = ch9
            break
        case 10:
            if (isMobile)
                toCopy = ch10mobile
            else
                toCopy = ch10
            break
        case 11:
            if (isMobile)
                toCopy = ch11mobile
            else
                toCopy = ch11
            break
        case 12:
            if (isMobile)
                toCopy = ch12mobile
            else
                toCopy = ch12
            break
        case 13:
            if (isMobile)
                toCopy = ch13mobile
            else
                toCopy = ch13
            break
        case 14:
            if (isMobile)
                toCopy = ch14mobile
            else
                toCopy = ch14
            break
        case 15:
            if (isMobile)
                toCopy = ch15mobile
            else
                toCopy = ch15
            break
        case 16:
            if (isMobile)
                toCopy = ch16mobile
            else
                toCopy = ch16
            break
        case 17:
            if (isMobile)
                toCopy = ch17mobile
            else
                toCopy = ch17
            break
        case 18:
            if (isMobile)
                toCopy = ch18mobile
            else
                toCopy = ch18
            break
        case 19:
            if (isMobile)
                toCopy = ch19mobile
            else
                toCopy = ch19
            break
        case 20:
            if (isMobile)
                toCopy = ch20mobile
            else
                toCopy = ch20
            break
        default:
            if (isMobile)
                toCopy = ch1mobile
            else
                toCopy = ch1
            break

    }
    chapterList = toCopy
    document.getElementById("page1").innerHTML = toCopy[0]
    document.getElementById("page2").innerHTML = toCopy[1]
    document.getElementById("page3").innerHTML = toCopy[2]
    document.getElementById("page4").innerHTML = toCopy[3]
    document.getElementById("page5").innerHTML = toCopy[4]
    document.getElementById("page6").innerHTML = toCopy[5]
    document.getElementById("page7").innerHTML = toCopy[6]
    document.getElementById("page8").innerHTML = toCopy[7]
    document.getElementById("page9").innerHTML = toCopy[8]
    document.getElementById("page10").innerHTML = toCopy[9]
    document.getElementById("page11").innerHTML = toCopy[10]
    document.getElementById("page12").innerHTML = toCopy[11]
    document.getElementById("page13").innerHTML = toCopy[12]
    document.getElementById("page14").innerHTML = toCopy[13]
    document.getElementById("page15").innerHTML = toCopy[14]
    document.getElementById("page16").innerHTML = toCopy[15]
    document.getElementById("page17").innerHTML = toCopy[16]
    document.getElementById("page18").innerHTML = toCopy[17]
}