import { Component, OnInit, SimpleChanges } from '@angular/core';
import { catalogueType, Catalogue } from 'src/app/models/data.model';
import { CalatogueService } from 'src/app/services/calatogue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-edit',
  templateUrl: './catalogue-edit.component.html',
  styleUrls: ['./catalogue-edit.component.css']
})
export class CatalogueEditComponent implements OnInit {

  constructor(private catService: CalatogueService, private route: ActivatedRoute, private router: Router) { }
  formData : Catalogue = {id: 0, name: '', category: '', price: '', quantity: ''};
  id: number = 0;
  actionButton: string = 'Add';
  catalogueTypes : catalogueType[] =
  [
    {value: 'Laptops', displayValue: 'Laptops'},
    {value: 'Gaming CDs', displayValue: 'Gaming CDs'},
    {value: 'Gaming PC', displayValue: 'Gaming PC'},
    {value: 'PS4', displayValue: 'PS4'},
    {value: 'PS5', displayValue: 'PS5'},
  ]
  value = 'Amsam;smd'
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    if (this.id != 0) {
      this.actionButton = 'Edit';
      this.formData = this.catService.getCatalogue(+this.id);
    }
  }

  public submitProduct() {
    console.log(this.formData);
    this.catService.postData(this.formData, this.actionButton.toLocaleUpperCase());

    this.router.navigateByUrl('/list');
  }

  public redirectToTable() {
    this.router.navigateByUrl('/list');
  }

}
