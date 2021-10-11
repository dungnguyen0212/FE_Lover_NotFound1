import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/in-out/auth.service";
import {TokenService} from "../../../service/in-out/token.service";
import {UserService} from "../../../service/user/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idUser!: number | undefined;
  name!: String | undefined;
  notCCDV: boolean = true;

  constructor(private tokenService: TokenService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getJwt()) {
      this.idUser = this.tokenService.getJwt().id;
      // @ts-ignore
      this.name = localStorage.getItem('userName');


      // @ts-ignore
      this.userService.getById(this.idUser).subscribe(data => {
        if (data.statusCCDV == 1) {
          this.notCCDV = false;
        }
      })
    }
  }

  logout() {
    localStorage.removeItem('jwtResponse');
    localStorage.removeItem('userName');
    localStorage.removeItem('pw');
    window.location.href = "/login";
  }
}
