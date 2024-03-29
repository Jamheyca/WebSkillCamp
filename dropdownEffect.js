document.addEventListener('DOMContentLoaded', function() {
    const shows = document.querySelectorAll('.shows');

    //select each element with class name shows
    shows.forEach(function(show) {
        show.addEventListener('click', function() {
            const hide = this.nextElementSibling;
            hide.classList.toggle('active');
            if (hide.classList.contains('active')) {
                hide.style.maxHeight = hide.scrollHeight + 'px';
            } else {
                hide.style.maxHeight = null;
            }
        });
    });
});
