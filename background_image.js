let loadTime;
function sendLoadTime(time) {
    window.parent.postMessage(
        {
            frameType: 'background-image',
            messageType: 'loaded',
            url: location.href,
            time: time,
        },
    );
}

window.addEventListener('message', ({ data }) => {
    if (data === 'sendLoadTime' && loadTime) {
        sendLoadTime(loadTime);
    }
});


window.onload = function () {
    document.body.toggleAttribute('shown', true);
    loadTime = Date.now();
    sendLoadTime(loadTime);

}