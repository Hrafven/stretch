var currentAnimationsCounter = [];

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/stretch/sw.js').then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
};

const stretchTitle = document.getElementById('stretch');
stretchTitle.addEventListener('animationend', function() {
    if (currentAnimationsCounter.includes('animatedActive')) {
        currentAnimationsCounter[currentAnimationsCounter.indexOf('animatedActive')] = undefined;
        stretchTitle.classList.remove('animatedActive');
    }
    if (currentAnimationsCounter.includes('animatedHover')) {
        currentAnimationsCounter[currentAnimationsCounter.indexOf('animatedHover')] = undefined;
        stretchTitle.classList.remove('animatedHover');
    }
});

stretchTitle.addEventListener('mousedown', function() {
    if (!currentAnimationsCounter.includes('animatedActive')) {
        currentAnimationsCounter.push('animatedActive');
        stretchTitle.classList.add('animatedActive')
    }
})

stretchTitle.addEventListener('mouseenter', function() {
    if (!currentAnimationsCounter.includes('animatedHover')) {
        currentAnimationsCounter.push('animatedHover');
        stretchTitle.classList.add('animatedHover')
    }
})