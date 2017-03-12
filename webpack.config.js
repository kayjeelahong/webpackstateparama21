var path = require('path');

module.exports = {
context: __dirname,
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
	
 devServer : {
  proxy: {
  			"/Groups": "http://localhost:9906/",
				"/groups": "http://localhost:9906/",
					"/#/say/:name": "http://localhost:9906/"
 	}
 },
 
 /**
 *
 * proxy connet to backend code
 * devServer : {
 *  proxy: {
 * 			"/": "http://localhost:9900/"
 *        }
 *   },
 *
 */
	
module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /build/],
        loader: 'eslint'
      }
    ],
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
      
	  {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./src/components')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {

    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'}
    ]
  },
  plugins: [],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: true,
    failOnError: true
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};

