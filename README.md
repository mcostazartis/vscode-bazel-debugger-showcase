# Debugger not working after August 2021 Vscode

## Description

After the August 2021 update where legacy javascript debugger where removed, this sample cannot be debugged in vscode, this repo showcases the problem by providing the option to debug with both the new and legacy debuggers.

## Required software

- Vscode >= 1.60
- Node Debug (legacy) extension [https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug](https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug)
- Bazel >= 4.1.0
- Yarn

## Running the sample

First of all, run `yarn install` to update dependencies.

To debug the app, run `yarn run sample:dev:debug`, the app will sit while waiting for the debugger. Select one of the debug options to attach the debugger:

- `Attach nodejs_binary (legacy)` Uses the `legacy-node` debugger, you can see it hitting the breakpoints from `sample/main.ts`
- `Attach nodejs_binary (new)` Uses the new `vscode-js-debug` and only hits breakpoints in the transpiled js files.
