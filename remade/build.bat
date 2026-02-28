@echo off
echo === RUSocial Extension Build ===
echo.
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo.
echo Building extension...
call npx webpack --mode production
if %errorlevel% neq 0 (
    echo ERROR: webpack build failed
    pause
    exit /b 1
)
echo.
echo === Build complete! ===
echo Extension is in the dist/ folder.
echo Load it in Chrome at chrome://extensions (Developer mode > Load unpacked)
echo.
echo IMPORTANT: Don't forget to place rusocial.png in the dist/ folder!
echo Download it from: https://i.imgur.com/9HVVNRt.png
echo.
pause
