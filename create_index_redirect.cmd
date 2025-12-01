@rem FILE: create_index_redirect.cmd
@echo off
chcp 65001 >nul
setlocal EnableExtensions DisableDelayedExpansion

if not exist "main.html" (
  echo ERROR: main.html not found in current folder.
  echo Current: %CD%
  exit /b 2
)

if exist "index.html" (
  echo ERROR: index.html already exists.
  exit /b 3
)

echo ^<!doctype html^>>>index.html
echo ^<html lang="en"^>>>index.html
echo ^<head^>>>index.html
echo ^<meta charset="utf-8"^>>>index.html
echo ^<meta http-equiv="refresh" content="0; url=main.html"^>>>index.html
echo ^<meta name="viewport" content="width=device-width, initial-scale=1"^>>>index.html
echo ^<title^>JS Construction^</title^>>>index.html
echo ^</head^>>>index.html
echo ^<body^>>>index.html
echo Redirecting... If not redirected, open ^<a href="main.html"^>main.html^</a^>.>>index.html
echo ^</body^>>>index.html
echo ^</html^>>>index.html

echo OK: index.html created.
type index.html
exit /b 0
