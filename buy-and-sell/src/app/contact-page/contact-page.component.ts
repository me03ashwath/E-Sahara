import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = ''; 
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.listingsService.getListingById(id)
        .subscribe(listing => {
          this.listing = listing;
          this.message = `Hi, I'm interested in your ${this.listing?.name?.toLowerCase()}!`;
        });
      
    }
  }

  sendMessage(): void {
    alert('Your messageas been sent!');
    this.router.navigateByUrl('/listings');
  }
}
