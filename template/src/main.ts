/// <reference path="./typings/jquery/jquery.d.ts" />

module app{

    class Main{
        constructor(){
            $(() => { this.ready(); })
        }

        private ready(){
            console.log("ready");
        }
    }

    var main = new Main();
}
