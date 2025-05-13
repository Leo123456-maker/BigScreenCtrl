// 使用 Fetch API 从服务器获取数据
fetch('http://47.121.193.41:88/api-homework.php')
    .then(response => response.text())
    .then(data => {
        // 将换行符转换为 <br> 标签，并更新页面中的 homework-content 元素
        const safeData = data.replace(/\n/g, '<br>');
        document.getElementById('homework-content').innerHTML = safeData;
    })
    .catch(error => {
        console.error('Error fetching homework:', error);
        document.getElementById('homework-content').textContent = '无法获取作业内容。';
    });