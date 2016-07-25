import {Directive, Inject, ComponentResolver, Input, ViewContainerRef, HostListener, ComponentRef} from "@angular/core";
import {TooltipTextComponent} from "./tooltip-text-component";

@Directive({
    selector: "[ng2-md-tooltip]"
})
export class TooltipComponent {
    @Input("ng2-md-tooltip") tooltip:string;
    @Input() placement:string;

    private visible = false;
    private tooltipDeferred;

    constructor(@Inject(ViewContainerRef) private elementRef,
                @Inject(ComponentResolver) private resolver) {
    }

    @HostListener("focusin")
    @HostListener("mouseenter")
    show() {
        if (!this.visible) {
            this.visible = true;

            this.tooltipDeferred = this.resolver.resolveComponent(TooltipTextComponent).then(ref => {
                let component = this.elementRef.createComponent(ref);

                component.instance.content = this.tooltip;
                component.instance.setPosition(this.elementRef.element, this.placement);

                return component;
            });
        }
    }

    @HostListener("focusout")
    @HostListener("mouseleave")
    hide() {
        if (this.visible) {

            this.visible = false;

            this.tooltipDeferred.then((componentRef:ComponentRef<any>) => {
                componentRef.destroy();
                
                return componentRef;
            });
        }
    }
}
