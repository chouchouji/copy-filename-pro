import fs from 'node:fs'
import path from 'node:path'
import { isNonEmptyArray } from 'rattail'
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyFileNameWithExtension',
      (uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        const uris = isNonEmptyArray(files) ? files : uri ? [uri] : []
        if (uris.length === 0) {
          return
        }

        const fileNames = uris.filter((uri) => fs.statSync(uri.fsPath).isFile()).map((uri) => path.basename(uri.fsPath))
        vscode.env.clipboard.writeText(fileNames.join('\n'))
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyFileNameWithoutExtension',
      (uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        const uris = isNonEmptyArray(files) ? files : uri ? [uri] : []
        if (uris.length === 0) {
          return
        }

        const fileNames = uris
          .filter((uri) => fs.statSync(uri.fsPath).isFile())
          .map((uri) => path.basename(uri.fsPath, path.extname(uri.fsPath)))
        vscode.env.clipboard.writeText(fileNames.join('\n'))
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyPathWithoutExtension',
      (uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        const uris = isNonEmptyArray(files) ? files : uri ? [uri] : []
        if (uris.length === 0) {
          return
        }

        const fileNames = uris.map((uri) => {
          const { dir, name } = path.parse(uri.fsPath)
          return path.join(dir, '/', name)
        })
        vscode.env.clipboard.writeText(fileNames.join('\n'))
      },
    ),
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'copy-filename-pro.copyRelativePathWithoutExtension',
      (uri: vscode.Uri, files?: Array<vscode.Uri>) => {
        const uris = isNonEmptyArray(files) ? files : uri ? [uri] : []
        if (uris.length === 0) {
          return
        }

        const fileNames = uris.reduce((files: string[], uri) => {
          const workspaceFolder = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(uri.fsPath))
          if (workspaceFolder) {
            const { dir, name } = path.parse(path.relative(workspaceFolder.uri.fsPath, uri.fsPath))
            files.push(path.join(dir, '/', name))
          }

          return files
        }, [])
        vscode.env.clipboard.writeText(fileNames.join('\n'))
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
