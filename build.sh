./node_modules/.bin/jshint echo.js
./node_modules/.bin/docco echo.js -o doc
cp -r doc/* ../gh-pages/seneca-echo/doc
