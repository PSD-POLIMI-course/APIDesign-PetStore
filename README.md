# APIDesign

This is a repository containing:
- a simplified API description of the usual PetStore example used in OpenAPI [https://petstore3.swagger.io]. Along with the description, the folder petstore-service contains an auto-generated skeleton of the code obtained with the OASTools for nodejs [https://oas-tools.github.io/docs/getting-started/overview] that has been customized to have a running and useful mock-up

Students are invited to check the code and, based on other APIs, generate new services

## To generate the skeleton

Run the following command which will download (the first time) and run the OAS tools. The code will be generated in the folder specified during the execution of the command

`npx @oas-tools/cli init`


## To run the code

Move to the folder created by the previous command and run the following command

`npm start`
