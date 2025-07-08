import { Component } from '@angular/core';

@Component({
selector: 'app-home',
standalone: true,
imports: [],
templateUrl: './home.html',
})
export class HomeComponent {

toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }
}
