
# Hito02:  
In this Hito we will see all the Language, envirenment, Framwork, dependency, tools.. that I used for this project.  
As I am working with javascript in the VScode editor, in the nodejs environment the choice is clear to work with the **npm** task manager  
### npm: 
"npm" stands for Node Package Manager. It is a package manager for JavaScript and the default for the Node.js runtime environment. 
NPM is installed when Node.js is installed on a machine. npm (Node Package Manager) is a 
tool that allows us to create a Node.js project and install the libraries we use in the project. 
We can later use it to initialize the project. 

To initialize it, we need to type the following command.

~~~
npm init
~~~
As shown below  

![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/ee63b347-402a-4d60-9feb-1ac7fd514f80)


***

### Express: 
Express is a Node.js web application framework that provides extensive features for building web and mobile applications. 
It is used for constructing single-page, multipage, and hybrid web applications. It is a layer built on top of Node.js 
that assists in managing servers and routes.
To install it we need to do the commende
 
~~~
npm install express
~~~
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/8eaf13c6-505b-45da-92f4-a0e488fabbda)

***
### Test: 
#### Mocha and Chai
Mocha and Chai are both popular JavaScript libraries that are often used together for automated testing. Mocha is a
 testing framework that provides the structure and organization for running tests, while Chai is an assertion library that
provides a variety of ways to make assertions about the expected behavior of code. Mocha allows you to use any assertion library 
you wish, while Chai can be paired with any javascript testing framework. 
To install it we need to do the commende
~~~
npm install --save-dev mocha chai
~~~
For the test I used js files which are [**user.tes.js**](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Practica_CC/tests/user.test.js) and [**car.test.js**](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Practica_CC/tests/car.test.js), with these two files we define which functions to test  

We can see below  tests that i made for some functions to see if they are working on the right way or not.  


Till now in this project i user some tests of functions that i user and it's working perfectly  
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/4ccf073a-0985-4f98-9b92-1fd3f9d13c77)

### cc.yaml , Makefile:
A [**Makefile** ](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Practica_CC/Makefile)is a file that contains a set of rules and commands for building and managing the 
compilation of a project. It is usually used with the make utility, which executes
the commands in the Makefile according to the dependencies and timestamps of the files  

[**cc.yaml**](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Practica_CC/cc.yaml) Contains the project configuration, including the information necessary for its 
automation and continuous integration. It can specify details such as the programming language 
used, tests to be run, and other development-related tasks.


***
All thease tools that we were talking about we can find it in the in [**package.json**](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Practica_CC/package.json) that we have in the project  

![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/e53929ba-78d2-428a-b1cd-740e3adec154)




***

  
  


  
  


