document.addEventListener('DOMContentLoaded', function() {
	const apiUrl = 'http://47.121.193.41:88/api-cleaner.php';

	// 发送HTTP请求获取数据
	fetch(apiUrl)
    	.then(response => response.text()) 
   	 .then(data => {
   	     // 解析响应数据
    	    const rows = data.split('\n').map(row => row.split(' '));
        
    	    // 获取HTML表格元素
  	      const table = document.querySelector('.cleaner');
        
  	      // 更新表格内容
    	    for (let i = 1; i <=4; i++) { // 遍历四行
    	        for (let j = 0; j <= 3; j++) { // 每行三个名字
     	           table.rows[i].cells[j].textContent = rows[j][i-1] || ''; // 更新单元格内容
     	       }
    	    }
  	  })
    	.catch(error => console.error('Error fetching duty roster:', error));
});