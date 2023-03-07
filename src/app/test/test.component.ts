import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  componentProp = 'componentProp';
  componentHint = 'This is two way binding for test component';
  componentAttr = 'attribute value test';
  componentClass = 'bg-dark';
  applyRed = true;

  ngOnInit(): void {
  }

  showData($event: any) {
    console.log($event);
  }
}
