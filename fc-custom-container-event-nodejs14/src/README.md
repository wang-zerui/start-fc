# Function Compute custom container Nodejs14 event function example

You can quickly experience Nodejs14 on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-event-nodejs14 -d start-cc-nodejs14`
- Enter the project：`cd start-cc-nodejs14`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`s invoke -e '{"key":"val"}'`

The entire process of initialization and deployment of the `Custom Container Nodejs14` Event function example can be realized
