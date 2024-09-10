var currentFontSize = 16; // default
function incFontSize(){
    currentFontSize += 2;
    document.querySelector("div").style.fontSize = currentFontSize + "px";


    // OR : document.querySelector("div").classList.add("incSize");
}
document.querySelector(".increaseSizeBtn").onclick = incFontSize;


function decFontSize() {
    currentFontSize -=2;
    document.querySelector("div").style.fontSize = currentFontSize + "px";


    // OR : document.querySelector("div").classList.add("decSize");
}
document.querySelector(".decreaseSizeBtn").onclick = decFontSize;


function Normalize(){
    currentFontSize = 16;
    document.querySelector("div").style.fontSize = currentFontSize + "px";


    // OR : document.querySelector("div").classList.remove("incSize", "decSize");
}
document.querySelector(".normal").onclick = Normalize;