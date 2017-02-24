import {Component} from '@angular/core';


@Component({
  selector: 'bar-top',
  styleUrls: ['./barTop.css'],
  templateUrl: './bar-top.component.html'
})

export class BarTopComponent {

  public navList: any = [
    {
      title: '首页',
      children: [{title: '欢迎页面'}, {title: '关于我们'}]
    },
    {
      title: '商品管理',
      children: [
        {title: '商品管理'}
       ]
    },
    {
      title: '商户管理',
      children: [
        {title: '商户等级'},
        {title: '商户管理'},
        {title: '商户分类'},
      ]
    },
    {
      title: '运营管理',
      children: [
      {title: '满减'},
      {title: '优惠券'},
      {title: '投诉管理'},
     ]
    },
    {
      title: '交易管理',
      children: [
        {title: '订单管理'},
        {title: '退款记录'},
       ]
    },
    {
      title: '权限管理', children: [
      {title: '管理员管理'},

    ]
    }, {
      title: '广告位管理',
      children: [
        {title: '广告位管理'},
        {title: '广告位商列'},
        {title: '广告推送'},
      ]
    }
  ]
  private selectedChild:any=this.navList[0];


  constructor() {

  };

  selectedItem(child:any) {
    this.selectedChild = child;
  }

}

