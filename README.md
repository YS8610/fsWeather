# Simple Weather Website using Angular and Spring Boot framework  
The website is generated using Spring Boot framework as backend REST server and Angular framework as frontend rendering. The weather information is fetched using openweather api.  
  
## How it works
The front end webpage will be rendered using Angular which is basically a simple form. After the user finished adding in the cities, the user selection will appear below as link to another detail page. The link request will be sent to the back end server written using Spring Boot framework. The server (which stores the openweather api key) will process the request and sent the response in Json format to angular so that the result will be displayed.  
  
## How to Run  
The angular files are already built using `ng build` and placed in the static folder of Spring Boot directory to be served as a Single Page Application. To run, use `mvn spring-boot:run` to start Spring Boot application.