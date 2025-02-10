function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

function changeColor(el){
    let pixelId=el.getAttribute("data-pixel-id");
    
    let rValue = document.querySelector("[data-pixel-id='"+pixelId+"'][data-chanel='R']");
    let gValue = document.querySelector("[data-pixel-id='"+pixelId+"'][data-chanel='G']");
    let bValue = document.querySelector("[data-pixel-id='"+pixelId+"'][data-chanel='B']");

    let pixel = document.getElementById(pixelId);

    pixel.style.backgroundColor=rgb(rValue.value, gValue.value, bValue.value);
}

function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}