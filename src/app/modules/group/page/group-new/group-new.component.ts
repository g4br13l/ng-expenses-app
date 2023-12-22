import {Component, inject, OnInit, Signal} from '@angular/core';
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";

@Component({
  selector: 'app-group-new',
  standalone: true,
  imports: [],
  templateUrl: './group-new.component.html'
})

export class GroupNewComponent implements OnInit {

  private pathService = inject(BreadCrumbService);


  constructor() {
    console.log('GroupNewComponent loaded');
    this.pathService.setPathSig(['Groups', 'New']);
  }

  ngOnInit(): void {
    console.log('GroupNewComponent loaded ngOnInit');
  }

}
