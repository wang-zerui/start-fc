# Function Compute custom container SpringBoot http function example

You can quickly experience SpringBoot on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-http-springboot -d start-cc-http-springboot`
- Enter the project：`cd start-cc-http-springboot`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`curl` to access the custom domain name generated when the project is deployed

The entire process of initialization and deployment of the `Custom Container SpringBoot` HTTP function example can be realized
