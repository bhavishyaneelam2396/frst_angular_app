import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USER_DATA, USER_ROLE } from '../shared/app.db';
import { Utils } from '../shared/services/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private router: Router,private utils:Utils, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.utils.clearLocalStorageValue()
  }
  login() : void {
   const index= USER_DATA.findIndex(x=>x.CustomerId.toString()==this.username&&x.Password==this.password)
    if(index>-1){
    this.utils.setLocalStorgeValue('loggerUserRole',USER_DATA[index].UserRole)
      USER_DATA[index].UserRole==USER_ROLE.Producer&&this.utils.getLocalStorageValue('loggerUserRole')?
     this.router.navigate(["online-shopping-app/producer/products"],):
     this.router.navigate(["online-shopping-app/consumer/products"],)
     ;
    }else {
      alert("Invalid credentials");
    }
  }
}
