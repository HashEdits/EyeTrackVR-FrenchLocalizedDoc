# How to Setup Dev Environment

This project uses NodeJS (v16+) and Yarn. You must install them before continuing.

Next, install the dependencies, navigate to the project directory (`GUI/ETVR`) and run:

```bash
yarn
```

Then, run the development server:

```bash
yarn tauri dev
```

Finally, the project will open as an app on your device.

You can also run the project in the browser by running:

```bash
yarn dev
```

To see a list of all available commands click on `NPM SCRIPTS` in your file heirarchy (underneath the `ETVR WORKSPACE`) or navigate to the `package.json` file and look at the `scripts` section.

> **Note**: Please use the `yarn format` command before committing any changes to the project. Please fix any errors that are reported by the linter.

## How to Build

To build the project, run:

```bash
yarn tauri build
```

This will create a folder called `target` in the `src-tauri` directory. Inside this folder, you will find the executable for your operating system, as well as an MSI installer for Windows.

## Rust dev environment

If you want to work on the Rust code, you will need to install the Rust toolchain. Starting with RustC.

Then in `vscode` you will need to install the extensions [`rust-analyzer`](https://rust-analyzer.github.io/manual.html#vs-code).
Optionally you can install [`CodeLLDB`](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) for active breakpoint debugging.

For the `rust-analyzer` extension to work, you will always need to open the workspace file from the `GUI/ETVR` folder.

There is a workspace file in the `GUI/ETVR` folder, which you can open in vscode. This will automatically set the correct rust toolchain and the correct rust-analyzer settings.

## Extras

This project uses `storybook`, `JSDoc`, and `tailwindcss`. You can run storybook with `yarn storybook`. You can build the storybook with `yarn build-storybook`. You can build the JSDoc website with `yarn docs`.

All components should be added to storybook.

All components should be styled with tailwindcss.

All components should have JSDoc comments.

## Useful Links

- [Tauri](https://tauri.app/)
- [Tauri Docs](https://tauri.app/v1/guides/)
- [TailWindCSS](https://tailwindcss.com/docs/)
- [TailWindCSS PreProcessor](https://tailwindcss.com/docs/using-with-preprocessors)
- [TailWindCSS Forms](https://github.com/tailwindlabs/tailwindcss-forms#readme)
- [StoryBook Docs](https://storybook.js.org/docs/react)
- [StoryBook AddOn-Docs](https://storybook.js.org/addons/@storybook/addon-docs)
- [StoryBook Controls](https://storybook.js.org/docs/react/essentials/controls)
- [MDXv2](https://mdxjs.com/blog/v2/)
- [JSDoc](https://jsdoc.app/)
- [Better-Docs (JSDoc plugin)](https://github.com/SoftwareBrothers/better-docs)
- [JSDoc Style Guide](https://github.com/shri/JSDoc-Style-Guide)
