function scrollToAboutMe() {
    scrollToId('about-me-lb');
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

