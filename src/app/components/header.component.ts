import { Component } from "@angular/core";

@Component({
  selector: "header",
  template: `
    <h1>Mission Planning Dashboard</h1>
    <h3>Mission Name: {{ missionName }}</h3>
    <h3>Carrier Rocket: {{ rocketName }}</h3>
  `,
  styles: []
})
export class HeaderComponent {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
}
