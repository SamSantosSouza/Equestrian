import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-origins',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.scss'
})
export class OriginsComponent {

}
