import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [ RouterLink,RouterOutlet],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
