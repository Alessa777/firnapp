import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
  
// the routes in the app
const routes: Routes = [
	// localhost:8100/home returns the Home page
	{
		path: "home",
		loadChildren: () =>
			import("./home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	
	// localhost:8100/buy-or-sell returns the page in /pages/buy-or-sell
	{
		path: "buy-or-sell",
		loadChildren: () =>
			import("./pages/buy-or-sell/buy-or-sell.module").then(
				(m) => m.BuyOrSellPageModule
			),
	},


	//path to /pages/schulnewsletter
	{
		path: "schulnewsletter",
		loadChildren: () =>
			import("./pages/schulnewsletter/schulnewsletter.module").then(
				(m) => m.SchulnewsletterPageModule
			),
	},


	{
		path: "corona",
		loadChildren: () =>
			import("./pages/corona/corona.module").then(
				(m) => m.CoronaPageModule
			),
	},

	

	{
		path: "exchange/offer-detail/:id",
		loadChildren: () =>
			import("./pages/offer-detail/offer-detail.module").then(
				(m) => m.OfferDetailPageModule
			),
	},
	{
		path: "buy-or-sell",
		loadChildren: () =>
			import("./pages/buy-or-sell/buy-or-sell.module").then(
				(m) => m.BuyOrSellPageModule
			),
	},


	//path to pages/nachhilfegeben
	{
	
		path: "nachhilfegeben",
		loadChildren: () =>
			import("./pages/nachhilfegeben/nachhilfegeben.module").then(
				(m) => m.NachhilfegebenPageModule
			),


	},


	//path to pages/nachhilfeerhalten
	{
	
		path: "nachhilfeerhalten",
		loadChildren: () =>
			import("./pages/nachhilfeerhalten/nachhilfeerhalten.module").then(
				(m) => m.NachhilfeerhaltenPageModule
			),


	},


	
	{
		path: "tutor/offer-detail/:id",
		loadChildren: () =>
			import("./pages/offer-detail/offer-detail.module").then(
				(m) => m.OfferDetailPageModule
			),
	},



	{
		path: "tutor",
		loadChildren: () =>
			import("./pages/tutor/tutor.module").then(
				(m) => m.TutorPageModule
			),

	},





	{
		path: "FAQ/offer-detail/:id",
		loadChildren: () =>
			import("./pages/offer-detail/offer-detail.module").then(
				(m) => m.OfferDetailPageModule
			),
	},



	//path to /pages/faq
	{
		path: "faq",
		loadChildren: () =>
			import("./pages/faq/faq.module").then(
				(m) => m.FaqPageModule
			),
	},


	{


    path: 'categorys',
    loadChildren: () => import('./pages/categorys/categorys.module').then( m => m.CategorysPageModule)
  },
	{
    path: 'categorys/:category',
    loadChildren: () => import('./pages/categorys/categorys.module').then( m => m.CategorysPageModule)
  },
  {
    path: 'indexcategory',
    loadChildren: () => import('./pages/indexcategory/indexcategory.module').then( m => m.IndexcategoryPageModule)
  },
  {
    path: 'erfolgreich',
    loadChildren: () => import('./pages/erfolgreich/erfolgreich.module').then( m => m.ErfolgreichPageModule)
  },
  {
    path: 'erfolglos',
    loadChildren: () => import('./pages/erfolglos/erfolglos.module').then( m => m.ErfolglosPageModule)
  },
  {
    path: 'angeboterstellen',
    loadChildren: () => import('./pages/angeboterstellen/angeboterstellen.module').then( m => m.AngeboterstellenPageModule)
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
