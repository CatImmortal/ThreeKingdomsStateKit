@echo off
cd /d "%~dp0"
npm run dev:preview -- --host 127.0.0.1
pause
