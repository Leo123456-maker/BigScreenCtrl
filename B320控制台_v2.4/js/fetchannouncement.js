// 使用 Fetch API 从服务器获取数据
fetch('http://47.121.193.41:88/api-announcement.php')
    .then(response => response.text())
    .then(data => {
        const safeData = data.replace(/\n/g, '<br>');
        document.getElementById('get-announcement').innerHTML = safeData;
    })
    .catch(error => {
        console.error('Error fetching announcement:', error);
        document.getElementById('get-announcement').textContent = '无法获取公告内容,请检查网络连接。';
    });