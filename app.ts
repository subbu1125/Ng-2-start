/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
 import { bootstrap } from "angular2/platform/browser";
 import { Component } from "angular2/core";
@Component({
 selector: 'hello-world',
 template: `
 <ul>
    <li *ngFor="#name of names">Hello {{ name }}</li>
    </ul>
 `
 })
 class HelloWorld {
 names: string[];

  constructor(){
  this.names=['subbu','reddy','seelam','rami'];
  }
  }
 bootstrap(HelloWorld);
