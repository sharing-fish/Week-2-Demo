# Week-2-Demo
<!-----
* Docs to Markdown version 1.0β36
* Fri Jun 14 2024 08:16:29 GMT-0700 (PDT)
* Source doc: Week 2 Demo
----->


**Introduction**

Chapter 2 centers around GitHub and its different offerings and services. It focuses on 4 aspects in particular; GitHub Actions, projects, accessing information through their API’s (both REST and GraphQL), and security. To apply the knowledge that we learned from this chapter, we have created a project that touches on all of these areas. Our project is a node.js web application that uses an interactive HTML webpage that allows you to query GitHub’s GraphQL API to retrieve a given user’s repositories. This application is hosted in a GitHub repository owned by our sharing-fish organization and takes advantage of GitHub’s built-in security features to promote code safety as well as a workflow with multiple jobs that perform a variety of different tasks.

**Security**



* CodeQL/Code Scanning
    * What: Runs on push as a separate workflow by default.  Scans your code for vulnerabilities.
    * Why: Provides a layer of security to quickly alert developers of any safety issues.
* Dependabot
    * What: A tool that scans for both updates to and vulnerabilities found in your projects dependencies. You can allow it to automatically create pull requests to update to newer and more secure versions of your dependencies.  Runs daily by default.
    * Why: Allows for the automation of project maintenance, reducing the toil required to keep a project running and secure over a long period of time.
* Secret Scanning
    * What: Scans code on push and blocks uploading tokens or keys
    * Why: Prevents developers from accidentally creating vulnerabilities in their repo, saving them from hacking threats or time losses in securing the repo again. Saved us from uploading a key, only called on push so caused some issues with older local commits.

**APIs**



* GraphQL vs Rest
    * What: Both technologies allow you access resources on GitHub, but do so in very different ways. While GraphQL is newer and far more dynamic in its capabilities, it is also far more complex and so there are certainly cases where opting to use REST makes sense. Initially our application used REST, and given the simplistic nature of the resources it's requesting, just a list of a user’s repositories, it would work just fine. However, we wanted experience working with GraphQL and so we pivoted part-way through development. 
    * Why: REST API’s require an endpoint for each specific resource, and so attempting to retrieve related data requires multiple calls. Additionally, you don’t have much control over what you retrieve from said endpoint. GraphQL on the other hand, allows the creation of complex queries that can fetch a number of resources with a single request, as well as only retrieving the aspects of the resources that you specify. This puts more power in the hands of the user and is preferable in many, if not most, cases.
* PAT
    * What: PAT, or personal access tokens, are keys that provide authenticated access to GitHub APIs. When used with the GraphQL or REST APIs, you are able to retrieve private resources, as well as create and make changes to repositories, projects, and more.
    * Why: Due to the nature of GraphQL’s queries, a single request can quickly become bloated and put a strain on the API. GitHub counters this by using rate limits, which limit how many resources can be requested in a single request. The rate limit for unauthenticated requests is incredibly low, so we opted to use an organizational access token to work around that.

**Workflow**



* Secrets
    * What: Store sensitive values like tokens or keys in GitHub without exposing their values to any users.
    * Why: Allows for collaboration between users online and using keys in automation without creating vulnerabilities.  Variables can be used in automation and can be updated without having to modify the workflow code.
* Conditionals
    * What: The workflow is able to continue after a failure and run a desired job.
    * Why:  Different actions may need to be taken depending on certain parameters or outcomes.  Conditionals allow us to have more functionality with less work from the programmer, and does not require them to have to monitor the testing process as closely
* Creating issues
    * What: Using REST API calls, we can create an issue on the github page. (issues are tied to the owner PAT)
    * Why: The workflow can make automated API calls and create issues to notify users if any actions need to be taken.  The developer does not have to analyze the results if no errors come up, and only has to pay close attention if there is an actual issue.  REST API is much simpler than GraphQL and is ideal for a non-changing use.
* Slack bot
    * What: Using a custom webhook action made by Slack, we can give the channel ID, message, and a token made in the Slack development website, and have that message sent to update the user on the completion of a job.
    * Why: Actions can use tools like webhooks or API calls to interact with external resources automatically.  Using an automated slack bot can allow programmers to work on other things while their longer tests are running and be notified when they are finished remotely.
* “Semantic” versioning
    * What: This series of actions pulls the current version tag down with REST API calls, uses a short BASH script to parse and increment the patch number, and updates the release tag to the new value with another API call
    * Why: This allows for the user to not have to put any effort into updating the patch, and even though this is a simple implementation, can be modified depending on the needs of the programmer.  <span style="text-decoration:underline;">Automation of monotonous tasks reduces TOIL and greatly improves the programming experience.</span>

Chapter 2 was focused on GitHub and its many different tools and services. The biggest takeaway for me was that GitHub Actions is a very powerful CI/CD platform. Through its custom workflows, it enables developers to automate complex and repetitive tasks like building, testing, and deploying, based on a wide variety of event triggers. This reduction of toil serves to increase both the speed at which a developer can produce code, and improve the quality of that code, which resonates clearly with our goal as DevOps engineers. Additionally, using actions within those workflows serves to increase collaboration and transparency between developers through things like the automated creation of issues or status notification. 
