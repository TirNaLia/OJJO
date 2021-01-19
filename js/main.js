function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
};

// Scroll to catalog list

// let scrollDownBtn = document.querySelector('.scroll-btn');
// let target = document.querySelector('.catalog-list');

// scrollDownBtn.onclick = function() {
//     window.scrollTo ({
//     top: target.offsetTop,
//     behavior: "smooth"
// });
// }

 const smoothScroll = (target,duration) => {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.addEventListener('click',function(){
    smoothScroll(".catalog-section",1000);
 });