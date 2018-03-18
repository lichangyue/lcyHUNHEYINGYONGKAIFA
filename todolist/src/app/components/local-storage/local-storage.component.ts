import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() tolist:Array<any>;
  @Output() donelist:Array<any>;

  change(index){
    this.donelist.push(this.tolist[index]);
    this.tolist.splice(index,1);
  }
  change2(index){
    this.tolist.push(this.donelist[index]);
    this.donelist.splice(index,1);
  }
  delData(index){
    this.tolist.splice(index,1);
  }
  delData2(i){
    this.donelist.splice(i,1);
  }

}
