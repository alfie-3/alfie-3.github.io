@ECHO  OFF
cd /G %1
git add -A
git commit -m "Website updates."
git push origin main