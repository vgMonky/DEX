import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  // Inline template
  template: `
    <nav>
      <div>
        <a routerLink="/">| DEX |</a>
        <a routerLink="/trade">Trade</a>
        <a routerLink="/explore">Explore</a>
        <a routerLink="/pool">Pool</a>
      </div>

      <div>
        <a> ... </a>
        <a class="btn"> My Wallet </a>
      </div>
    </nav>
  `,
  // Inline styles
  styles: [`
    nav {
      padding: 2rem 1rem;
      display: flex;
      justify-content: space-between;
      background-color: var(--c1);
    }
    a {
      text-decoration: none;
      margin: 10px;
      color: var(--c4);
    }
    a:hover {
      color: var(--c5)
    }
    .btn{
      font-size: 10pt;
      padding: 10px 20px;
      border: 1px solid var(--c3);
      border-radius: 20px;
      transition: 0.6s;
    }
    .btn:hover{
      background-color: var(--c2);
      cursor: pointer;
    }
  `]
})
export class NavBarComponent {}
