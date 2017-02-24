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
var BarTopComponent = (function () {
    function BarTopComponent() {
        this.navList = [
            {
                title: '首页',
                children: [{ title: '欢迎页面' }, { title: '关于我们' }]
            },
            {
                title: '商品管理',
                children: [
                    { title: '商品管理' }
                ]
            },
            {
                title: '商户管理',
                children: [
                    { title: '商户等级' },
                    { title: '商户管理' },
                    { title: '商户分类' },
                ]
            },
            {
                title: '运营管理',
                children: [
                    { title: '满减' },
                    { title: '优惠券' },
                    { title: '投诉管理' },
                ]
            },
            {
                title: '交易管理',
                children: [
                    { title: '订单管理' },
                    { title: '退款记录' },
                ]
            },
            {
                title: '权限管理', children: [
                    { title: '管理员管理' },
                ]
            }, {
                title: '广告位管理',
                children: [
                    { title: '广告位管理' },
                    { title: '广告位商列' },
                    { title: '广告推送' },
                ]
            }
        ];
    }
    ;
    BarTopComponent.prototype.selectedItem = function (child) {
        this.selectedChild = child;
    };
    BarTopComponent = __decorate([
        core_1.Component({
            selector: 'bar-top',
            styleUrls: ['app/side/bar-top/barTop.css'],
            templateUrl: 'app/side/bar-top/bar-top.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BarTopComponent);
    return BarTopComponent;
}());
exports.BarTopComponent = BarTopComponent;
//# sourceMappingURL=bar-top.component.js.map