# Only install seneca to run tests.
# There is no explicit dependency either in production or development
# because this plugin is itself a dependency of the seneca module.

if [ "link" == $1 ]; then
  rm -rf ./node_modules/seneca
  ln -s ../../seneca ./node_modules
fi

if [ "plugin" == $1 ]; then
  rm -rf ./node_modules/seneca
fi

if [ ! -d "./node_modules/seneca" ]; then
  npm install seneca@plugin
fi
./node_modules/.bin/mocha test/*.test.js
