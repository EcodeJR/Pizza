let open0 = document.getElementById('open');
let close0 = document.getElementById('close');
var menu = document.getElementById('menu');
var ul = document.getElementById('ul');
var ct = document.getElementById('ct');



open0.addEventListener('click', function() {
    close0.style.display = 'block';
    open0.style.display = 'none';
    menu.style.width = '100%';
    menu.style.height = '90vh';
    menu.style.top = '10vh';
    menu.style.right = '0';
    menu.style.transition = '.6s';
    ul.style.display = 'flex';
    ct.style.display = 'flex';
    ul.style.transition = '.6s';
    ct.style.transition = '.6s';
});
close0.addEventListener('click', function() {
    open0.style.display = 'block';
    close0.style.display = 'none';
    menu.style.width = '0px';
    menu.style.height = '0px';
    menu.style.top = '10px';
    menu.style.right = '10px';
    menu.style.transition = '.6s'
    ul.style.display = 'none';
    ct.style.display = 'none';
    ul.style.transition = '.6s';
    ct.style.transition = '.6s';
});