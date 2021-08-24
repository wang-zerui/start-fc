# 阿里云函数计算 Custom Container Python 3.9 Event 函数案例

只需几步就可以快速在阿里云函数计算服务上体验 Python3.9:

- 初始化项目：`s init start-fc-custom-container-event-python3.9 -d start-cc-py39`
- 进入项目：`cd start-cc-py39`
- 修改 s.yaml 中 Image 为自己的 ACR 镜像地址
- 构建项目：`s build --use-docker --dockerfile ./code/Dockerfile`
- 部署项目：`s deploy --push-registry acr-internet -y`
- 调用函数：`s invoke -e "hello world"`

即可实现`Custom Container Python 3.9`案例的初始化、部署整个流程。
