#!/bin/sh
sudo apt-get update && sudo apt-get upgrade -y

# Qwik install
cd qwik-app || exit

npm install 
npm install vite

cd ..

# Azure setup
az_user_information=$(az login --tenant 084b118d-164e-4290-92f0-621a6544e9bb)
az_subscription_id=$(echo $az_user_information | jq -r '.[0].id')

az account set --subscription $az_subscription_id
