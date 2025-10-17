document.querySelector('.close-banner').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector('.free-delivery').style.display = 'none';
    
    document.querySelector('.header').style.minHeight = '80px';
});