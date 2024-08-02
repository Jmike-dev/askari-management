import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../utils/button/button.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        RouterLink,
        FontAwesomeModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        ButtonComponent,
    ],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    constructor(private router: Router) {}
    buttonText: string = 'login';
    loginPage() {
        // this.router.navigate(['/aboutPage']);
        console.log(' button works');
    }
}
