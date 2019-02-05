import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fish } from '../fish'
import { ApiService } from '../api.service';


@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.scss']
})
export class FishDetailComponent implements OnInit {

  fish : Fish = {  _id:'', fish_name:'', fish_desc: '',fish_piece: null, updated_at: null };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFishDetail(this.route.snapshot.params['id']);
    }
    getFishDetail(id) {
      this.api.getFish(id)
        .subscribe(data => {
          this.fish = data;
          console.log(this.fish);
          this.isLoadingResults = false;
        });
    }

    deleteProduct(id) {
      this.isLoadingResults = true;
      this.api.deleteFish(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/fishes']);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
  }

