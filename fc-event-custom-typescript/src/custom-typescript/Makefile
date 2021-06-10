build:
	s build --use-docker

deploy: build
	s deploy -y

invoke:
	s invoke -e "Hello World"

.PHONY:deploy invoke