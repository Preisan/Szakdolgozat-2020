import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Root_E } from '../shared/model/element.model';
import { ElementService } from '../shared/service/element.service';

@Component({
  selector: 'lib-material',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.scss'],
})
export class MaterialComponent implements OnInit {
  subjects: Subject[];
  loading = true;

  constructor(private elementService: ElementService, private router: Router) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.loading = true;
    this.elementService.get(Root_E.home).subscribe(result => {
      this.subjects = result.payload.val() ? Object.values<Subject>(result.payload.val()) : [];
      this.loading = false;
    });
  }
}
