# Service Task

In a ride-sharing company, there is the following process:

![Process](img/process.png?raw=true "Process")

The requests are increasing. That's why more and more drivers are being hired, because that's how the money is earned. But the sales staff are increasingly overworked and can't make the phone calls in time. How do we deal with this? The phone call should be replaced by an e-mail! Your task is to design this step into automation.

## 1. Model service task

In the first step, to test the automation, we send a generic email. For this purpose, use the [Element-Template](./serviceTask.json) that is available. To do this, you need to download it and place it in the appropriate path on your computer. More information can be found at this [link](https://github.com/camunda/camunda-modeler/tree/master/docs/search-paths#app-data-directory)

After that you can restart the modeler and select the template in the service task. To do this, you must first turn the user task call person into a service task.

![Choose Template](img/01-choose-template.png?raw=true "Choose Template")

Then you can fill in the required data. Be creative, but send an email only to yourself!

![Complete Template](img/02-complete-template.png?raw=true "Complete Template")

Now test the process before moving on to the next step.

## 2. Customize forms

So far, we only have the customer's phone number. However, we need the e-mail address. Adapt the start form accordingly. As a new field you could introduce e.g. `email` with the type `string`.

## 3. Use data in e-mail sending

Jetzt müssen wir nur noch die richtigen Informationen versenden.
Die Antwort des Fahreres können wir als `content` setzen. Die `email` aus dem Startformular können wir als Empfänger in das Template geben.

![Configure Template](img/03-configure-template.png?raw=true "Configure Template")

