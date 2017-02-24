"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SideLeftComponent = (function () {
    function SideLeftComponent() {
        this.list = [{ title: '1' }, { title: '1' }, { title: '1' }, { title: '1' }, { title: '1' }];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SideLeftComponent.prototype, "navChildrenList", void 0);
    SideLeftComponent = __decorate([
        core_1.Component({
            selector: 'side-left',
            styleUrls: ['app/side/side-left/bar-left.css'],
            templateUrl: 'app/side/side-left/side-left.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SideLeftComponent);
    return SideLeftComponent;
}());
exports.SideLeftComponent = SideLeftComponent;
//# sourceMappingURL=side-left.component.js.map