import { Component } from '@angular/core';
import { ActivatedRoute, Router ,RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule,RouterModule,],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(response => {
      this.user = response.data;
    });
  }

  goToUsers(): void {
    this.router.navigate(['/']); 
  }

}

