import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Http } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
        alert("请输入账号");
    } else if (password.value.length == 0) {
        alert("请输入密码");
    } else {
        this.http.get("http://datainfo.duapp.com//shopdata/userinfo.php").subscribe(data => {
          if(data == 0) {
            alert("用户名不存在");
          } else if (data == 1) {
            alert("账户与密码不符");
          } else {
            let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
            alert(userinfo);
            this.navCtrl.push(TabsPage);
          }
        });
    }
  }
}
