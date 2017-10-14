import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
    entry: {
        js: './src/app-client.js',
    },
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=node_modules/.cache/babel-loader',
                },
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
        ],
    },
};

const server = {
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: [
        nodeExternals({
            modulesFromFile: true,
        }),
    ],
    entry: {
        js: './src/server.js',
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'server-es5.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=node_modules/.cache/babel-loader',
                },
            },
        ],
    },
};

export default [client, server];
