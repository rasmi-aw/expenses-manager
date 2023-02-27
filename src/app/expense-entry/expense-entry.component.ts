import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {
  componentHint = "This is one way binding";
  title: string;
  Constructor(){}
  ngOnInit(): void {
    this.title = "Expense Entry";
  }

}
