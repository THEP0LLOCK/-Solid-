const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("Clicked!");
}

link.addEventListener("click", handleLinkClick);

handleLinkClick({})
