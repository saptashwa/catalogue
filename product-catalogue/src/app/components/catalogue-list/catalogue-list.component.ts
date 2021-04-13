import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Catalogue } from 'src/app/models/data.model';
import { CalatogueService } from 'src/app/services/calatogue.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'action'];
  dataSource = new MatTableDataSource<Catalogue>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(private catService: CalatogueService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource.data = this.catService.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(keyword: string, element: any) {
    if (keyword === 'ADD') {
      this.router.navigateByUrl('/detail/0');
    } else if (keyword === 'EDIT') {
      this.router.navigateByUrl(`/detail/${element.id}`);
      // this.catService.postData(element, keyword);
      // this.dataSource.data = this.catService.getData();
    } else if (keyword === 'DELETE') {
      this.catService.postData(element, keyword);
      this.dataSource.data = this.catService.getData();
    }
  }


}



