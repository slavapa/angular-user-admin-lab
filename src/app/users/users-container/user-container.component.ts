import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser: UserModel;
  private users: UserModel[];

  constructor() {


  }

  public backgroundStyle = "green"


  updateUser(user: UserModel){
    const inx = this.users.findIndex(u => u.id === user.id);

    if (inx >= 0){

      this.users[inx].username = user.username;
      this.users[inx].email = user.email;
    }

  }

  ngOnInit() {
    console.log('User Container Init');


    this.users =  [
      new UserModel(0, 'slavap', 'slava@gmail.com',
        new UserInfo('John', 'Doe', 'Clerk', 'https://en.gravatar.com/userimage/27443672/c0fc72a10ce5b6c243979a4c5c213869.jpg')
      ),
      new UserModel(1, 'janedoe', 'janedoe@gmail.com',
        new UserInfo('Jane', 'Doe', 'Developer', 'https://en.gravatar.com/userimage/27443672/c3c305698c35d4d3d834af21f6ad1ec8?size=200')
      ),
      new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
        new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
      ),
      new UserModel(3, 'janesmith', 'janesmith@gmail.com',
        new UserInfo('Jane', 'DBA', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
      ),


    ]

  }

  onItemClicked(user: UserModel){
    this.currentUser = user;
  }

}
