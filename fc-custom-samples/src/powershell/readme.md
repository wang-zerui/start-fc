## Introduction

This is an example of using powershell to write an event function. You can use this example for secondary development, just modify the code/SimpleHttpServer.ps1 file.

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd powershell/event-demo/
sam@iZj6c895xh98:~/powershell/event-demo  s deploy -y
[2021-07-26T16:52:38.564] [INFO ] [S-CLI] - Start ...
[2021-07-26T16:52:40.699] [INFO ] [FC-DEPLOY] - Using region: cn-hangzhou
...
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating function: powershellEventFunc
✔ Make service custom-demo success.
✔ Make function custom-demo/powershellEventFunc success.
[2021-07-26T16:52:43.792] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T16:52:43.848] [INFO ] [FC-DEPLOY] - Checking Function powershellEventFunc exists

Tips for next step
======================
....
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/powershell/event-demo $ s invoke -e "hello"
[2021-07-26T17:38:10.375] [INFO ] [S-CLI] - Start ...
========= FC invoke Logs begin =========
FC Invoke Start RequestId: 000a2ae1-8cb1-4400-885c-a8b125c123ae
hello
FC Invoke End RequestId: 000a2ae1-8cb1-4400-885c-a8b125c123ae

Duration: 41.49 ms, Billed Duration: 42 ms, Memory Size: 512 MB, Max Memory Used: 93.91 MB
========= FC invoke Logs end =========

FC Invoke Result:
hello


End of method: invoke
```
