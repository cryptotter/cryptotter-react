#!/bin/zsh

source ~/.zshrc

gp && npm version patch && git push && npm publish