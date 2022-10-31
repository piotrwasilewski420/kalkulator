pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('piotrwasilewski420')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t piotrwasilewski420/kalkulator:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push piotrwasilewski420/kalkulator:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}