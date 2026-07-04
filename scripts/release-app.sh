#!/bin/bash

set -euo pipefail

mkdir -p ~/.ssh
echo "$SSH_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -H "$SERVER_HOST" >> ~/.ssh/known_hosts 2>/dev/null

echo "Deploying to nginx"

pnpm codegen

pnpm build:web


rsync -avz \
      -e "ssh -i ~/.ssh/id_rsa" \
      "./dist/" \
      "$SERVER_USER@$SERVER_HOST:$APP_PATH/"