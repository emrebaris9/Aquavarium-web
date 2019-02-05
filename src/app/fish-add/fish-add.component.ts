import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-fish-add',
  templateUrl: './fish-add.component.html',
  styleUrls: ['./fish-add.component.scss']
})
export class FishAddComponent implements OnInit {

  productForm: FormGroup;
  fish_name: string = '';
  fish_desc: string = '';
  fish_piece: number = null;
  updated_at: Date = null;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'fish_name': [null, Validators.required],
      'fish_desc': [null, Validators.required],
      'fish_piece': [null, Validators.required]
    });
  }
  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addFish(form)
      .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/fish-detail', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
