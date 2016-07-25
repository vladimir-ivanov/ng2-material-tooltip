import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "my-app",
    template: `
<div class="page-header"><h4>{{header}}</h4></div>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
