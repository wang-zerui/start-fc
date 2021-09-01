# Function Compute custom container asp .netcore http function example

You can quickly experience asp .netcore on Function Compute in just a few steps:

- Initialize the project：`s init start-fc-custom-container-http-aspdotnetcore -d start-cc-http-aspdotnetcore`
- Enter the project：`cd start-cc-http-aspdotnetcore`
- Modify Image in s.yaml to be your own ACR image
- Build the project：`s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project：`s deploy -y`
- Invoke Function：`curl` to access the custom domain name generated when the project is deployed. for example:

```bash
curl -v http://aspdotnetcore-http-function.container-demo.123456789.cn-shenzhen.fc.devsapp.net/WeatherForecast
```

The entire process of initialization and deployment of the `Custom Container asp .netcore` HTTP function example can be realized
