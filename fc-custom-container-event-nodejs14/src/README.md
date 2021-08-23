# 阿里云函数计算 Custom Container Node.JS 14 Event 函数案例

只需几步就可以快速在阿里云函数计算服务上体验 Node.JS 14:

- 初始化项目：`s init start-fc-custom-container-event-nodejs14 -d start-cc-nodejs14`
- 进入项目：`cd start-cc-nodejs14`
- 修改 s.yaml 中 Image 为自己的 ACR 镜像地址
- 构建项目：`s build --use-docker --dockerfile ./code/Dockerfile`
- 部署项目：`s deploy --push-registry acr-internet -y`
- 调用函数：`s invoke -e '{"key":"val"}'`

即可实现`Custom Container Nodejs 14`案例的初始化、部署整个流程。
