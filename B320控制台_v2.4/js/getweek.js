document.addEventListener('DOMContentLoaded', () => {
    function isOddWeek(startDate) {
        const today = new Date();
        const start = new Date(startDate);
        
        // 计算今天与学期开始日期之间的天数差
        const diffTime = Math.abs(today - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // 计算周数
        const weekNumber = Math.ceil(diffDays / 7);
        
        // 判断是单周还是双周
        return weekNumber % 2 === 1;
    }

    // 设置学期开始日期，格式为 "YYYY-MM-DD"
    const semesterStartDate = "2025-02-09";

    if (isOddWeek(semesterStartDate)) {
        document.getElementById('week').textContent = "当前是单周";
    } else {
        document.getElementById('week').textContent = "当前是双周";
    }
});