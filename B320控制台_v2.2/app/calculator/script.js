//输出框
function append(value)
{
  const display = document.getElementById('display');
  let currentValue = display.value;
 
  //第一个不能为右括号
  if(currentValue === ''&&value === ')')
    {
      return;
    }
  
   // 第一个可以为左括号
  if (currentValue === '' && value === '(') 
    {
      currentValue += '(';
    }
  
  //左括号的情况
  else if (value === '(')
    { //当前是右括号则不可以输出‘（’ 
      if(currentValue.slice(-1)===')')
      {
        return;
      }
      //若当前的值是不是数字可以输出‘（’
      if (isNaN(currentValue.slice(-1)) ) 
      {
        currentValue += '(';
      } 
    
    }
  
  //右括号的情况
   else if (value === ')')
    {
    // 检查当前值是否以数字结尾，若前一个为右括号也能输出
      if (!isNaN(currentValue.slice(-1))||currentValue.slice(-1) === ')') 
      {
        currentValue += ')';
      }
     
    }
  
  // 其他情况
  else 
  {
     // 若连续点击符号使新符号替代旧符号。且前一个符号不为右括号
      //若前一个为右括号，则正常输出
      if(currentValue.slice(-1) === ')'&&isNaN(value))
        {
           currentValue += value;
        }
      //否则替代
      else if ( isNaN(currentValue.slice(-1))&&isNaN(value)) 
         {
    
           currentValue = currentValue.slice(0, -1) + value;
         } 
      //若前一个为左括号，则覆盖左括号
      else if ( currentValue.slice(-1) === '('&&isNaN(value)) 
         {
    
           currentValue = currentValue.slice(0, -1) + value;
         } 
    
       // 否则，在结果输出框中追加新的值
      else 
         {
            currentValue += value;
         }
  }

   
  display.value = currentValue;
}

// 删除最后一个字符
function delLast() 
{
  let display = document.getElementById("display");
  let currentValue = display.value;

  if (currentValue.length > 0) 
  {
      currentValue = currentValue.slice(0, -1);
      display.value = currentValue;
  }
}
//计算结果
function calculate() 
{
  const display = document.getElementById('display');
  const equation = display.value;

  try 
  {
      const result = eval(equation);
      display.value = result;
  }
  catch (error) 
  {
      display.value = 'error';
  }
  
}
//清空
function clearall() 
{
  document.getElementById('display').value = '';
}

//正负号
function tog() 
{
  const display = document.getElementById('display');
  let value = display.value;

  if (value.includes('-')) 
  {
      value = value.replace('-', '');
  } 
  else 
  {
      value = '-' + value;
  }

  display.value = value;
}

//三角函数
function sin() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  
  if (!isNaN(value)) 
  {
      const result = Math.sin(value);
      display.value = result;
  } 
  else 
  {
      display.value = 'Invalid input';
  }
}

function cos() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  
  if (!isNaN(value)) 
  {
      const result = Math.cos(value);
      display.value = result;
  } 
  else 
  {
      display.value = 'Invalid input';
  }
}

function tan() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  
  if (!isNaN(value)) 
  {
      const result = Math.tan(value);
      display.value = result;
  } 
  else 
  {
      display.value = 'Invalid input';
  }
}

function power() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  const exponent = parseFloat(prompt('输入指数:'));

  if (!isNaN(value) && !isNaN(exponent)) 
  {
      const result = Math.pow(value, exponent);
      display.value = result;
  } 
  else 
  {
      display.value = 'Invalid input';
  }
}

function exp() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);

  if (!isNaN(value)) 
  {
      const result = Math.pow(value, 2);
      display.value = result;
  } 
  else 
  {
      display.value = 'Invalid input';
  }
}

function squa() 
{
  const display = document.getElementById('display');
  const value = parseFloat(display.value);

  if (!isNaN(value)) 
  {
      if (value < 0)
      {
        display.value = 'Invalid input';
      } 
      else 
      {
        const result = Math.sqrt(value);
        display.value = result;
      }
  } 
  
  else 
  {
      display.value = 'Invalid input';
  }
}