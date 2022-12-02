const path = require("path");
const tailwindConfigPath = path.join(__dirname, "../tailwind.config.js"); // or your own config file
require("storybook-tailwind-foundations/initialize.js").default(
    tailwindConfigPath
);

//* Docs: https://storybook.js.org/docs/react/essentials/controls
//* Docs: https://storybook.js.org/docs/react/writing-docs/mdx#gatsby-focus-wrapper
//* Docs: https://storybook.js.org/addons/@storybook/addon-docs
// NOTE: You must set:  $env:NODE_OPTIONS = "--openssl-legacy-provider" in the VSCode powershell terminal (for windows) to get the MDX to work
// if you're using linux, you can use the following command:  export NODE_OPTIONS="--openssl-legacy-provider"

const resolve = (item) => {
    return path.join(__dirname, "../", item);
};
const { mergeConfig } = require("vite");

module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    addons: [{
        name: '@storybook/addon-docs',
        options: {
            configureJSX: true,
            babelOptions: {},
            sourceLoaderOptions: null,
            transcludeMarkdown: true,
        },
    }, "@storybook/addon-links", "@storybook/addon-essentials"],

    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },

    viteFinal(config, { }) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    "@components": resolve("src/components"),
                    "@utils": resolve("src/utils"),
                    "@static": resolve("src/utils/static"),
                },
            },
            define: {
                "process.env.NODE_DEBUG": "false",
            },
        });
    },
};
