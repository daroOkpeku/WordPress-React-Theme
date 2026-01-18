command
npm init -y
install this package for react, vue or any js framework npm install @wordpress/scripts
install npm install @wordpress/scripts@27.9.0
after creating the src folder i need to add two script in the package.json 
in the  "scripts" section of the file 
a. "build":"wp-scripts build"
b. "start": "wp-scripts start"


add this it will automatically refresh the browser when you make changes on the react file 
 c."preview": "npm-run-all --parallel sync wpstart tailwindwatch",
 d. "sync": "browser-sync start -p 'http://localhost/wordpress-React' --files '**/*.php' 'build/*.js' 'build/*.css'",
 change this 'boilerplate-2024.local' to your domain name

install npm install npm-run-all --save-dev, 

with tailwind
"preview": "npm-run-all --parallel sync wpstart tailwindwatch",
"sync": "browser-sync start -p 'http://localhost/wordpress-React' --files '**/*.php' 'build/*.js' 'build/*.css'",


