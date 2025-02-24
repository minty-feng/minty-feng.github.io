// 暗黑模式切换
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 读取本地存储的主题
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

// 按钮点击事件
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// 更新按钮图标
function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// 在script.js中添加
function showDatePicker() {
  document.getElementById('dateModal').style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('dateModal');
  modal.style.display = 'none';
  document.getElementById('errorText').style.display = 'none';
  modal.querySelector('#specialDate').value = '';
}

function validateDate() {
  const inputDate = document.getElementById('specialDate').value;
  const errorText = document.getElementById('errorText');
  
  if(inputDate === '2020-11-28') {
    window.location.href = 'your_target_url';
  } else {
    // 先移除动画类确保每次都能触发
    errorText.classList.remove('shake');
    
    // 强制重绘
    void errorText.offsetWidth;
    
    errorText.style.display = 'block';
    errorText.classList.add('shake');
    
    // 清空输入框
    //document.getElementById('specialDate').value = '';
    
    // 5秒后自动隐藏（可选）
    setTimeout(() => {
      errorText.style.display = 'none';
    }, 5000);
  }
}

