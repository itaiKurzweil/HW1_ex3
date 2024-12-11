import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Activating commitreminder extension...');

    // Log an activation success message
    console.log('Congratulations, your extension "commitreminder" is now active!');

    // Register a command for the Command Palette
    const disposableCommand = vscode.commands.registerCommand('commit.reminder', () => {
        // Display the commit reminder message
        vscode.window.showInformationMessage('Reminder: Don\'t forget to "git add", "git commit", and "git push"!');
    });

    // Log the command registration
    console.log('Command "commit.reminder" registered.');

    // Add an event listener for saving files
    const disposableSaveEvent = vscode.workspace.onDidSaveTextDocument((document) => {
        // Display the commit reminder message
        vscode.window.showInformationMessage('Reminder: Don\'t forget to "git add", "git commit", and "git push"!');
    });

    // Log the save event registration
    console.log('Save event listener registered.');

    // Add both disposables to the context's subscriptions
    context.subscriptions.push(disposableCommand);
    context.subscriptions.push(disposableSaveEvent);
}

export function deactivate() {
    console.log('Deactivating commitreminder extension...');
}
