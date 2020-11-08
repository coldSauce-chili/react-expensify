//entry -> loader->plugins->output
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
// const DotEnv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}

// this variables should NOT exist here
// but theres no other way
// JSON.stringify within DefinePlugin does not work
const FIREBASE_API_KEY = JSON.stringify(process.env.FIREBASE_API_KEY)
const FIREBASE_AUTH_DOMAIN = JSON.stringify(process.env.FIRBASE_AUTH_DOMAIN)
const FIREBASE_DATABASE_URL = JSON.stringify(process.env.FIREBASE_DATABASE_URL)
const FIREBASE_PROJECT_ID = JSON.stringify(process.env.FIREBASE_PROJECT_ID)
const FIREBASE_STORAGE_BUCKET = JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET)
const FIREBASE_MESSAGING_SENDER_ID = JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
const FIREBASE_APP_ID = JSON.stringify(process.env.FIREBASE_APP_ID)


module.exports = (env) => {
    console.log('env: ', env)
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': FIREBASE_API_KEY,//JSON.stringify(process.env.NODE_ENV.FIREBASE_API_KEY),
                'process.env.FIRBASE_AUTH_DOMAIN': FIREBASE_AUTH_DOMAIN,//JSON.stringify(process.env.NODE_ENV.FIRBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': FIREBASE_DATABASE_URL,//JSON.stringify((JSON.stringify(process.env.NODE_ENV.FIREBASE_DATABASE_URL))),
                'process.env.FIREBASE_PROJECT_ID': FIREBASE_PROJECT_ID,//JSON.stringify(process.env.NODE_ENV.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': FIREBASE_STORAGE_BUCKET,//JSON.stringify(process.env.NODE_ENV.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': FIREBASE_MESSAGING_SENDER_ID,//JSON.stringify(process.env.NODE_ENV.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': FIREBASE_APP_ID//JSON.stringify(process.env.NODE_ENV.FIREBASE_APP_ID),
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist'
        }
    }
}
