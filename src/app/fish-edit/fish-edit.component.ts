import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-fish-edit',
  templateUrl: './fish-edit.component.html',
  styleUrls: ['./fish-edit.component.scss']
})
export class FishEditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }
  productForm: FormGroup;
  _id: string = '';
  fish_name: string = '';
  fish_desc: string = '';
  fish_piece: number = null;
  isLoadingResult: false;

  ngOnInit() {

  })
  }

}
