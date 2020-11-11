<<<<<<< HEAD
function pageLoad() {
    // Scrolling to set page position
    try {
        let id = sessionStorage.getItem("pagePositionElemID");
        scrollToId(id);        
        // Updating set page position to null
        setPagePosition();
    }
    catch(err) {
        console.log("Failed to access session storage.");
    }
}

function setPagePosition(id=null) {
    sessionStorage.setItem("pagePositionElemID", id);
=======
function scrollToAboutMe() {
    scrollToId('about-me-lb');
>>>>>>> parent of ff28c65... Added Projects File (Unfilled)
}

function scrollToId(id) {
    document.getElementById(id).scrollIntoView(true);
}

function goToHomePage() {
    let filename = (window.location.href).split('\\').pop().split('/').pop();
    if(filename == "index.html")
    {
         scrollToId("body");   
    }
    else
    {
        window.location.href = "index.html";
    }
}

function saveToLocalStorage(id, value) {
    if (value != "on") {
        localStorage.setItem(id.slice(0, -5), value);
    }
    else {
        localStorage.setItem(id.slice(0, -5), document.getElementById(id).checked);
    }
}

