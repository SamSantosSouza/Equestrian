import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router : Router) {}
}
