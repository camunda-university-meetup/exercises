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
Erstelle ein Formular für die Aufgabe "Process Order". Achte darauf, dass das Produkt und die Anzahl nur gelesen werden können. Die Adresse kann jedoch angepasst werden, da es häufig vorkommt, dass Kunden diese nicht im richtigen Format liefern. 

*Hinweise*: als Validierung kann `readonly` verwendet werden

## 2. Configure Assignments


