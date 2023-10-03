SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension:false,
  packages:{
    ".":{
      main:'./src/index.js',
    }
  },
  meta:{
    '*.js':{
      'babelOptions':{
        react:true
      }
    },
    '*.css':{ loader:'css' },
    '*.json':{loader:'json'},
   '*.jpg':{loader:'url'}
    
  },
  map:{
    'plugin-babel':'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build':'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react':'react@17.0.1/umd/react.development.js',
    'react-dom':'react-dom@17.0.1/umd/react-dom.development.js',
    'react-router-dom':'react-router-dom@6.11.0/dist/umd/react-router-dom.production.min.js',
    'css':'systemjs-plugin-css', 
    'firebase/app': 'firebase/app',
    'firebase/auth': 'firebase/auth',
    'cropperjs':'cropperjs@1.5.13/dist/cropper.js',
    'cropper.css':'cropperjs@1.5.13/dist/cropper.min.css',
    'react-world-flags':'react-world-flags@1.5.1/dist/react-world-flags.js',
    'qrcode-react':'qrcode.react@3.0.0/lib/index.js'
     //'react-qr-reader':'react-qr-scanner@0.0.7/lib/index.js'
  },
  transpiler:'plugin-babel'
});

SystemJS.import('./src/index')
  .catch(console.error.bind(console));