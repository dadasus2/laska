


function kokot() {

    let select = document.getElementById('select').value
    let image = document.querySelector('.image')
    switch (select) {
        case '144p':
            image.src = "imgs/144.png"
            break;
        case '480p':
            image.src = "imgs/480.png"
            break;
        case '720p':
            image.src = "imgs/720.png"
            break;
        case '1080p':
            image.src = "imgs/1080.png"
            break;
        case '4K':
            image.src = "imgs/4K.png"
            break;
        default:
            image.src = "imgs/144.png"
            break;
    }
}

