# README

A repository for testing some example in browsers.  

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)  
  
## Conventional Commits

NOTE: This repo has switched to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0). It requires `pre-commit` and `commitizen` to help with controlling this.  

```sh
# install pre-commmit (prerequisite for commitizen)
brew install pre-commit
brew install commitizen
# conventional commits extension
code --install-extension vivaxy.vscode-conventional-commits

# install hooks
pre-commit install --hook-type commit-msg --hook-type pre-push
```

[![Repository](https://skillicons.dev/icons?i=html,tailwind)](https://skillicons.dev)

## Development Tools

```sh
# use a live server to server up pages that have resources
code --install-extension ritwickdey.LiveServer
```

## 01 - Skeleton

A simple skeleton to help bootstrap examples.  
Steps [README.md](./01_skeleton/README.md)  

## 01 - Tailwind Skeleton

A skeleton usng tailwind with raw html.  
Steps [README.md](./01_tailwind_skeleton/README.md)  

## 02 - Modules

A simple test of modules.  
Steps [README.md](./02_modules/README.md)  
