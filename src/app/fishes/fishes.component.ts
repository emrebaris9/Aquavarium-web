import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fish } from '../fish'

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss']
})
export class FishesComponent implements OnInit {

  displayedColumns: string[] = ['fish_name', 'fish_piece'];
  data: Fish[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getFishes()
    .subscribe (res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
