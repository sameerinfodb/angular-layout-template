import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngcliprojecttmplt';

  navigation = [
    { link: '/products', label: 'Products' },
    { link: '/inventory', label: 'Inventory Management' },
    { link: '/master', label: 'Master' }
  ];
  navigationSideMenu = [...this.navigation];
}
