const Path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        [`kapeta/resource-type-auth-jwt-provider:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/ProviderConfig.ts'),
            filename: `kapeta/resource-type-auth-jwt-provider.js`,
        },
        [`kapeta/resource-type-auth-jwt-consumer:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/ConsumerConfig.ts'),
            filename: `kapeta/resource-type-auth-jwt-consumer.js`,
        },
    },
    output: {
        path: Path.join(process.cwd(), 'web'),
        filename: '[name].js',
        library: {
            name: `Kapeta.resourceTypes["[name]"]`,
            type: 'assign',
            export: 'default',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    sourceMaps: true,
                    presets: ['@babel/env', '@babel/typescript']
                },
            },
            {
                test: /\.ya?ml$/,
                use: ['json-loader', 'yaml-loader'],
                include: Path.resolve(__dirname, './'),
            },
        ],
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less', '.yml', '.yaml'],
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        lodash: '_',
        '@kapeta/ui-web-components': 'Kapeta.Components',
        '@kapeta/ui-web-types': 'Kapeta.Types',
        '@kapeta/ui-web-utils': 'Kapeta.Utils',
        '@kapeta/ui-web-context': 'Kapeta.Context',
    },
};
