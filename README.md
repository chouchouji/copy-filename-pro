<div align="center">
  <img src="https://github.com/user-attachments/assets/90dc92f3-ef25-419d-8173-6d3dfe7c0e83" alt="logo" />
  <h1>Copy Filename Pro</h1>
  <p>
    <span>English</span> | 
    <a href="https://github.com/chouchouji/copy-filename-pro/blob/main/README.zh-CN.md">中文介绍</a>
  </p>
  <p>A vscode extension used to copy filename, directory and path</p>
</div>

---

## Features

- 📝 &nbsp;Support copying filename (with or no extension)
- 📖 &nbsp;Support copying directory
- 🌈 &nbsp;Support copying absolute or relative path (no extension)
- 🌍 &nbsp;Support internationalization

## Usage

### Copy Filename Or Directory

![copy](https://github.com/user-attachments/assets/c58b2ec5-36d4-4e62-b3fc-c33b49abc792)

### Copy Path

![path](https://github.com/user-attachments/assets/e61bf821-7a8a-4075-bcdf-db5f613eb621)

## Key Bindings

The default keybindings of this extension are as follows

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

If you want customize keybindings, just click `Setting` icon and `Keyboard Shortcuts`. Then you will see a page with search bar and keybinding list, input `copy-filename-pro` and search.

## Internationalization

The default language is `english`. If you have added [chinese vscode extension](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) in vscode extensions, the language of `copy filename pro` extension will be changed to chinese automatically after restarting vscode.

## Feedback

If you encounter problems or have good ideas and suggestions, please [report](https://github.com/chouchouji/copy-filename-pro/issues) here.

## ChangeLog

[ChangeLog](CHANGELOG.md)

## License

[MIT](LICENSE)
