document.querySelector('.close-banner').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector('.header-wrapper__free-delivery').style.display = 'none';
    
    document.querySelector('.header').style.minHeight = '80px';
});