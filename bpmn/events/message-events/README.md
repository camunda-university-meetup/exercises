### Message Events
Message events can be used to start, interrupt or end messages. Additionally, they can used as non-interrupting events, e.g. if one of your customer requests some additional information without wanting to interrupt a process. The event always provides a name/ topic and carries a payload, basically like every simple email.

Let us consider a simple Ordering Process: 
![process_event](img/process_order.png)
Once an order is placed by the customer, an employee reviews the order, waits for payment to be received, and then ships the ordered product. 
So far so good, but how can we trigger the event? In production, messages come, for example, from customers in the form of emails, which are processed by components of the backend. In our case we will simulate the customer request by an API call using *Postman*. A documentation of the Message API from Camunda can be found [here](https://docs.camunda.org/manual/7.15/reference/rest/message/post-message/)