## Hito04:  Creación de un contenedor para pruebas:

- [Choosing the container](#item1)
- [Dockerfile](#item2)
- [Container creation](#item3)
- [Running the container](#item4)
- [Pushing on docker hub](#item5)



## Choosing the container <a name="item1"></a>
I chosed node:18-alpine for several reasons, one of which is that my project is straightforward and doesn't require anything complex. Alpine images are very lightweight, significantly reducing the size of the Docker container, This means improved deployment efficiency and resource management.  node:18-alpine is specifically optimized for running Node.js applications, prove a ready-to-use environment for their development and deployment. The simplicity and efficiency of this image align well with the uncomplicated nature of my project, making it an ideal choice for enhancing deployment effectiveness and optimizing resource utilization.  

## Dockerfile <a name="item2"></a>
The [Dockerfile](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Dockerfile) designed for our container is as follows:  
  
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/d920207a-65c7-48ba-bded-d4eb235accd8)  

```
FROM node:18-alpine
```
This line specifies the base image to use, which is node:18-alpine based on Alpine Linux  
```
WORKDIR /app
```
Sets the working directory to /app in the Docker image, meaning all subsequent commands will be executed in this directory.  
```
COPY package*.json ./
```
Copies the package.json and package-lock.json files.
```
RUN npm install 
```
Executes the npm install command in the working directory, installing dependencies defined in the package.json file
```
COPY . .
```
Copies all files from the local build directory to the Docker image's working directory, including the application source code
```
EXPOSE 3000
```
 Exposes port 3000 in the Docker image.
 ```
 CMD ["npm", "test"]
```
 Sets the default command to run when a container based on this image is launched. In this case, it runs npm test to execute the application tests.

 ## Container creation <a name="item3"></a>  
 To create the container on use the following command in the cmd:
> docker build  -t ilyasszg/cloud-computing-2324 .

![docker build image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/0e19bb25-be37-4b86-b50e-b3c6663b2f0a)  

## Running the container <a name="item4"></a>

To execute: 
> docker run -it -v `pwd`:/app/test ilyasszg/cloud-computing-2324

![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/befa07f2-7c45-497c-bfda-c69e0859581b)

To see check the images we have we can type the following command:
> docker images
![docker images -terminal](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/6e6767ba-d3cf-486b-ac5e-9d0d7a263b23)

Or we can see it in our Docker desktop as shown in the following figure

![docker images -docker-desktop](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/7410ddd3-8f7b-4351-936f-ada9de465e3c)

We can also see our applciation deployement on docker desktop as showed in the following figure: 

![execturing test on docker_docker-desktop](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/e54d1394-f96c-4f53-b73b-280b19800276)

## Pushing on docker hub<a name="item5"></a>
As it is mentioned in docker hub repository, To push a new tag to this repository we can use the following commande 
> docker push ilyasszg/cloud-computing-2324:tagname
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/e5e95172-1231-4268-907e-089ad851ba1a)


![imagePublishingDockerHub](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/4afefb32-e21e-4f33-a5d3-71534e60de44)






 






