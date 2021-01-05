const storage = window.localStorage;
storage.setItem('size', '18');
storage.setItem('type', 'Material');
storage.setItem('color', 'Black');

let div = document.getElementById('result');
function display (){
    let size = storage.getItem('size');
    let type = storage.getItem('type');
    let color = storage.getItem('color');
    div.innerHTML = "Thème " + color + ", type " + type + " et police de caractères " + size + " px";
}

display();

storage.setItem('size', '12');
storage.setItem('type', 'Soft');
storage.setItem('color', 'White');

display();
