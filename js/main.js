$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })

        const text = document.querySelector('.fancy');
    text.innerHTML = text.innerText.split('').map((fade, idx) => {
        return `<span class="fade" style="--delay: ${idx * 250}ms">${fade}</span>`
    }).join("");
    console.log(text)

    const textDisplay = document.getElementById('text')
    const phrases = ['designers', 'freelancers']
    let i = 0
    let j = 0
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false

    function loop() {
        isEnd = false
        textDisplay.innerHTML = currentPhrase.join('')

        if (i < phrases.length) {

            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j])
                j++
                textDisplay.innerHTML = currentPhrase.join('')
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j])
                j--
                textDisplay.innerHTML = currentPhrase.join('')
            }

            if (j == phrases[i].length) {
                isEnd = true
                isDeleting = true
            }

            if (isDeleting && j === 0) {
                currentPhrase = []
                isDeleting = false
                i++
                if (i === phrases.length) {
                    i = 0
                }
            }
        }
        const spedUp = Math.random() * (80 - 50) + 50
        const normalSpeed = Math.random() * (300 - 200) + 200
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
        setTimeout(loop, time)
    }

    loop()
});