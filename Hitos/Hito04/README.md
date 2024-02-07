## Hito04:  Integración continua :

- [Continuous Integration systems comparison ](#item1)
- [GitHub Actions implementation](#item2)


## Continuous Integration systems comparison <a name="item1"></a>
Since the description of this [Hito04 ](https://github.com/cvillalonga/CC-23-24/blob/master/hitos/4.CI.md)is about the selection and implement a Continuous Integration (CI) system from several that offer different functionalities, here is a brief description and comparison among them ones of them.  

#### GitHub Actions:
GitHub Actions is an integrated service on GitHub designed to automate development workflows. It stands out for its ease of configuration, customization, and seamless integration with GitHub services.

#### CircleCI:
As a cloud platform, CircleCI enables the rapid and efficient creation of applications with extensive compatibility across languages, tools, and environments. It promotes agile and high-performance workflows.

#### Jenkins:
Jenkins, an open-source tool, manages CI/CD pipelines on local or remote servers. Its flexibility and extensibility, supported by a large community of developers, offer in-depth customization but require more maintenance.

#### Travis CI:
Easily integrated with GitHub, Travis CI is a cloud service streamlining testing and deployments. Its simplicity, speed, and reliability make it an attractive choice for applications hosted on GitHub.
  
Considering that the project has been hosted on GitHub since the beginning as part of the learning process,  I have decided to star and continue with GitHub Actions and CircleCI .
  
## GitHub Actions implementation <a name="item2"></a>

The first step is the creation of the GitHub Actions file, in my case, it's named "[main.yml](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/.github/workflows/main.yml)", located in the root directory of the project at
"github/workflows/main.yml". This file automates the build and deployment of a Docker image to Docker Hub on every push to the repository.
It utilizes secrets to authenticate with Docker Hub and generates unique tags based on the GitHub commit hash.  

![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/068deefd-9003-4f49-bff9-a6871932c47b)

Next, we have the creation of secrets in GitHub. In the "Settings" tab of the repository, navigate to "Secrets and Variables" and then "Actions"
 I added two secrets, as shown in the following figure:    
 
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/82ff92e4-6258-4fcd-9925-300a637db3c6)

Then, after committing and pushing the work, when we navigate to the "Actions" tab in our repository, we can see the following:  

![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/b2c9d358-5b8f-4e09-8b1e-bb5e0384d2ea)  

## Circleci Actions implementation <a name="item2"></a>
Its very easy to  configure our project with CircleCI we just neet:
1. To Access the CircleCI interface at app.circleci.com.
2. Authorize the connection between CircleCI and our GitHub account.
3. Choose the repository we want to integrate with CircleCI.
4. When given the option to select a configuration file, choose the "Fast" option to get a simplified starting configuration.
5. Click "Set Up Project" to proceed.
6. Choose a sample configuration, our project, and select Node.js. After that, click "Commit & Run."
This will automatically generate a configuration file [.circleci/config.yml](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/.circleci/config.yml).
And this is the result of  CircleCI dashboard:

  ![11111](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/4375d3f5-6ca2-4641-94e2-1bdffe038bed)







