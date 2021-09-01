# Function Compute custom container Python3.9 event function example

You can quickly experience Python3.9 on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-event-python3.9 -d start-cc-py39`
- Enter the project：`cd start-cc-py39`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`s invoke -e '{"key":"val"}'`

The entire process of initialization and deployment of the `Custom Container Python3.9` Event function example can be realized
