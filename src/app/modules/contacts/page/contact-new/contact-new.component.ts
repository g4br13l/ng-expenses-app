import {Component, inject, OnInit} from '@angular/core';
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";

@Component({
  selector: 'app-contact-new',
  standalone: true,
  imports: [],
  templateUrl: './contact-new.component.html'
})
export class ContactNewComponent implements OnInit{

  private bcService = inject(BreadCrumbService);



  ngOnInit(): void {
    this.bcService.setPathSig(['Contacts', 'New']);
  }

}
