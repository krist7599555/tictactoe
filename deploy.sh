# # deploy.sh

# #!/usr/bin/env sh

# # abort on errors
# set -e
yarn build
cp -r ./dist ./docs
# echo Building. this may take a minute...
# yarn build

# # navigate into the build output directory
# cd dist

# # if you are deploying to a custom domain
# # echo 'example.com' > CNAME

# echo Deploying..
# git init
git add -A
git commit -m 'deploy'
git push
# # deploy
# git push -f git@github.com:krist7599555/tictactoe.git gh-pages

# cd -
