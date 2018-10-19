# DevOps Playground Edinburgh: Continuous Testing with Jenkins and Zalenium

![](images/zalenium.png)

## What is already installed on your VM?

In order to get the most out of this session we have pre-installed some components onto the VM. Here is how we created the VMs along with some further reading.

- These are Azure hosted. We created the first VM (with Ubuntu 16.04 OS) using Azure Portal and then used Azure CLI to clone the VM - https://docs.microsoft.com/en-us/azure/virtual-machines/linux/copy-vm
- We installed Java using these instructions - https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04
- We installed Jenkins using these instructions- https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-16-04

## Accessing Your Machine

Tonight's Playground will be performed using a command line tool and a web browser.

We will provide you with a machine IP address which is your Ubuntu Virtual Machine (VM) for the duration of tonight's DevOps Playground.

1. To access your machine first open a Terminal/Command window and enter the following command:
`ssh DevOps@your.Ip`

2. You will be asked about whether you wish to proceed, type `yes` and press return.
    
3. You will be prompted for a password. The password for all machines is `Devopsplayground!`. 

You will now be connected to your VM via SSH. The majority of our Playground will be performed using the web browser, but we may need to access this terminal window later in the session.

## Accessing Your Jenkins Instance

1. Jenkins has already been installed and is up and running on your VM. To access Jenkins use the following URL: http://yourVmIp:8080
2. To log in to Jenkins, use the following credentials:

Username: `DevOps`  
Password: `Playground`

## Jenkins Plugins to Install

1. Blue Ocean, NodeJS, Allure

## Creating a Jenkins Pipeline

1. Click on the **Create New Jobs** link from the Jenkins home page.
2. In the 'Enter an item name' at the top of the page type in `zalenium-pipeline`.
3. Select the **Pipeline** option from the options below.
4. Click on the **OK** button at the bottom of the page.

![](images/creatingPipeline.png)

We are now presented with the Jenkins Pipeline configuration page.

## Editing Your Jenkins Pipeline

For the purposes of this evening's Playground we will be editing our pipeline script in the Pipeline script editor in the Jenkins UI.  
**Please note** that better practice would be to have a 'Jenkinsfile' in a repository. This would put your Pipeline script under version control meaning you can track changes and revert to previous versions of the script.  
More information can be found here: https://jenkins.io/doc/book/pipeline/jenkinsfile/  

1. Select the **Pipeline** option in the toolbar at the top of the page.  
![](images/pipelineButton.png)  

2. In the Pipeline editor paste in the following code:

```
pipeline {
    agent any
    stages {
        stage('Code and Dependencies'){
            stage('Checkout Code'){
                steps{
                    git 'https://github.com/ecsdigital/devopsplayground-edi-9-zaleniumci.git'
                }
            }
            stage('Install Dependencies'){
                steps{
                    sh 'npm install'
                    sh 'npm install wdio-allure-reporter --save-dev'
                    sh 'npm install -g allure-commandline --save-dev'
                    sh 'docker pull elgalu/selenium'
                    sh 'docker pull dosel/zalenium'
                }
            }
        }
    }
}
```

![](images/pipelineEdit.png)

## Running Your Jenkins Pipeline

Add steps for:

- Checking out code.
- Starting Zalenium
- Installing Node
- Running tests.

## Reporting Using Allure

- Generate reports using Allure in Pipeline
- Show the reports.

