import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header.component";
import { ExperimentsComponent } from "./components/experiments.component";
import { EquipmentComponent } from "./components/equipment.component";
import { CrewComponent } from "./components/crew.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperimentsComponent,
    EquipmentComponent,
    CrewComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
