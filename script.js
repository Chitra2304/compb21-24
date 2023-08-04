let mount_b= document.getElementById('mount_b');
let mount_f= document.getElementById('mount_f');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let planet = document.getElementById('planet');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    mount_b.style.left = value + 'px';
    
    btn.style.bottom = value*2.3 + 'px';
    planet.style.top = value *1.2 + 'px';
    mount_f.style.left= value*-1.2 + 'px';
   
})

