// using onclick
function handle_click() {
      document.getElementById('default_text').innerText = 'Default text changed BY onclick event handler';
}

// input field
function handle_input() {
      const input = document.getElementById('input_field');
      const input_value = input.value;

      document.getElementById('default_input').innerText = input_value;
      input.value = '';
}

// using add event listener
document.getElementById('add_event_listener').addEventListener('click', function () {
      document.getElementById('default_text').innerText = 'Default text changed BY add event listener handler';
})

// input field
document.getElementById('event_listener').addEventListener('click', function () {
      const input = document.getElementById('input_field');
      const input_value = input.value;

      document.getElementById('default_input').innerText = input_value;
      input.value = '';
})

