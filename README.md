TO #Building Brains


## Project Structure

```
./
│   README.md
│   LICENSE  
│
└───src/  
    │
    └───web/   
    │    │   Php laravel  
    │    └──────────────── 
    │        
    └───hub/  
         │   OpenHab  
         └─────────────────

```



## Workflow
Of a certain amount of bureaucracy, rules and regulations is, unfortunately, a necessity. 

Please bear with this for efficiency as our project is expected to be a middle-size project and   contributed by all of us.


1. __NEVER__ work ON `master` branch (`master` is for deployment)
2. Create a feature branch to work on (name it in a way we can understand what it is for)
3. After adding features, create a `pull request`
4. Travis CI will test your codes for you(with the current test suites)
5. After passing the test, it automatically merged by tool(or manually merged by us).



_If you can, add some test cases to ensure your codes work._
 
_You do not have to do test, but please explain the expecting functionality of your new-adding codes, which would be very helpful for us to improve the test suites._


To run server, npm install followed by npm start from the StandaloneHomepage directory
