window.addEventListener('DOMContentLoaded', function() {

    'use strict';
//We get elements by selectors ("wrapper" of tabs; menu items that need to be converted to tabs; content of tabs)

    let tab = document.querySelectorAll('.info-header-tab'),                
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

//first, hide all the tabs except the first
        function hideTabContent(a) {                                      
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1); //hide all tabs except the first

//create delegation for wrapping tabs

        info.addEventListener('click', function(event) {
            let target = event.target;

            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        tabContent[i].classList.add('show');
                        tabContent[i].classList.remove('hide');
                    }
                }
            }
        });













});