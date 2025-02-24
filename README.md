

# Multi-Blogs 多维探索博客聚合站

聚合多维度内容的个人博客导航站，集成技术、学习、生活、健康等主题专栏，采用多样化技术栈构建。


## 在线地址

https://minty-feng.github.io


## 🌟 功能特性

- **多维度导航** - 聚合四大主题专栏，独立技术栈实现
- **暗黑模式** - 一键切换日间/夜间主题
- **响应式设计** - 适配移动端与桌面端
- **视觉化引导** - SVG图标 + 动态按钮交互
- **社交集成** - GitHub/Twitter 快速链接

## 🛠 技术栈

**主站架构**  
[![Static Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5)](https://github.com/topics/html5)
[![Static Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3)](https://github.com/topics/css3)
[![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript)](https://github.com/topics/javascript)
[![Static Badge](https://img.shields.io/badge/Font_Awesome-528DD7?logo=font-awesome)](https://fontawesome.com/)

**子项目技术**  
| 专栏 | 技术栈 | 构建方式 |
|------|--------|----------|
| 技术探索 | Hugo + GitHub Pages | 静态生成 |
| 学习笔记 | Sphinx + ReadTheDocs | 文档生成 |
| 生活随笔 | Hexo + Vercel | 静态生成 |
| 运动健康 | React + Docusaurus | SPA应用 |

## 🚀 快速开始

1. 克隆仓库
```bash
git clone https://github.com/minty-feng/minty-feng.github.io
cd minty-feng.github.io
```

2. 本地运行（需安装Live Server）
```bash
npm install -g live-server
live-server --port=3000
```

3. 访问 `http://localhost:3000`

## 📂 项目结构
```
.
├── assets/               # 静态资源
│   └── icons/            # SVG图标
├── css/                  # 样式文件
│   └── style.css         
├── js/                   # 交互脚本
│   └── script.js         
└── index.html            # 主入口文件
```

---

## 🧭 子项目说明

### 1. 技术探索专栏(teach-seek)
- **技术栈**: Hugo + GitHub Pages
- **特点**: 自动构建/SEO优化/代码高亮
- [源码仓库](https://github.com/minty-feng/tech-seek)｜[在线访问](https://minty-feng.github.io/tech-seek)

### 2. 学习笔记专栏(study-notes)
- **技术栈**: Sphinx + ReadTheDocs
- **特点**: LaTeX支持/文档版本控制
- [源码仓库](https://github.com/minty-feng/study-notes)｜[在线访问](https://minty-feng.github.io/study-notes)

### 3. 生活随笔专栏(life-diary)
- **技术栈**: Hexo + Vercel
- **特点**: 图文混排/社交互动组件
- [源码仓库](https://github.com/minty-feng/life-diary)｜[在线访问](https://minty-feng.github.io/life-diary)

### 4. 运动健康专栏(wlb)
- **技术栈**: React + Docusaurus
- **特点**: SPA应用/动态数据展示
- [源码仓库](https://github.com/minty-feng/wlb)｜[在线访问](https://minty-feng.github.io/wlb)


## 📄 协议许可
[MIT License](LICENSE) © 2025 zhao

--- 

> 提示：各子项目为独立仓库，通过GitHub Pages服务部署。主站仅作导航聚合，不包含具体内容逻辑。
