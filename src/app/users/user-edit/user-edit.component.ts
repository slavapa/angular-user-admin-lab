import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: UserModel;

  @Output()
  onUserUpdated: EventEmitter<UserModel> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  onSaveClicked(username: string, email: string, event: any){
    //alert(event);
    // return;
    this.onUserUpdated.emit(new UserModel(this.user.id, username, email));
  }
  
  onChangeTest(srcElm){
    console.log(srcElm.value)
    // return;
    //this.onUserUpdated.emit(new UserModel(this.user.id, username, email));
  }

  public dataValue4Test = "ValueForTest"
}
