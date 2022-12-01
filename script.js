var divs = [
    "first",
    "second",
    "third",
    "fourth",
    "five"
    ];

function customToolTip(value){
    let cusToolTip = "";
    cusToolTip = document.createElement("div");
    cusToolTip.className = "custom-tooltip";
    cusToolTip.textContent = value;
    return cusToolTip;
}

function showDetails(e){
    let ele = e.target;
    ele.append(
        customToolTip(ele.id)
    );
}

function hideDetails(e){
    let ele = e.target;
    ele.removeChild(
        ele.lastChild
    );
}

divs.forEach((div) => {
    document.getElementById(div).addEventListener("mouseover", showDetails);
    document.getElementById(div).addEventListener("mouseout", hideDetails);
});
