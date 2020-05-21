palette = ["#a8e6cf", "#dcedc1", "#ffd3b6"];

for (i = 0; i <= 2; i++){
    const div = document.createElement('div');
    div.innerText = 0;
    div.className = `div${i}`
    div.style.backgroundColor = palette[i];
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.textAlign = 'center';
    document.body.append(div);
}

const divArray = document.querySelectorAll('div');
divArray.forEach(function(div) {
    div.addEventListener('click', function() {
        div.innerText = parseInt(div.innerText) + 1;
    });
});

var select = document.querySelector('select'); 

for(i = 0; i <= divArray.length-1; i++) {
    var el = document.createElement('option');
    el.text = `div${i}`;
    select.appendChild(el);
}

select.addEventListener('change', (event) => {
    if(event.target.selectedIndex > 0) {
        const targetDiv = document.getElementsByClassName(event.target.value)[0];
        targetDiv.innerText = 0;
    } 
})