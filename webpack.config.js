const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = function(env) {

    return {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        mode: "production",
        output: {
            path: path.resolve(__dirname, 'client'),
            filename: 'bundle.js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: ["/node_modules/", "/server/", "/public/"],
                    use: "babel-loader"
                },
                // {
                //     test: /\.css$/,
                //     use: [
                //         {
                //             loader: "style-loader"
                //         },
                //         {
                //             loader: "css-loader"
                //         }
                //     ]
                // },
                // {
                //     test: /\.(png|svg|jpg|gif)$/,
                //     use: ['file-loader']
                // }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new hwp({
                template: path.resolve(__dirname, 'src', 'index.html')
            })
        ]
    }
}