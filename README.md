CI/CD Pipeline with GitHub Actions & Docker

 Project Overview
This project demonstrates how to set up a **Continuous Integration and Continuous Deployment (CI/CD)** pipeline using **GitHub Actions**, **Docker**, and **Docker Hub**.  
The pipeline automates the process of:
- Building a Node.js application into a Docker image
- Running tests with **Jest**
- Pushing the image to **Docker Hub**
- Deploying it locally using **Docker Compose / Minikube**

This ensures that every code change is automatically built, tested, and deployed without manual intervention.

---

 Done by  
Mohamed Askhaf, B.Tech. IT**

---

Tools & Technologies Used
- **Node.js (v18)** → Backend framework for the demo app  
- **Express.js** → Minimal web framework for Node.js  
- **Jest & Supertest** → Testing framework  
- **Docker** → Containerization of the app  
- **Docker Hub** → Container registry to store and share images  
- **GitHub Actions** → CI/CD automation platform  
- **Minikube / Local VM** → Local Kubernetes cluster for testing deployment  


---

Steps to Run Locally

Clone the Repository

git clone https://github.com/MohamedAskhaf04/Project-1_.CI-CD-Pipeline-with-GitHub-Actions-Docker.git
cd Project-1_.CI-CD-Pipeline-with-GitHub-Actions-Docker

2. Run with Docker Compose

docker-compose up --build
👉 The app will be available at: http://localhost:3000

🔄 CI/CD Workflow Explanation
1. Continuous Integration (CI)
On every push to the main branch:

GitHub Actions checks out the code

Installs dependencies (npm install)

Runs tests (npm test)

If tests pass → proceeds to build Docker image

2. Continuous Deployment (CD)
GitHub Actions logs into Docker Hub using repository secrets:

DOCKERHUB_USERNAME

DOCKERHUB_TOKEN

Builds and pushes image:


docker build -t <username>/devops-ci-cd:latest .
docker push <username>/devops-ci-cd:latest
The latest image can then be deployed locally using:


docker pull <username>/devops-ci-cd:latest
docker run -d -p 3000:3000 <username>/devops-ci-cd:latest
GitHub Secrets Setup
In your repository → Settings → Secrets and Variables → Actions, add:

DOCKERHUB_USERNAME → Your Docker Hub username

DOCKERHUB_TOKEN → Docker Hub access token

📸 Screenshots (Add in Report)
✅ Successful GitHub Actions pipeline run

✅ Docker Hub repository with pushed image

✅ Running app in local Docker / Minikube

✅ Conclusion
By completing this project, we achieved:

Automated CI/CD workflow with GitHub Actions

Containerization and deployment using Docker

Integration with Docker Hub for image storage

Testing automation with Jest

This pipeline reduces manual effort, ensures code quality, and enables faster deployments.
