# Function Compute custom container C++ event function example

You can quickly experience C++ on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-event-cpp -d start-cc-event-cpp`
- Enter the project：`cd start-cc-event-cpp`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`s invoke -e '{"key":"val"}'`

The entire process of initialization and deployment of the `Custom Container C++` Event function example can be realized

# Secondary development

Modify the two function in code/sample/src/handlers/echo_handler.cpp：

- EchoHandler::OnInvoke
- EchoHandler::OnInitialize
