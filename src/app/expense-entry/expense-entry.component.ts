import {Component, OnInit} from '@angular/core';
import {ExpenseEntry} from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry;
  editClass: string;

  Constructor() {
  }

  ngOnInit(): void {
    this.title = 'Expense Entry';
    this.editClass = 'btn-success';
    this.expenseEntry = {
      id: 1,
      item: 'Pizza',
      amount: 21,
      category: 'Food',
      location: 'Zomato',
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    };
  }

  edit($event: any) {
    console.log('edit clicked');
    console.log($event.target.value);
  }
}
