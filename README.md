# custom-nodejs-load-balancer  
The loadBalancer.js file is set to run on 4000 port  
The requests to the route '/roundRobin' is redirected to ports 3000, 3001, 3002, 3003 using round robin algorithm  
You will have to first run instances of server.js on the ports 3000, 3001, 3002, 3003
