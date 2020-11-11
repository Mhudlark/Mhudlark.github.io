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
}

function scrollToId(id) {
    if(id != null && id != "null")
        document.getElementById(id).scrollIntoView(true);
    else
        document.getElementById("body").scrollIntoView(true);
}

function goToPage(fileName, id="body") {
    let currentFileName = getFileName(window.location.href);
    // If on current page: scroll to position
    if(currentFileName == fileName)
    {
         scrollToId(id);
    }
    // If on another page: pass in page position on that page and change page
    else
    {
        window.location.href = fileName;
        setPagePosition(id);
    }
}

function getFileName(filepath) {
    return (filepath).split('\\').pop().split('/').pop();
}

