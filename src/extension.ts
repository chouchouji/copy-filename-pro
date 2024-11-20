import * as vscode from 'vscode';
import fs from 'node:fs';
import path from 'node:path';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameWithExtension', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath;
      fs.stat(fsPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          vscode.window.showErrorMessage(err.message);
          return;
        }

        vscode.env.clipboard.writeText(path.basename(fsPath));
      });
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyFileNameNoExtension', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath;
      fs.stat(fsPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          vscode.window.showErrorMessage(err.message);
          return;
        }

        vscode.env.clipboard.writeText(path.basename(fsPath, path.extname(fsPath)));
      });
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('copy-filename-pro.copyDirectory', (uri: vscode.Uri) => {
      const fsPath = uri.fsPath;
      fs.stat(fsPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          vscode.window.showErrorMessage(err.message);
          return;
        }

        vscode.env.clipboard.writeText(path.basename(fsPath));
      });
    }),
  );
}

export function deactivate() {}
