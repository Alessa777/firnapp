import { Component, OnInit, Input } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
})
export class CategorysPage implements OnInit {
  offers: Array<Offer>
  category: string;

  constructor(private offersService: OffersService) {}

	ngOnInit() {
    // get the window url
		const url = window.location.href.split("/");
		// get the category
		this.category = url.slice(-1)[0];

    this.getOffers();
	}

	async getOffers() {
		// get the offers from the database
		const offers = await this.offersService.getOffers(this.category);

		// subscribe to updates to the offers
		offers.subscribe((res: Array<Offer>) => {
			this.offers = res;
		}, err => console.log(err))
	}
}
