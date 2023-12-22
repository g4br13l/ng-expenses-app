import {Component, inject, OnInit} from '@angular/core';
import {BreadCrumbService} from "../../../../shared/ui/bread-crumb/bread-crumb.service";
import {RouterLink} from "@angular/router";
import {FabButtonComponent} from "../../../../shared/ui/fab-button/fab-button.component";

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    RouterLink,
    FabButtonComponent
  ],
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit{

  private bcService = inject(BreadCrumbService);

  ngOnInit(): void {
    this.bcService.setPathSig(['Contacts']);
  }

}
