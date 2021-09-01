## Introduction

This is an example of using php7.4 to write an event function. You can use this example for secondary development, just modify the code/server.php file, This example supports single instance multiple concurrency.

#### Deploy Function

```bash
sam@iZj6c895xh98:~ cd php74/event-demo/
sam@iZj6c895xh98:~/php74/event-demo  s deploy -y
[2021-07-26T16:52:38.564] [INFO ] [S-CLI] - Start ...
[2021-07-26T16:52:40.699] [INFO ] [FC-DEPLOY] - Using region: cn-hangzhou
...
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating function: php74EventFunc
✔ Make service custom-demo success.
✔ Make function custom-demo/php74EventFunc success.
[2021-07-26T16:52:43.792] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T16:52:43.848] [INFO ] [FC-DEPLOY] - Checking Function php74EventFunc exists

Tips for next step
======================
....
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/php74/event-demo $ s invoke -e "hello"
[2021-07-26T17:34:12.610] [INFO ] [S-CLI] - Start ...
========= FC invoke Logs begin =========
...
Duration: 1.17 ms, Billed Duration: 2 ms, Memory Size: 1024 MB, Max Memory Used: 78.60 MB
========= FC invoke Logs end =========

FC Invoke Result:
hello


End of method: invoke
```
