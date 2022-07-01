const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [ '@babel/preset-react' ],
                        plugins: [ '@babel/plugin-transform-runtime' ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
    }
};