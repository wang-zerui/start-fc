## Introduction

This is an example of using dart to write an event function. You can use this example for secondary development, just modify the code/index.dart file.

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd dart/event-demo/
sam@iZj6c895xh98:~/dart/event-demo  make build
docker run --rm -it -v $(pwd):/tmp google/dart:2.8.4 bash -c "export PUB_HOSTED_URL=https://pub.flutter-io.cn && cd tmp/code && dart2native index.dart && mv index.exe bootstrap"
Generated: /tmp/code/index.exe
chmod +x code/bootstrap
sam@iZj6c895xh98:~/dart/event-demo  s deploy -y
[2021-07-26T16:52:38.564] [INFO ] [S-CLI] - Start ...
[2021-07-26T16:52:40.699] [INFO ] [FC-DEPLOY] - Using region: cn-hangzhou
...
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating function: dartEventFunc
✔ Make service custom-demo success.
✔ Make function custom-demo/dartEventFunc success.
[2021-07-26T16:52:43.792] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T16:52:43.848] [INFO ] [FC-DEPLOY] - Checking Function dartEventFunc exists

Tips for next step
======================
....
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/dart/event-demo $ s invoke -e "hello"
[[2021-07-26T17:04:27.279] [INFO ] [S-CLI] - Start ...
========= FC invoke Logs begin =========
FC Invoke Start RequestId: c97dbf37-5e5a-4fe1-862e-aea0f4955b10
hello
FC Invoke End RequestId: c97dbf37-5e5a-4fe1-862e-aea0f4955b10

Duration: 2.85 ms, Billed Duration: 3 ms, Memory Size: 1024 MB, Max Memory Used: 17.97 MB
========= FC invoke Logs end =========

FC Invoke Result:
OK


End of method: invoke
```
