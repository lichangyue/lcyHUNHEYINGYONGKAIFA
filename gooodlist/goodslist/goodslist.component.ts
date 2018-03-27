import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp } from "@angular/http";


@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})

export class GoodslistComponent implements OnInit {

  constructor(public router:Router, public http:Http, public myjsonp:Jsonp) { 

  }
  list:Array<any>;
  ngOnInit() {

    this.myjsonp.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK").subscribe( data=>{
      console.log(data);
      this.list = data["_body"];
    });
  }
  getDetail(id) {
    this.router.navigate(['/goods/', id]);
  }


}
