# Gateways
Your task is to add the missing gateways to the diagram and deploy it.

![Gateway-exercise](/img/Gateway-exercise.png)


The process for following an invitation and visiting a bar is started as soon as you accept the invitation. Your first task is to "Call an Uber". Afterwards the paths splits into the tasks "Pack smartphone" and "Pack wallet". Which gateway should be used to divide the path into these branches? Don't forget to add a merging gateway after these two tasks! After packing everything you need, you can enter the Uber and proceed to drive to the bar. The process is completed as soon as you arrive at the bar.




# 1. Add the Gateways
Add a splitting gateway after the "Call a uber" task and change its type to "Parallel Gateway" by clicking the wrench-symbol. The token will be duplicated at this point and both of the tasks "Pack smartphone" and "Pack wallet" will wait for execution. Add a merging gateway after the two tasks, to make sure the process will not be further executed, before you haven't packed your smartphone **AND** your wallet.

![Bar Invitation](/img/ChangeGatewayType.png)



# 2. Deploy the process and test it
With your Camunda-application running on your local machine, deploy the process using the Camunda-Modeler UI. Open the tasklist inside the Camunda web-app, start the process and make sure that the task "Enter Uber" does not appear before you have finished the "Pack smartphone" **AND** "Pack wallet" tasks.