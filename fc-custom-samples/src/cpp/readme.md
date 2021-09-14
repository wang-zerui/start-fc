## Introduction

This is an example of using C++ to write event and http functions. You can use this example for secondary development

### Event Function

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd cpp/event-demo/
sam@iZj6c895xh98:~/cpp/event-demo make build
docker build -t fc-cpp-runtime  -f build-image/Dockerfile build-image
Sending build context to Docker daemon  2.048kB
Step 1/3 : FROM aliyunfc/runtime-custom:base
 ---> 2be79dda5969
Step 2/3 : RUN apt-get update
 ---> Using cache
 ---> ca99ebf882ca
Step 3/3 : RUN apt-get install -y cmake
 ---> Using cache
 ---> e9b28b6d7374
Successfully built e9b28b6d7374
Successfully tagged fc-cpp-runtime:latest
docker run --rm -it -v $(pwd):/tmp fc-cpp-runtime bash -c "cd /tmp && ./build.sh"
-- The C compiler identification is GNU 6.3.0
-- The CXX compiler identification is GNU 6.3.0
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
...
-- Generating done
-- Build files have been written to: /tmp/sample/release
Scanning dependencies of target bootstrap
[ 33%] Building CXX object CMakeFiles/bootstrap.dir/src/register_handler.cpp.o
[ 66%] Building CXX object CMakeFiles/bootstrap.dir/src/handlers/event_handler.cpp.o
[100%] Linking CXX executable /tmp/bin/bootstrap
[100%] Built target bootstrap
sam@iZj6c895xh98:~/cpp/event-demo  s deploy -y
...
✔ Make service custom-demo success.
✔ Make function custom-demo/cppEventFunc success.
[2021-09-07T16:22:46.876] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-09-07T16:22:46.925] [INFO ] [FC-DEPLOY] - Checking Function cppEventFunc exists

Tips for next step
======================
...
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/cpp/event-demo $ s invoke -e "{}"
[2021-09-07T16:23:40.429] [INFO ] [S-CLI] - Start ...
========= FC invoke Logs begin =========
FC Initialize Start RequestId: afe57ba3-02b3-4799-b234-b3a4c45d3c89
FC Initialize End RequestId: afe57ba3-02b3-4799-b234-b3a4c45d3c89
/invoke is called.
FC Invoke Start RequestId: afe57ba3-02b3-4799-b234-b3a4c45d3c89
2021-09-07T08:23:41 afe57ba3-02b3-4799-b234-b3a4c45d3c89 [INFO] handling invoke
FC Invoke End RequestId: afe57ba3-02b3-4799-b234-b3a4c45d3c89

Duration: 3.17 ms, Billed Duration: 4 ms, Memory Size: 512 MB, Max Memory Used: 5.93 MB
========= FC invoke Logs end =========

FC Invoke Result:
{}


End of method: invoke
```

#### Secondary development

Modify the two function in code/sample/src/handlers/echo_handler.cpp：

- EventHandler::OnInvoke
- EventHandler::OnInitialize

### HTTP Function

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd cpp/http-demo
sam@iZj6c895xh98:~/cpp/http-demo  make build
docker build -t fc-cpp-runtime  -f build-image/Dockerfile build-image
Sending build context to Docker daemon  2.048kB
Step 1/3 : FROM aliyunfc/runtime-custom:base
 ---> 2be79dda5969
Step 2/3 : RUN apt-get update
 ---> Using cache
 ---> ca99ebf882ca
Step 3/3 : RUN apt-get install -y cmake
 ---> Using cache
 ---> e9b28b6d7374
Successfully built e9b28b6d7374
Successfully tagged fc-cpp-runtime:latest
docker run --rm -it -v $(pwd):/tmp fc-cpp-runtime bash -c "cd /tmp && ./build.sh"
-- The C compiler identification is GNU 6.3.0
-- The CXX compiler identification is GNU 6.3.0
-- Check for working C compiler: /usr/bin/cc
-- Check for working C compiler: /usr/bin/cc -- works
-- Detecting C compiler ABI info
...
-- Generating done
-- Build files have been written to: /tmp/sample/release
Scanning dependencies of target bootstrap
[ 33%] Building CXX object CMakeFiles/bootstrap.dir/src/register_handler.cpp.o
[ 66%] Building CXX object CMakeFiles/bootstrap.dir/src/handlers/http_handler.cpp.o
[100%] Linking CXX executable /tmp/bin/bootstrap
[100%] Built target bootstrap
sam@iZj6c895xh98:~/cpp/http-demo  s deploy -y
...
✔ Make service custom-demo success.
✔ Make function custom-demo/cppHttpFunc success.
✔ Make trigger custom-demo/cppHttpFunc/http_t success.
...
[2021-09-07T16:14:44.328] [INFO ] [FC-DEPLOY] - Generated auto custom domain: cpphttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
[2021-09-07T16:14:44.328] [INFO ] [FC-DEPLOY] - Creating custom domain: cpphttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
[2021-09-07T16:14:44.531] [INFO ] [FC-DOMAIN] - Creating custom domain: cpphttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
....
fc-cpp_http_demo-fc_cpp_http:
  region: cn-hangzhou
  service:
    name: custom-demo
  function:
    name: cppHttpFunc
    runtime: custom
    handler: http.handler
    memorySize: 512
    timeout: 3
  url:
    system_url: >-
      https://123456789.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/custom-demo/cppHttpFunc/
    custom_domain:
      - domain: >-
          http://cpphttpfunc.custom-demo.123456789.cn-hangzhou.fc.devsapp.net
  triggers:
    - type: http
      name: http_t
```

#### Invoke Function

```
sam@iZj6c895xh98:~/cpp/http-demo  curl -v  https://123456789.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/custom-demo/cppHttpFunc/ -d "Hello World"
Hello World!
```

#### Secondary development

Modify the two function in code/sample/src/handlers/echo_handler.cpp：

- HttpHandler::OnInvoke
- HttpHandler::OnInitialize
