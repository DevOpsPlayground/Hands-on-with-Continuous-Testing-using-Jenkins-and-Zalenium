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

We are going to install some required Plugins for the Playground this evening.

1. From the Jenkins home page click on the **Manage Jenkins** button from the menu on the left.  

![](images/manageJenkins.png)

2. Select **Manage Plugins** from this page.

![](images/managePlugins.png)

3. Select the **Available** tab.

![](images/available.png)

4. In the **Filter** bar, search for `NodeJS`.

![](images/filterNode.png)

5. Select the checkbox for **NodeJS**.

6. In the **Filter** bar now search for `Allure`.

7. Click the **Download now and install after restart** button. This will install **NodeJS** and **Allure** plugins.

![](images/installAfterRestart.png)

8. Select the **Restart Jenkins when installation is complete and no jobs are running** checkbox. Jenkins will now restart.

## Global Tool Configurations

Jenkins restarts occasionally hang in the web browser so you may need to manually navigate to your Jenkins homepage: http://yourVmIp:8080 

1. You will be required to log-in using the same credentials as before.  

Username: `DevOps`  
Password: `Playground`

2. Navigate back to the Jenkins **Dashboard**.

3. Select **Manage Jenkins**. 

![](images/manageJenkins.png)

4. Select **Global Tool Configuration**

![](images/globalConfig.png)

5. You should see an option for **NodeJS** near the bottom of this page. Select the **Add NodeJS** button.

![](images/addNode.png)

6. Enter the following credentials:

Name: `node`
Version: `NodeJS 8.12.0`
Leave everything else as default.

Press the **Save** button at the bottom of the page.

![](images/nodeConfig.png)

7. Select back into **Global Tool Configuration** and look for **Allure Commandline** section.

8. Select **Add Allure Commandline**

9. Enter the following credentials:

Name: `allure`
Version: `2.7.0`

Press the **Save** button at the bottom of the page.

![](images/allureConfig.png)

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

3. Once the code has been pased in then press the **Save** button at the bottom of the page.

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

