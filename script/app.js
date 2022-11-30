function myF() {
    document.getElementById("abmd").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("ph").style.display = "none";
    document.getElementById("photo").style.transform = "translate(0, 0)";
}

function myS() {
    document.getElementById("abmd").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("ph").style.display = "none";
    document.getElementById("photo").style.transform = "translate(0, 0)";
}

function myP() {
    document.getElementById("ph").style.display = "block";
    document.getElementById("abmd").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("photo").style.transform = "translate(0, 150px)";

}

console.log('hello');