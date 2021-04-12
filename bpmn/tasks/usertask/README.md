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
Create a form for the "Process Order" task. Make sure that the product and quantity can only be read. However, the address can be customized, as it is common that customers do not provide it in the correct format. 

*Hinweise*:
- there is a validation named `readonly`
- the id (process variable name) of the fields must match the ones of the start event
- do not forget to configure the type and the label

### 1.2 Deliver Order


## 2. Configure Assignments


