# Service Tasks
Take a look at the following age verification process:

![Age verification process](img/process.png)

Let's say you are working in a liquor store and a suspiciously young looking guy wants to buy a bottle of Whiskey. You'll have to start a process to verify his age. At first you take a look at his ID in order to figure out his birthdate. Afterwards you'll calculate his age and ultimately check the data you have created during this process.


In this exercise, you'll learn how to automate tasks. In our example we will automate the "Calculate age" task. But first, let's have a look at which information has to be provided and processed at which task. 

## Variables
Open the Camunda app, navigate to the Tasklist and start a new *age_verification* process instance. 
Claim the appearing "Figure out birthdate"-task and enter a birthdate of your choice to the form.

![Figure out birthdate](img/claim.png)

After you have completed the first task, open the appearing "Calculate age"-task, claim it and click "load variables". You'll see the first variable *birthdate* and the value you entered to the form. Manually add a variable called "age", pass the age you have calculated and hit "complete". The review task let's you review the data and your calculations... You don't really benefit from that function at this point, but as soon as you have automated the "Calculate age"-task, this will give you the chance to ensure your code did what it was supposed to do.
The creation and consumption of variables looks like this: 

![Input output variables](img/input-output-variables.png)

Both variables, *birthdate* and *age*, are defined as global process variables at this point. In order to provide some reusability for your BPMN-elements and design them robust enough to perform in larger processes, we will map the variables as input- and Output-variables. Although this is not mandatory for our simple process, you will benefit from following this best practice when you start to work with processes that contain several subprocesses, where variables are reused several times in different scopes.
To introduce the variables locally, open the Camunda Modeler and navigate to the "Input/Output"-tab of the "Calculate Age"-task and enter the the corresponding values.

![Modeler variables](img/modeler-variables.png)

## Automation
### Delegates
Next, cast the task to a servicetask, open the "General"-tab in the Properties Panel and and choose "Delegate Expression" in the in the "Implementation"-filed. The code for this delegate is already included in the exercise-application project. Enter 
```
${ageCalculationDelegate}
```
in the "Delegate Expression" textfield, to call it as soon as the task is started.
Now redeploy your process and test the execution. Did the servicetask calculate the age correctly?

If everything is working, try to switch the "Check data"-task to a servicetask aswell. Use this template for the new Java class and let the method print the birthdate and the calculated age in the console.

````
@Component("yourDelegateName")  
@RequiredArgsConstructor  
public class YourDelegateName implements JavaDelegate {  
  @Override  
  public void execute(DelegateExecution execution) throws Exception{  
  //input:
  
  //processing:  
  System.out.println("Age and birthdate here");  
  
  //output:  

  }  
}
````

### External tasks