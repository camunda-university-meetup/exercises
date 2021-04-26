# User Task

You have the task to finalize the following process:

![Process](img/process.png?raw=true "Process")

The order process starts with the task "Process order" and is completed with the task "Deliver order". However, forms for the two user tasks are missing. These are needed to display the correct information to the processors. Also, the tasks are not assigned to anyone. This can be done better!

## 1. Add the form

A form is already defined in the start event. A detailed documentation  Take a close look at it. The following fields / data are available:

- **product**: Ordered product
- **amount**: Amount of the ordered product
- **address**: Address of the customer

![Start Form](img/01-StartForm.png?raw=true "Start Form")

A more detailed documentation on generated forms is available [here](https://docs.camunda.org/manual/latest/user-guide/task-forms/#generated-task-forms).

### 1.1 Process Order
Create a form for the `Process Order` task.
The following fields should be displayed:

- product
- amount
- address

Make sure that the product and quantity can only be read. However, the address can be customized, as it is common that customers do not provide it in the correct format. 

*Hints*:
- there is a validation named `readonly`
- the id (process variable name) of the fields must match the ones of the start event
- do not forget to configure the type and the label


### 1.2 Deliver Order
Almost there. Now we need a form for the `Deliver order` task that contains the following fields:

- address
- delivered (boolean / checkbox)

The address cannot be edited. To complete the task the checkbox delivered must be selected.

*Hints*:
If a `boolean` contains the validation `required`, the checkbox must be selected to complete the task.


## 2. Configure assignments
By configuring the User Task, we can control who the task is available to. The following options are available to us for this purpose:

- Assignment to a specific person via the assignee attribute
- Assignment to a group of persons via the candidate group attribute

![Start Form](img/02-Assignment.png?raw=true "Start Form")

### 2.1 Process Order
In our process, the task "Process Order" is always processed by `mary`. Therefore we can enter her as assignee.

Start the process and then log in with `mary` to complete the "Process Order" task.

### 2.2 Deliver Order
The delivery can be made by any person who is in the group `delivery`.