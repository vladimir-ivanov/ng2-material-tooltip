import {Component} from "@angular/core";
import {template} from "./home-page.html";
import {TooltipComponent} from "../../src/tooltip/index.ts";

@Component({
    selector: "home",
    directives: <any>[TooltipComponent],
    template: template
})
export class HomePageComponent {
}
