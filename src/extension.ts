import fs from 'node:fs'
import path from 'node:path'
import { isNonEmptyArray } from 'rattail'
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyFileNameWithExtension',
      (_uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        if (isNonEmptyArray(files)) {
          const fileNames = files
            .filter((file) => fs.statSync(file.fsPath).isFile())
            .map((file) => path.basename(file.fsPath))
          vscode.env.clipboard.writeText(fileNames.join('\n'))
        }
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyFileNameWithoutExtension',
      (_uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        if (isNonEmptyArray(files)) {
          const fileNames = files
            .filter((file) => fs.statSync(file.fsPath).isFile())
            .map((file) => path.basename(file.fsPath, path.extname(file.fsPath)))
          vscode.env.clipboard.writeText(fileNames.join('\n'))
        }
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyPathWithoutExtension',
      (_uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        if (isNonEmptyArray(files)) {
          const fileNames = files.map((file) => {
            const { dir, name } = path.parse(file.fsPath)
            return path.join(dir, '/', name)
          })
          vscode.env.clipboard.writeText(fileNames.join('\n'))
        }
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyRelativePathWithoutExtension',
      (_uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        if (isNonEmptyArray(files)) {
          const fileNames = files.reduce((files: string[], file) => {
            const workspaceFolder = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(file.fsPath))
            if (workspaceFolder) {
              const { dir, name } = path.parse(path.relative(workspaceFolder.uri.fsPath, file.fsPath))
              files.push(path.join(dir, '/', name))
            }

            return files
          }, [])
          vscode.env.clipboard.writeText(fileNames.join('\n'))
        }
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyDirectory',
      (_uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        if (isNonEmptyArray(files)) {
          const fileNames = files
            .filter((file) => fs.statSync(file.fsPath).isDirectory())
            .map((file) => path.basename(file.fsPath))
          vscode.env.clipboard.writeText(fileNames.join('\n'))
        }
      },
    ),
  )
}

export function deactivate() {}
