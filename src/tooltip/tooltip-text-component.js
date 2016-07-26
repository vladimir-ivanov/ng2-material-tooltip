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
var position_ts_1 = require("./position.ts");
var tooltip_html_1 = require("./tooltip.html");
var TooltipTextComponent = (function () {
    function TooltipTextComponent(element, changeDetector) {
        this.element = element;
        this.changeDetector = changeDetector;
    }
    TooltipTextComponent.prototype.setPosition = function (hostEl, placement) {
        this.top = "-1000px";
        this.left = "-1000px";
        this.hostEl = hostEl;
        this.placement = placement;
    };
    TooltipTextComponent.prototype.ngAfterViewInit = function () {
        var _a = position_ts_1.positionService.positionElements(this.hostEl.nativeElement, this.element.nativeElement.children[0], this.placement), top = _a.top, left = _a.left;
        this.top = top + "px";
        this.left = left + "px";
        this.changeDetector.detectChanges();
    };
    TooltipTextComponent = __decorate([
        core_1.Component({
            selector: "tooltip-text",
            template: tooltip_html_1.template
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.ChangeDetectorRef))
    ], TooltipTextComponent);
    return TooltipTextComponent;
}());
exports.TooltipTextComponent = TooltipTextComponent;
//# sourceMappingURL=tooltip-text-component.js.map