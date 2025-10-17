function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function displayCaptcha(url) {
    const captchaImage = document.getElementById('captcha-image');
    captchaImage.src = url;
    setTimeout(() => {
        // Simulate captcha solving
        const solvedText = 'Sample Captcha Text'; // Replace with actual solving logic
        document.getElementById('captcha-text').innerText = solvedText;
    }, 15000);
}

window.onload = function() {
    const url = getUrlParameter('url') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVQYV2NkQAP/Gf4bBjCqAEMAAHQDAh0U8PYAAAAASUVORK5CYII=';
    displayCaptcha(url);
};