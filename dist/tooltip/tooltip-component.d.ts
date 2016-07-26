export declare class TooltipComponent {
    private elementRef;
    private resolver;
    tooltip: string;
    placement: string;
    private visible;
    private tooltipDeferred;
    constructor(elementRef: any, resolver: any);
    show(): void;
    hide(): void;
}
