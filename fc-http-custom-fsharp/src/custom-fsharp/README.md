## FSharp template for Custom Runtime

### Deploy

```bash
➜  fsharp-demo make deploy
```

### Invoke

In this example, the ASP.NETCore project of F# is migrated to FC in one click, and you can directly use the HTTP client tool such as a browser or curl to invoke the function. directly curl to access the temporary domain name `http://custom-fsharp.custom-fsharp.${Your accountID}.cn-shanghai.fc.devsapp.net` which is printed on the terminal in the previous step.

```bash
➜  fsharp-demo curl http://custom-fsharp.custom-fsharp.${Your accountID}.cn-shanghai.fc.devsapp.net/weatherforecast
[{"date":"2020-12-01T06:18:15.8330675+00:00","temperatureC":43,"summary":"Chilly","temperatureF":109},{"date":"2020-12-02T06:18:15.8672232+00:00","temperatureC":41,"summary":"Freezing","temperatureF":105},{"date":"2020-12-03T06:18:15.8672315+00:00","temperatureC":9,"summary":"Mild","temperatureF":48},{"date":"2020-12-04T06:18:15.8672322+00:00","temperatureC":-19,"summary":"Warm","temperatureF":-2},{"date":"2020-12-05T06:18:15.8672326+00:00","temperatureC":2,"summary":"Bracing","temperatureF":35}]%
```