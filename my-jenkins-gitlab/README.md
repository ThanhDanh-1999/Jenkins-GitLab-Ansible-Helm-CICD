Welcome to Jenkins/Gitlab

To download the base docker image from the registry-private, you need to add a variable (i.e “DOCKER_AUTH_CONFIG”) with registry-private configuration details in it.

Add the below variable to the GitLab variables:

Key : DOCKER_AUTH_CONFIG

Value:
```
{
	"auths": {
		"https://index.docker.io/v1/": {
			"auth": "<USERNAME>:<PASSWORD> (converted to base64)"
		}
	}
}
```


cicd + ansible:
https://medium.com/sopra-steria-norge/managing-your-infrastructure-with-ansible-and-gitlab-ci-cd-c820188270d6
https://blog.callr.tech/gitlab-ansible-docker-ci-cd