// <!-- option 2 -->
function make_green() {
      document.body.style.backgroundColor = 'green'
}

// option 3
const make_red_button = document.getElementById('make_red');
make_red_button.onclick = makeRed;

function makeRed() {
      document.body.style.backgroundColor = 'red'
}

// option 4
const make_yellow_button = document.getElementById('make_yellow');
make_yellow_button.onclick = function makeYellow() {
      document.body.style.backgroundColor = 'yellow'
}

// option 5
const make_purple_button = document.getElementById('make_purple');
make_purple_button.addEventListener('click', make_purple)
function make_purple() {
      document.body.style.backgroundColor = 'purple'
}

// option 5
const make_orange_button = document.getElementById('make_orange');
make_orange_button.addEventListener('click', function () {
      document.body.style.backgroundColor = 'orange'
})

// option 6
document.getElementById('make_pink').addEventListener('click', function () {
      document.body.style.backgroundColor = 'pink'
})
