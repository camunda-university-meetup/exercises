# OR-Gateway (Inclusive Gateway)

Your task is to identify the information, which is relevant to execute the following process, and add the information by setting and catching process variables.

![Process Diagram](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/OR-Gateway/img/Process_Groceries.png)

The process starts as soon as you require some kind of groceries. You first have to go to the supermarket and then decide whether you buy apples, steaks or noodles. After you have bought everything, you bring the groceries home and you're done.

At which point should the information about which groceries are required enter the process?
Create a form that let's you add the information and utilize the process variables by using Expressions.

# 1 Add a form

The process should be started by setting the information about which groceries are required. So, in order to create your shopping list, set three different form fields (*apples*, *steak* and *noodles*) of type *boolean* at the start-event.

![Form](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/OR-Gateway/img/Form_StartEvent.png)

# 2 Use the variables

You are only supposed to buy apples, if you initially wrote them on your shopping list. That means you have to add the boolean expression to the corresponding flow. Click the arrow and add an Expression with the corresponding process variable name.

![Flow](https://github.com/camunda-university-meetup/exercises/tree/dev/bpmn/gateways/OR-Gateway/img/Flow_Apples.png)

Repeat this step for the steak- and noodels- path.
Deploy the process and make sure the engine creates tasks for all the groceries you have put on your shopping list. What happens if you start the process with *false* values for all the items on your shopping list? How could you improve the process? Is it feasible to extend the usability of the process and allow unlimited options (e.g. by using *string* values as input?