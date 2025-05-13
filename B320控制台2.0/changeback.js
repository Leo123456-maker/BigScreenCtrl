function setRandomBackgroundImage() {
    var randomIndex = Math.floor(Math.random() * 12) + 1; 
    var backgroundImage = 'background/' + randomIndex + '.jpg';
    document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
}

// 在页面加载时设置背景图片
window.addEventListener('load', function() {
    setRandomBackgroundImage();
    setInterval(setRandomBackgroundImage, 3600000);
});