# XOR-Gateway (Exclusive Gateway)

The following process is used to decide about what to do with your free time in the afternoon:

![Process Diagram](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/XOR-Gateway/img/Process_afternoonActivity.png?raw=true)

The process starts when you initially think of what you could do in the afternoon. First, you "Check the weather". After executing this task, you know if it is rainy or sunny outside and based on this information, you decide wheather to "Go to the park" or "Study". After executing this task, the process is finished.
In order to collect the information about the weather on Camunda and guide the workflow into the corresponding direction, you'll have to add a form, where the user can enter the observed weather conditions, and afterwards use this process variable at the gateway to automate the decision about which task should be executed.


# 1 Add the form

Add a form to the activity "Check the weather", where the user has to enter if it is *sunny* or *rainy* today. Store this information in a process variable called "weather".

![Activity checkWeather](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/XOR-Gateway/img/Form_CheckWeather.png?raw=true)

# 2 Catch the process variables

Add conditions to the different flows by clicking the arrows coming out of the splitting exclusive gateway. Use the condition type "Expression" and define the condition: The activity "Go to the park" should be executed if the weather is *sunny*, the activity "Study" should be executed if the weather is *rainy*.

![Flow weather](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/XOR-Gateway/img/Flow_weather.png?raw=true)

# 3 Deploy the process and test it

Deploy the process using the Camunda-Modeler UI. Start the process and try to enter *rainy* or *sunny* when you are asked to check the weather. Does the engine execute the correct path? What happens if the weather is *foggy*? Try to enter a string to the form which is not defined in the following workflow. Interpret your findings and think about a way to improve the process.