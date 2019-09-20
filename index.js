

function handleBodyClick(){
    var randomleft = Math.floor(Math.random()*window.innerWidth-100);
    var randomtop = Math.floor(Math.random()*window.innerHeight-100);
    var randomcolor1 = Math.floor(Math.random()*255);
    var randomcolor2 = Math.floor(Math.random()*255);
    var randomcolor3 = Math.floor(Math.random()*255);
    var newCircle = document.createElement('div');
    newCircle.classList.add('newCircle');
    document.body.appendChild(newCircle);
    newCircle.style.left = randomleft + 'px';
    newCircle.style.top = randomtop + 'px';
    newCircle.style.backgroundColor = 'rgba('+ randomcolor1 +', '+ randomcolor2 + ', '+ randomcolor3 + ', 0.7)';
    console.log(window.innerWidth);
}

document.body.addEventListener('click', handleBodyClick);
