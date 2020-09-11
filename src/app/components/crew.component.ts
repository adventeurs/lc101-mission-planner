import { Component, Input } from "@angular/core";

@Component({
  selector: "crew",
  template: `
    <ul>
      <li *ngFor="let member of crew">{{ member }}</li>
    </ul>
  `,
  styles: []
})
export class CrewComponent {
  @Input() crew: string[];
}
