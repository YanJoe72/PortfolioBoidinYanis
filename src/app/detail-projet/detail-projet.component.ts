import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrl: './detail-projet.component.css',

})

export class DetailProjetComponent {
  @Input() nom: string = "";
  @Input() description: string = "";
  @Input() lien : string = "";
}


