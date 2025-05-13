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

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('background/${randomImage}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    // Create an image element to load the background image
    const img = new Image();
    img.src = `background/${randomImage}`;
    img.onload = function() {
        // Create a canvas to draw the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get the image data
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }

        // Calculate the average color
        const pixelCount = data.length / 4;
        r = Math.floor(r / pixelCount);
        g = Math.floor(g / pixelCount);
        b = Math.floor(b / pixelCount);

        // Determine if the background is dark or light
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        const textColor = brightness < 128 ? '#ffffff' : '#333333';

        // Set the text color variable
        document.documentElement.style.setProperty('--text-color', textColor);
    };
});