import { Component, ViewChild, } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from'@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgOptimizedImage, MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

menuAberto = false;

toggleMenu() {
  this.menuAberto = !this.menuAberto;
}

constructor(private router : Router) {}

goToHome(){
  this.router.navigate([""])
}

goToOrigins() {
  this.router.navigate(['/origins']);
}

goToCamp() {
  this.router.navigate(['/camp']);
}

goToRules(){
  this.router.navigate(['/rules']);
}
}