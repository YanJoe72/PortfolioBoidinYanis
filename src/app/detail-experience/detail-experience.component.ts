import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-experience',
  templateUrl: './detail-experience.component.html',
  styleUrl: './detail-experience.component.css'
})
export class DetailExperienceComponent {
  @Input() nom : string = "";
  @Input() description : string = "";
  @Input() lien : string = "";
}
