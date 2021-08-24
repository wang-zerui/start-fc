# 阿里云函数计算 Custom Container asp .netcore HTTP 函数案例

只需几步就可以快速在阿里云函数计算服务上体验一键迁移一个 SpringBoot 应用:

- 初始化项目：`s init start-fc-custom-container-http-aspdotnetcore -d start-cc-http-aspdotnetcore`
- 进入项目：`cd start-cc-http-aspdotnetcore`
- 修改 s.yaml 中 Image 为自己的 ACR 镜像地址
- 构建项目：`s build --use-docker --dockerfile ./code/Dockerfile`
- 部署项目：`s deploy --push-registry acr-internet -y`
- 调用函数： 直接使用 POST 或者 GET 方法 curl 部署项目时候生成自定义域名, 如:

```bash
curl -v http://aspdotnetcore-http-function.container-demo.123456789.cn-shenzhen.fc.devsapp.net/WeatherForecast
```

即可实现`Custom Container asp .netcore` HTTP 函数案例的初始化、部署整个流程。
