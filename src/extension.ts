import * as vscode from 'vscode';
import path from 'node:path';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameWithExtension', (uri: vscode.Uri) => {
      vscode.env.clipboard.writeText(path.basename(uri.fsPath));
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameWithoutExtension', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath;
      vscode.env.clipboard.writeText(path.basename(fsPath, path.extname(fsPath)));
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyDirectory', (uri: vscode.Uri) => {
      vscode.env.clipboard.writeText(path.basename(uri.fsPath));
    }),
  );
}

export function deactivate() {}
