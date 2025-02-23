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