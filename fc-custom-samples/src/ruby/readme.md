## Introduction

This is an example of using ruby to write an event function. You can use this example for secondary development, just modify the code/server.rb file.

#### Deploy Function

```bash
sam@iZj6c895xh98:~/cd ruby/event-demo/
sam@iZj6c895xh98:~/ruby/event-demo  s deploy -y
[2021-07-26T16:52:38.564] [INFO ] [S-CLI] - Start ...
[2021-07-26T16:52:40.699] [INFO ] [FC-DEPLOY] - Using region: cn-hangzhou
...
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating service: custom-demo
[2021-07-26T16:52:42.618] [INFO ] [FC-DEPLOY] - Creating function: rubyEventFunc
✔ Make service custom-demo success.
✔ Make function custom-demo/rubyEventFunc success.
[2021-07-26T16:52:43.792] [INFO ] [FC-DEPLOY] - Checking Service custom-demo exists
[2021-07-26T16:52:43.848] [INFO ] [FC-DEPLOY] - Checking Function rubyEventFunc exists

Tips for next step
======================
....
```

#### Invoke Function

```bash
sam@iZj6c895xh98:~/ruby/event-demo $ s invoke -e "hello"
========= FC invoke Logs begin =========
FC Invoke Start RequestId: ffd688ea-b8d7-414e-aadc-626953d1ec86
hello
FC Invoke End RequestId: ffd688ea-b8d7-414e-aadc-626953d1ec86

Duration: 0.70 ms, Billed Duration: 1 ms, Memory Size: 512 MB, Max Memory Used: 8.54 MB
========= FC invoke Logs end =========

FC Invoke Result:
hello


End of method: invoke
```
