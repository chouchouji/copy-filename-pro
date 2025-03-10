<div align="center">
  <img src="https://github.com/user-attachments/assets/90dc92f3-ef25-419d-8173-6d3dfe7c0e83" alt="logo" />
  <h1>Copy Filename Pro</h1>
    <p>
    <span>中文介绍</span> | 
    <a href="https://github.com/chouchouji/copy-filename-pro/blob/main/README.md">English</a>
  </p>
  <p>用于复制文件名、目录和路径的vscode扩展</p>
</div>

---

## 特性

- 📝 &nbsp;支持复制文件名（有或没有扩展名）
- 📖 &nbsp;支持复制目录
- 🌈 &nbsp;支持复制绝对或相对路径（无扩展名）
- 📦 &nbsp;支持多选
- 🌍 &nbsp;支持国际化

## 使用指南

### 复制文件名或者目录名

![copy](https://github.com/user-attachments/assets/c58b2ec5-36d4-4e62-b3fc-c33b49abc792)

### 复制路径

![path](https://github.com/user-attachments/assets/e61bf821-7a8a-4075-bcdf-db5f613eb621)

### 多选

![multiple](https://github.com/user-attachments/assets/168115ed-87ca-4d82-91bc-fd5a18c0f086)

## 快捷键

此扩展的默认快捷键如下

```json
{
  "command": "copy-filename-pro.copyFileNameWithExtension",
  "key": "ctrl+shift+w", // windows
  "mac": "cmd+shift+w", // mac
},
{
  "command": "copy-filename-pro.copyFileNameWithoutExtension",
  "key": "ctrl+shift+n",
  "mac": "cmd+shift+n",
},
{
  "command": "copy-filename-pro.copyDirectory",
  "key": "ctrl+shift+d",
  "mac": "cmd+shift+d",
}
```

如果你想自定义键绑定，只需单击 `设置` 图标和 `键盘快捷键` 。然后，您将看到一个带有搜索栏和键绑定列表的页面，输入 `copy-filename-pro` 并搜索。

## 国际化

默认语言为 `英语` 。如果您添加了[chinese vscode extension](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode语言包zh-hans)，重新启动vscode后， `copy-filename-pro` 扩展的语言将自动更改为中文。

## 反馈

如果您遇到问题或有好的想法和建议，请在这里[反馈](https://github.com/chouchouji/copy-filename-pro/issues)。

## 日志

[日志](CHANGELOG.md)

## 许可证

[MIT](LICENSE)
