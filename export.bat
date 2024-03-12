@echo off

for %%i in ("%folder_path%\*.html") do (
   (echo --- & echo --- & type "%%i") > "temp_file.html"
   move /Y "temp_file.html" "%%i"
)

echo Frontmatter appended to all HTML files.