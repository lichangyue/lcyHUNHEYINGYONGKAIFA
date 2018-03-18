import { Component, OnInit,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  str = '';

  constructor() { }

  ngOnInit() {
  }
  // 参数获得
  @Output() keyup = new EventEmitter();
  // @Input() tolist:Array<any>;
  myKeyUp(e){
    if(e.keyCode == 13){
      this.keyup.emit(this.str);
    }
  }
 }


