## Introduction

This is an example of using java to write an springboot HTTP function. You can use this example for secondary development, Just modify the corresponding controller in SpringbootDemo.

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd java8/http-demo/code
sam@iZj6c895xh98:~/java8/http-demo/code ./mvnw package
...
[INFO] --- spring-boot-maven-plugin:2.1.8.RELEASE:repackage (repackage) @ demo ---
[INFO] Replacing main artifact with repackaged archive
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  24.966 s
[INFO] Finished at: 2021-07-26T17:25:03+08:00
[INFO] ------------------------------------------------------------------------
sam@iZj6c895xh98:~/java8/http-demo/code cd ..
sam@iZj6c895xh98:~/java8/http-demo  s deploy -y
[2021-07-26T17:26:23.279] [INFO ] [S-CLI] - Start ...
..
[2021-07-26T17:26:26.055] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T17:26:26.162] [INFO ] [FC-DEPLOY] - Service: custom-demo already exists online.
[2021-07-26T17:26:26.224] [INFO ] [FC-DEPLOY] - Checking Function springbootHttpFunc exists
[2021-07-26T17:26:26.259] [INFO ] [FC-DEPLOY] - Function: springbootHttpFunc already exists online.
[2021-07-26T17:26:26.430] [INFO ] [FC-DEPLOY] - Checking Trigger httpTrigger exists
[2021-07-26T17:26:26.480] [INFO ] [FC-DEPLOY] - Trigger: httpTrigger already exists online.
...
[2021-07-26T17:26:31.449] [INFO ] [FC-DEPLOY] - Checking Trigger httpTrigger exists
[2021-07-26T17:26:31.509] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T17:26:31.509] [INFO ] [FC-DEPLOY] - Creating function: springbootHttpFunc
[2021-07-26T17:26:31.509] [INFO ] [FC-DEPLOY] - Creating triggers: ["httpTrigger"]
✔ Make service custom-demo success.
✔ Make function custom-demo/springbootHttpFunc success.
✔ Make trigger custom-demo/springbootHttpFunc/httpTrigger success.
[2021-07-26T17:26:41.839] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T17:26:42.076] [INFO ] [FC-DEPLOY] - Checking Function springbootHttpFunc exists
[2021-07-26T17:26:42.300] [INFO ] [FC-DEPLOY] - Checking Trigger httpTrigger exists
[2021-07-26T17:26:42.358] [INFO ] [FC-DEPLOY] - Generated auto custom domain: springboothttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
[2021-07-26T17:26:42.358] [INFO ] [FC-DEPLOY] - Creating custom domain: springboothttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
[2021-07-26T17:26:42.952] [INFO ] [FC-DOMAIN] - Creating custom domain: springboothttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net

Tips for next step
======================
...

fc-springboot-helloworld:
  region: cn-hangzhou
  service:
    name: custom-demo
  function:
    name: springbootHttpFunc
    runtime: custom
    handler: com.example.demo.DemoApplication::main
    memorySize: 1024
    timeout: 15
  url:
    system_url: >-
      https://123456789.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/custom-demo/springbootHttpFunc/
    custom_domain:
      - domain: >-
          http://springboothttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
  triggers:
    - type: http
      name: httpTrigger
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/java8/http-demo $ curl http://springboothttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
Hello, World!
```
