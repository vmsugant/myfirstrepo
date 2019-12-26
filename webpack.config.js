const path = require("path")

const postCSSplugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-import')
]

module.exports = {
    entry : "./app/assets/scripts/App.js",
    output : {
        filename : "bundled.js",
        path : path.resolve(__dirname,"app")
    },
    mode : "development",
    watch:true,
    module:{
        rules:[
            {
                test : /\.css$/i,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader?url=false'
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins : postCSSplugins
                        }
                    }
                ]
            }
        ]
    }
}