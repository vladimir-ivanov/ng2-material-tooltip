import {Component, Inject, ElementRef, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import {positionService} from "./position";
import {template} from "./tooltip.html";

@Component({
    selector: "tooltip-text",
    template: template
})
export class TooltipTextComponent implements AfterViewInit {
    top;
    left;

    private hostEl;
    private placement;

    constructor(@Inject(ElementRef) private element, @Inject(ChangeDetectorRef) private changeDetector) {
    }

    public setPosition(hostEl:ElementRef, placement):void {
        this.top = "-1000px";
        this.left = "-1000px";
        this.hostEl = hostEl;
        this.placement = placement;
    }

    public ngAfterViewInit():void {
        let {top, left} = positionService.positionElements(
            this.hostEl.nativeElement,
            this.element.nativeElement.children[0],
            this.placement
        );
        this.top = top + "px";
        this.left = left + "px";

        this.changeDetector.detectChanges();
    }
}
