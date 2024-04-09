const path=require("path"),webpack=require("webpack"),GitRevisionPlugin=require("git-revision-webpack-plugin"),gitRevisionPlugin=new GitRevisionPlugin,autoprefixer=require("autoprefixer"),cssnano=require("cssnano");module.exports={mode:"production",bail:!0,devtool:"source-map",entry:{APlayer:"./src/js/index.js"},output:{path:path.resolve(__dirname,"..","dist"),filename:"[name].min.js",library:"[name]",libraryTarget:"umd",libraryExport:"default",umdNamedDefine:!0,publicPath:"/"},resolve:{modules:["node_modules"],extensions:[".js",".scss"]},module:{strictExportPresence:!0,rules:[{test:/\.js$/,use:["template-string-optimize-loader",{loader:"babel-loader",options:{cacheDirectory:!0,presets:["@babel/preset-env"]}}]},{test:/\.scss$/,use:["style-loader",{loader:"css-loader",options:{importLoaders:1}},{loader:"postcss-loader",options:{plugins:[autoprefixer,cssnano]}},"sass-loader"]},{test:/\.(png|jpg)$/,loader:"url-loader",options:{limit:4e4}},{test:/\.svg$/,loader:"svg-inline-loader"},{test:/\.art$/,loader:"art-template-loader"}]},plugins:[new webpack.DefinePlugin({APLAYER_VERSION:`"${require("../package.json").version}"`,GIT_HASH:JSON.stringify(gitRevisionPlugin.version())})],node:{dgram:"empty",fs:"empty",net:"empty",tls:"empty"}};