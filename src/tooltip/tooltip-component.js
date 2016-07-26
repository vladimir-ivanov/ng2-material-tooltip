"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var tooltip_text_component_ts_1 = require("./tooltip-text-component.ts");
var TooltipComponent = (function () {
    function TooltipComponent(elementRef, resolver) {
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.visible = false;
    }
    TooltipComponent.prototype.show = function () {
        var _this = this;
        if (!this.visible) {
            this.visible = true;
            this.tooltipDeferred = this.resolver.resolveComponent(tooltip_text_component_ts_1.TooltipTextComponent).then(function (ref) {
                var component = _this.elementRef.createComponent(ref);
                component.instance.content = _this.tooltip;
                component.instance.setPosition(_this.elementRef.element, _this.placement);
                return component;
            });
        }
    };
    TooltipComponent.prototype.hide = function () {
        if (this.visible) {
            this.visible = false;
            this.tooltipDeferred.then(function (componentRef) {
                componentRef.destroy();
                return componentRef;
            });
        }
    };
    __decorate([
        core_1.Input("ng2-md-tooltip")
    ], TooltipComponent.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input()
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate([
        core_1.HostListener("focusin"),
        core_1.HostListener("mouseenter")
    ], TooltipComponent.prototype, "show", null);
    __decorate([
        core_1.HostListener("focusout"),
        core_1.HostListener("mouseleave")
    ], TooltipComponent.prototype, "hide", null);
    TooltipComponent = __decorate([
        core_1.Directive({
            selector: "[ng2-md-tooltip]"
        }),
        __param(0, core_1.Inject(core_1.ViewContainerRef)),
        __param(1, core_1.Inject(core_1.ComponentResolver))
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=tooltip-component.js.map