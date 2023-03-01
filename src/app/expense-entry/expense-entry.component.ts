import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  title: string;

  componentHint = 'This is one way binding';

  Constructor() {
  }

  ngOnInit(): void {
    this.title = 'Expense Entry';
  }

  showData($event) {
    console.log($event);
  }
}
