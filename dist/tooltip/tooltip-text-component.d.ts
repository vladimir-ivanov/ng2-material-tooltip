import { ElementRef, AfterViewInit } from "@angular/core";
export declare class TooltipTextComponent implements AfterViewInit {
    private element;
    private changeDetector;
    top: any;
    left: any;
    private hostEl;
    private placement;
    constructor(element: any, changeDetector: any);
    setPosition(hostEl: ElementRef, placement: any): void;
    ngAfterViewInit(): void;
}
