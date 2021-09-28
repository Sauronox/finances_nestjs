#!/bin/bash

filename_env=".env"

if [ $1="prod" ]; then
    filename_env=".env.prod"
fi
if [ $1="dev" ];  then
    filename_env=".env.local"
fi

docker-compose down --remove-orphans

if [ $2="rebuild" ]; then
    env $(cat $filename_env) docker-compose build --no-cache  
fi

env $(cat $filename_env) docker-compose up -d
