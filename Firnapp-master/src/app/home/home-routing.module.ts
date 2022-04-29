import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LinksPage } from "../pages/links/links.page";
import { MainPage } from "../pages/main/main.page";
import { FaqPage } from "../pages/faq/faq.page";
import { NotificationsPage } from "../pages/notifications/notifications.page";
import { HomePage } from "./home.page";

const routes: Routes = [
	{
		path: "",
		redirectTo: "main",
		pathMatch: "full",
	},
	{
		path: "",
		component: HomePage,
		children: [
			{
				path: "notifications",
				loadChildren: () =>
					import("../pages/notifications/notifications.module").then(
						(m) => m.NotificationsPageModule
					),
			},
			{
				path: "main",
				loadChildren: () =>
					import("../pages/main/main.module").then((m) => m.MainPageModule),
			},
			{
				path: "links",
				loadChildren: () =>
					import("../pages/links/links.module").then((m) => m.LinksPageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomePageRoutingModule {}
