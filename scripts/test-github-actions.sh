secretFile="./config/nektos-act.secrets"

if ! command -v act &> /dev/null
then
    echo "act could not be found, please install before continuing"
    exit
fi

echo Please make sure you are in the root of the project
echo

# Check if secretFile exists, if not create it
if [ ! -f $secretFile ]; then
    echo "Missing act config file. Creating $secretFile, please fill it out"
    echo

    # if the config folder doesn't exists, create it
    if [ ! -d "./config" ]; then
        mkdir ./config
    fi

    touch $secretFile
    echo -e "AZURE_STATIC_WEB_APPS_API_TOKEN=INSERT HERE
ACCESS_GITHUB_TOKEN=INSERT HERE" > $secretFile

    echo "nektos-act.json created, please fill it out before running this script again"
    exit
fi

# List alle files in the .github/workflows folder, assign them a number and have the user choose one
echo "Please choose a workflow to run"
echo
ls -1 ./.github/workflows | cat -n
echo
read workflowNumber
echo

# From the workflow number select the full path to one of the files, it's important that it's 
# the full path
workflow=$(ls -1 ./.github/workflows | cat -n | grep -w $workflowNumber | awk '{print "./.github/workflows/"$2}')
echo "Selected: $workflow"
echo

echo Running act
act -W $workflow --secret-file $secretFile