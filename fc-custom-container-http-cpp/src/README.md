# 阿里云函数计算 Custom Container C++ HTTP 函数案例

只需几步就可以快速在阿里云函数计算服务上体验 C++:

- 初始化项目：`s init start-fc-custom-container-http-cpp -d start-cc-http-cpp`
- 进入项目：`cd start-cc-http-cpp`
- 修改 s.yaml 中 Image 为自己的 ACR 镜像地址
- 构建项目：`s build --use-docker --dockerfile ./code/Dockerfile`
- 部署项目：`s deploy --push-registry acr-internet -y`
- 调用函数： 直接使用 POST 或者 GET 方法 curl 部署项目时候生成自定义域名

即可实现`Custom Container C++` HTTP 函数案例的初始化、部署整个流程。

# 二次开发

修改 code/sample/src/handlers/echo_handler.cpp 中的两个函数逻辑即可：

- EchoHttpHandler::OnInvoke
- EchoHttpHandler::OnInitialize
