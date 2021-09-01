## Introduction

This is an example of using typescript to write an event function. You can use this example for secondary development, just modify the code/server.ts file.

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd typescript/event-demo/code
sam@iZj6c895xh98:~/typescript/event-demo/code npm install
...
sam@iZj6c895xh98:~/typescript/event-demo/code cd ..
sam@iZj6c895xh98:~/typescript/event-demo  s deploy -y
[2021-07-26T16:52:38.564] [INFO ] [S-CLI] - Start ...
[2021-07-26T16:52:40.699] [INFO ] [FC-DEPLOY] - Using region: cn-hangzhou
...
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating function: tsEventFunc
✔ Make service custom-demo success.
✔ Make function custom-demo/tsEventFunc success.
[2021-07-26T16:52:43.792] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T16:52:43.848] [INFO ] [FC-DEPLOY] - Checking Function tsEventFunc exists

Tips for next step
======================
....
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/typescript/event-demo $ s invoke -e "hello"
[2021-07-26T17:50:44.182] [INFO ] [S-CLI] - Start ...
========= FC invoke Logs begin =========
FC Invoke Start RequestId: eff051fe-3dfd-4478-9da0-b5e12fff4c52
hello
FC Invoke End RequestId: eff051fe-3dfd-4478-9da0-b5e12fff4c52

Duration: 7.16 ms, Billed Duration: 8 ms, Memory Size: 512 MB, Max Memory Used: 140.65 MB
========= FC invoke Logs end =========

FC Invoke Result:
hello


End of method: invoke
```
