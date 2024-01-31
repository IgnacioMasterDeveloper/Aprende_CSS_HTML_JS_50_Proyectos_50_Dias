const toggle = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const pretty = document.querySelector('#pretty');
const cheap = document.querySelector('#cheap');

toggle.forEach(toggle => toggle.addEventListener('change', (e) => dotheTrick(e.target)));

function dotheTrick(theClickedOne) {
    if (good.checked && pretty.checked && cheap.checked) {
        if (good === theClickedOne) {
            cheap.checked = false;
        }

        if (pretty === theClickedOne) {
            good.checked = false;
        }

        if(cheap ===theClickedOne){
            pretty.checked = false;
        }
    }
}