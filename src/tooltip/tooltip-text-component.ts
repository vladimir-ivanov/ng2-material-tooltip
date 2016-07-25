import {Component, Inject, ElementRef, ChangeDetectorRef} from "@angular/core";
import {positionService} from "./position.ts";
import {template} from "./tooltip.html";

@Component({
    selector: "tooltip-text",
    template: template
})
export class TooltipTextComponent {
    top;
    left;

    private hostEl;
    private placement;

    constructor(@Inject(ElementRef) private element, @Inject(ChangeDetectorRef) private changeDetector) {
    }

    public setPosition(hostEl:ElementRef, placement) {
        this.top = '-1000px';
        this.left = '-1000px';
        this.hostEl = hostEl;
        this.placement = placement;
    }

    public ngAfterViewInit():void {
        let p = positionService
            .positionElements(
                this.hostEl.nativeElement,
                this.element.nativeElement.children[0],
                this.placement);
        this.top = p.top + 'px';
        this.left = p.left + 'px';

        this.changeDetector.detectChanges();
    }

}
