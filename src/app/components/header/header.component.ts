import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "@src/app/store/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  @Input() isAuthorized: boolean;
  @Output() signOut = new EventEmitter<void>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignOut(): void {
    this.signOut.emit();
  }

  onProfileNavigate(): void {
    const path = this.user ? this.user.uid : 'new';
    this.router.navigate(['/profile', path])
  }
}
