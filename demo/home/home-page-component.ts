import {Component} from "@angular/core";
import {template} from "./home-page.html";
import {TooltipComponent} from "ng2-material-tooltip/dist/index";

@Component({
    selector: "home",
    directives: <any>[TooltipComponent],
    template: template
})
export class HomePageComponent {
}

