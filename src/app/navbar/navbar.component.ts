import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Required for routerLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Add RouterModule for routerLink to work
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
