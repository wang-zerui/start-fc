# Function Compute custom container C++ http function example

You can quickly experience C++ on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-http-cpp -d start-cc-http-cpp`
- Enter the project：`cd start-cc-http-cpp`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`curl` to access the custom domain name generated when the project is deployed

The entire process of initialization and deployment of the `Custom Container C++` HTTP function example can be realized

# Secondary development

Modify the two function in code/sample/src/handlers/echo_handler.cpp：

- EchoHttpHandler::OnInvoke
- EchoHttpHandler::OnInitialize
