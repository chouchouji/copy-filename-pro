import path from 'node:path'
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameWithExtension', (uri: vscode.Uri) => {
      vscode.env.clipboard.writeText(path.basename(uri.fsPath))
    }),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameWithoutExtension', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath
      vscode.env.clipboard.writeText(path.basename(fsPath, path.extname(fsPath)))
    }),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyPathWithoutExtension', (uri: vscode.Uri) => {
      const { dir, name } = path.parse(uri.fsPath)
      vscode.env.clipboard.writeText(path.join(dir, '/', name))
    }),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyRelativePathWithoutExtension', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(fsPath))
      if (workspaceFolder) {
        const { dir, name } = path.parse(path.relative(workspaceFolder.uri.fsPath, fsPath))
        vscode.env.clipboard.writeText(path.join(dir, '/', name))
      }
    }),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyDirectory', (uri: vscode.Uri) => {
      vscode.env.clipboard.writeText(path.basename(uri.fsPath))
    }),
  )
}

export function deactivate() {}
