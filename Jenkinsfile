pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/imbivek08/playrepo.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageTag = "my-docker-image:${env.BUILD_NUMBER}"
                    sh "docker build -t ${imageTag} ."
                }
            }
        }
    }

    post {
        always {
            script {
                def imageTag = "my-docker-image:${env.BUILD_NUMBER}"
                sh "docker rmi ${imageTag} || true"
            }
        }
    }
}
