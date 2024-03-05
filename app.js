
/* End  */

/* Login arrow animation */

document.addEventListener('DOMContentLoaded', function() {
    const directionWrappers = document.querySelectorAll('.direction-wrapper');
    let currentIndex = directionWrappers.length - 1;
    function showNextDirectionWrapper() {
    
        directionWrappers.forEach(wrapper => {
            wrapper.style.display = 'none';
        });
    
        const currentWrapper = directionWrappers[currentIndex];
        currentWrapper.style.display = 'block';
    
        currentIndex = (currentIndex - 1 + directionWrappers.length) % directionWrappers.length;
    }
    showNextDirectionWrapper();
    setInterval(showNextDirectionWrapper, 1000);
});
