echo "Installing node_modules...";
cd server && npm install;
cd .. && cd cyberus && npm install;
cd .. && cd server && node_modules/gulp/bin/gulp.js dev & cd ../cyberus && ng serve &
cd .. && echo "Install complete!"