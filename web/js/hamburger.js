/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mobileMenu = document.querySelector('#mobilemenu');
var uList = document.querySelector('#ulhorizontal');

mobileMenu.addEventListener('click', function (e) {
    uList.classList.toggle('open');
    e.stopPropagation();
    e.preventDefault();
});



