import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NutritionTableDataSource } from './nutrition-table-datasource';

@Component({
  selector: 'app-nutrition-table',
  templateUrl: './nutrition-table.component.html',
  styleUrls: ['./nutrition-table.component.css']
})
export class NutritionTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: NutritionTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new NutritionTableDataSource(this.paginator, this.sort);
  }
}
