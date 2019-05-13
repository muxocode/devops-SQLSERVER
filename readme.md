# Dockerized SQL Server with relative folder data
This project run a local sql server with relative folder(by default). The trick is use node to get local folder and then call docker-compose, creating beafore a custom .env
## First o all
First of all ust run
Is as easy as
```shell
npm install
```
## UP
Is as easy as, clone the project into your desired folder and run
```shell
node up [params]
```
NOTE: Maybe it takes a few minutes if you never *mcr.microsoft.com/mssql/server* pull before
### Params
- port: Port where SQL SERVER will listen, beware to pass an empy port
- home: Folder where data be stored, if you pass this argument it must be a absolute path, to local url use *folder*
- folder: Folder that will complete the url given from *home*
- password: Secure password, beware to be a strong password or container will not run
- nosave: Ignores home parameter and no saves data into a volume


|    Name              |  default vaule      |
|----------------------|---------------------|
|    port              |  1433               |    
|    home              |  ./                 |    
|    folder            |  mydata             |
|    password          |  deVops.Docker!     |
|    nosave            |  false              |

## DOWN
Run following
```shell
node down
```
## Examples
Basics:
```shell
node up
```
Choose port:
```shell
node up --port=5000
```
With home:
```shell
node up --home='/var/opt/data'
```
Just folder:
```shell
(Linux)   node up --folder='bbdd'
(Windows) node up --folder='bbdd'
```
With home and folder:
```shell
(Linux)   node up --home='/var/opt/data' --folder='bbdd'
(Windows) node up --home='C:\muxocode' --folder='bbdd'
```
Choose password:
```shell
node up --password='makeStrong!Easy'
```
All
```shell
node up  --port=1234 --password='makeStrong!Easy' --home='C:\muxocode' --folder='data'
node up  --port=1234 --password='makeStrong!Easy' --home='/var/opt/data' --folder='bbdd'
```
No save
```shell
node up  --port=1234 --nosave
```

## References
- [docker-compose npm](https://www.npmjs.com/package/docker-compose)
- [docker-hub sqlServer](https://hub.docker.com/_/microsoft-mssql-server)

