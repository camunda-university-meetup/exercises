# Deploying BPMN-Diagrams


## 1. Set up the camunda-application from github

Clone the prepared repository:

```
git clone https://github.com/camunda-university-meetup/exercise-application.git
```


You should be able to start the application (in e.g. eclipse or IntelliJ) and access the webapp on [localhost:8080](http://localhost:8080). Login with the default credentials (username: demo | password: demo). You should now see the Camunda Cockpit.

## 2. Deploy a Diagram

With your application running, open your BPMN-Diagram in the Camunda-Modeler and click the "Deploy Diagram"-button. Adjust the Deployment Name and Tenant-ID if necessary and click on "Deploy".

![Deployment Modeler](https://github.com/camunda-university-meetup/exercises/blob/dev/bpmn/deployment/img/Deployment_modeler.png?raw=true)

Your process definition should now be visible in the in the Camunda cockpit.
 
 
 ## 3. Start a process
 
Using the UI in your browser, click on "Tasklist" in the upper right corner.
 
![Camunda UI](https://github.com/camunda-university-meetup/exercises/blob/dev/bpmn/deployment/img/Camunda_UI.png?raw=true)

In the tasklist view, click "Start process" and select your deployed process. 

![Tasklist](https://github.com/camunda-university-meetup/exercises/blob/dev/bpmn/deployment/img/StartPorcess.png?raw=true)

The engine will begin to work along the process path and display tasks which have to be executed by humans in the tasklist.
