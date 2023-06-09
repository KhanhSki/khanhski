function clickMenu(nameMenu) {
    var i,x,tabLinks
    
    x = document.querySelectorAll('.menu-list') 
    for(i of x) {
        i.style.display = 'none';
    }
    tabLinks = document.querySelectorAll('.menu-header__btn')
    for(i of tabLinks) {
        i.className = i.className.replace(' menu-header__btn--click', '')
    }

    document.getElementById(nameMenu).style.display = 'block';
    document.querySelector(`.${nameMenu}`).className += ' menu-header__btn--click'
}

document.getElementById('mylink').click()