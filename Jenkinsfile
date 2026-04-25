pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
    post {
        always {
            // This captures your test results
            junit '**/test-results/**/*.xml'
        }
    }
}
