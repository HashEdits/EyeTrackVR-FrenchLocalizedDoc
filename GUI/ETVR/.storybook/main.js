const path = require('path')
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js') // or your own config file
require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath)

//* Docs: https://storybook.js.org/docs/react/essentials/controls
//* Docs: https://storybook.js.org/docs/react/
//* Docs: https://storybook.js.org/addons/@storybook/addon-docs
//* Docs: https://mdxjs.com/blog/v2/
// NOTE: You must set:  $env:NODE_OPTIONS = "--openssl-legacy-provider" in the VSCode powershell terminal (for windows) to get the MDX to work with Node v18+
// if you're using linux, you can use the following command:  export NODE_OPTIONS="--openssl-legacy-provider"

const resolve = (item) => {
  return path.join(__dirname, '../', item)
}
const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },

  viteFinal(config, {}) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@hooks': resolve('src/utils/hooks'),
          '@src': resolve('src'),
          '@components': resolve('src/components'),
          '@utils': resolve('src/utils'),
          '@static': resolve('src/utils/static'),
        },
      },
      define: {
        'process.env.NODE_DEBUG': 'false',
      },
    })
  },
}
