const search=document.querySelector('.search');const closed=document.querySelector('.search__input-closed');const searchBtn=document.querySelector('.header__btn');searchBtn.addEventListener('click',function(e){e.stopPropagation();search.classList.add('search--active')})
closed.addEventListener('click',function(){search.classList.remove('search--active')})
