import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksPage } from "../links/links.page";
import { MainPage } from "../main/main.page";
import { NotificationsPage } from "../notifications/notifications.page";

import { FaqPage } from './faq.page';

const routes: Routes = [
	{
		path: "",
		redirectTo: "main",
		pathMatch: "full",
	},
	{
		path: "",
		component: FaqPage,
		children: [
			{
				path: "notifications",
				loadChildren: () =>
					import("../notifications/notifications.module").then(
						(m) => m.NotificationsPageModule
					),
			},
			{
				path: "main",
				loadChildren: () =>
					import("../main/main.module").then((m) => m.MainPageModule),
			},
			{
				path: "links",
				loadChildren: () =>
					import("../links/links.module").then((m) => m.LinksPageModule),
			},
		],
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqPageRoutingModule {}
