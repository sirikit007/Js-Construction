@rem FILE: push_github.cmd
@echo off
chcp 65001 >nul
setlocal EnableExtensions DisableDelayedExpansion

set "REPO_URL=%~1"
set "BRANCH=%~2"
if not defined BRANCH set "BRANCH=main"

if not defined REPO_URL (
  echo ERROR: Repo URL is missing.
  echo Usage: push_github.cmd "https://github.com/user/repo.git" [https://github.com/sirikit007/Js-Construction.git]
  exit /b 2
)

where git >nul 2>nul
if errorlevel 1 (
  echo ERROR: git not found in PATH.
  exit /b 3
)

echo INFO: Repo URL: %REPO_URL%
echo INFO: Branch: %BRANCH%
echo.

if exist ".git" (
  echo INFO: Git repo already initialized.
) else (
  echo INFO: Initializing git repo...
  git init
  if errorlevel 1 exit /b 10
)

echo INFO: Adding files...
git -c core.fsmonitor=false add -A
if errorlevel 1 exit /b 11

echo INFO: Creating commit...
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Initial commit"
  if errorlevel 1 (
    echo ERROR: Commit failed. If you see "Author identity unknown", run:
    echo git config --global user.name "Your Name"
    echo git config --global user.email "you@example.com"
    exit /b 12
  )
) else (
  echo INFO: Nothing to commit.
)

echo INFO: Setting branch...
git branch -M "%BRANCH%"
if errorlevel 1 exit /b 13

echo INFO: Setting remote origin...
git remote remove origin >nul 2>nul
git remote add origin "%REPO_URL%"
if errorlevel 1 exit /b 14

echo INFO: Remote check...
git remote -v

echo INFO: Pushing...
git push -u origin "%BRANCH%"
if errorlevel 1 exit /b 15

echo.
echo OK: Push completed.
git status
exit /b 0
