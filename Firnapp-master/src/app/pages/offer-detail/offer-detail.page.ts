import { Component, OnInit } from "@angular/core";
import { OffersService } from "../../services/offers.service";

@Component({
	selector: "app-offer-detail",
	templateUrl: "./offer-detail.page.html",
	styleUrls: ["./offer-detail.page.scss"],
})
export class OfferDetailPage implements OnInit {
	offer: Offer;

	constructor(private offersService: OffersService) {}

	ngOnInit() {
		console.log(window.location.href);

		// get the window url
		const url = window.location.href.split("/");
		// get the id of the offer
		const id = url.slice(-1)[0];
		// get the offer 
		this.getOffer(id);
	}

	async getOffer(id: string) {
		// get the offer from the service
		const offer = await this.offersService.getOfferById(id);
		this.offer = offer;
	}
}
