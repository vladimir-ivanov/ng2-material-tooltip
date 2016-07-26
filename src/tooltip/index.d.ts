import {ElementRef, ChangeDetectorRef} from "@angular/core";
export declare class TooltipComponent {
    public top:string;
    public left:string;
    private hostEl:ElementRef;
    private placement:string;

    constructor(element:ElementRef, changeDetector:ChangeDetectorRef)

    public setPosition(hostEl:ElementRef, placement:string):void;

    public ngAfterViewInit():void;
}