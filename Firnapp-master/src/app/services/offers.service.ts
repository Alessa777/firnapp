import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class OffersService {
	constructor(private firestore: AngularFirestore) {}

	async getOffers(category: string): Promise<Observable<Array<Offer>>> {
		// return the offers as an observable; the document id is available on the object as the id property
		return this.firestore.collection("offers", ref => ref.where('category','==', category)).valueChanges({idField: "id"}) as Observable<Array<Offer>>;
	}

	// gets an offer by id
	getOfferById(id: string): Promise<any> {
		// return a new promise
    return new Promise((resolve, reject) => {
			// subscribe to changes to the offer
      const subscription = this.firestore.collection("offers").doc(id).valueChanges({idField: "id"}).subscribe(offer => {
				// unsubscribe 
				subscription.unsubscribe();
				console.log(offer);

				// resolve the promise with the offer
				resolve(offer);
			}, e => reject(e))
    })
	}

  createOffer(offer: Offer) {
		// create an offer in the database
    this.firestore.collection("offers").add(offer);
  }
}
