document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.getElementById('button-container');
    const buttonData = [
        { href: 'app/settings.html', img: 'settings.png', alt: 'Settings', text: '设置' },
        { href: 'app/calc.html', img: 'calculator.png', alt: 'Calculator', text: '计算器', action: 'runCalculator' },
        { href: 'app/games.html', img: 'games.png', alt: 'Games', text: '工具' },
        { href: 'app/map.html', img: 'map.png', alt: 'Map', text: '地图' },
        { href: 'app/ai.html', img: 'ai.png', alt: 'AI', text: 'AI' }
    ];

    buttonData.forEach(button => {
        const buttonElement = document.createElement('a');
        buttonElement.href = button.href;
        buttonElement.className = 'button';

        const imgElement = document.createElement('img');
        imgElement.src = `app-bgp/${button.img}`;
        imgElement.alt = button.alt;

        const spanElement = document.createElement('span');
        spanElement.textContent = button.text;

        buttonElement.appendChild(imgElement);
        buttonElement.appendChild(spanElement);
        buttonContainer.appendChild(buttonElement);
    });
});