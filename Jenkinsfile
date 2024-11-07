pipeline {
    agent {
        docker { 
            image 'docker:latest' 
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket to build images inside the container
        }
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the public repository
                git url: 'https://github.com/imbivek08/playrepo.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Tag the Docker image with the Jenkins build number
                    def imageTag = "my-docker-image:${env.BUILD_NUMBER}"
                    sh "docker build -t ${imageTag} ."
                }
            }
        }
    }

    // post {
    //     always {
    //         script {
    //             // Remove the Docker image after the build to save space
    //             sh "docker rmi my-docker-image:${env.BUILD_NUMBER} || true"
    //         }
    //     }
    // }
}
