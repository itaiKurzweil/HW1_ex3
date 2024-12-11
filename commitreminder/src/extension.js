"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
var vscode = require("vscode");
function activate(context) {
    console.log('Activating commitreminder extension...');
    // Log an activation success message
    console.log('Congratulations, your extension "commitreminder" is now active!');
    // Register a command for the Command Palette
    var disposable = vscode.commands.registerCommand('commit.reminder', function () {
        // Display the commit reminder message
        vscode.window.showInformationMessage('Reminder: Don\'t forget to "git add", "git commit", and "git push"!');
    });
    // Log the command registration
    console.log('Command "commit.reminder" registered.');
    context.subscriptions.push(disposable);
}
function deactivate() {
    console.log('Deactivating commitreminder extension...');
}
