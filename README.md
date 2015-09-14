# npm-firepan

This command will create a Web Project using "Boilerplate".  
At the same time, we will setup these tools.  
* Boilerplate ( Classic / Responsive / Bootstrap )  
    http://www.initializr.com/
* Webpack
* TypeScript ( + tsd )
* Sass
* Gulp
* Bower
* .gitignore


## Install
* node.js (v0.11 newer than)  

    ** check command **
    ```plane
    $ node -v
    v0.12.7
    ```

* install the Webpack / Typescript / tsd / gulp / bower  
    ```plane
    $ npm i -g webpack typescript tsd gulp bower
    ```

## How to use

1. Enter the command in place to put the project directory.  

    ```plane
    $firepan
    What’s project name? : [YOUR PROJECT NAME]

    Who is the author? : [AUTHOR NAME]

    Do you use any type?
    [c] Clasic HTML5Boilerplate
    [r] Responsive
    [b] Bootstrap
    [n] no HTML5Boilerplate
    type : [ SELECT ( c / r / b / n ) ]
    ```

2. Let's check Gulp.

    ```plane
    $ cd [YOUR PROJECT NAME]  
    $ gulp watch
    ```

    If successful,then output as follows.
    ```plane
    [17:20:33] Using gulpfile ~/Desktop/test/project/gulpfile.js
    [17:20:33] Starting 'ts'...
    [17:20:34] Starting 'watch'...
    [17:20:34] Finished 'watch' after 9.89 ms
    ts-loader: Using typescript@1.5.3 and /Users/****/Desktop/test/project/src/tsconfig.json
    [17:20:35] Version: webpack 1.12.1
      Asset     Size  Chunks             Chunk Names
    main.js  1.81 kB       0  [emitted]  main.js
    [17:20:35] Finished 'ts' after 1.99 s
    [17:20:35] Starting 'default'...
    [17:20:35] Finished 'default' after 5.95 μs
    ```





## Reference links (Some script reference)
http://kuroeveryday.blogspot.jp/2015/05/typescript-development.html
http://qiita.com/yokoh9/items/91aad4055f3b78e9a1e2

## License
MIT License.

## History

* 2015.9.14 Version 1.0.2 Release.  
  Add command `-h` (`--help`), `-v` ( `--version`)  
  Remove comment of Japanese.

* 2015.9.7 Version 1.0.1 Release.  
  Change how to get the script path.

* 2015.9.7 Version 1.0 Release.
  First commit.
