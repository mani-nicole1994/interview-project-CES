import { OnInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  @Output() tabChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
   
  }

  onTabClick(e: any) {
    this.tabChange.emit(e.tab.textLabel);
  }


}
