window.addEventListener('load', async e => {
    if('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('service-worker.js');
            console.log("SW Registered!");
        } catch(error) {
            console.log("SW Failed!");
        }
    }
});