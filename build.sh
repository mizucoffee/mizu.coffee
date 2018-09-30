for i in `git tag`
do
  git checkout $i
  yarn
  npx gulp
  mv dest/ $i
done

git checkout master
yarn
npx gulp

for i in `git tag`
do
  mv $i dest/
done
