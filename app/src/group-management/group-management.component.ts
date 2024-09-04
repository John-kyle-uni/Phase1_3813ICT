import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-management',
  standalone: true,
  imports: [],
  templateUrl: './group-management.component.html',
  styleUrl: './group-management.component.css'
})
export class GroupManagementComponent {

    createGroup(){
      alert("Hello world");
    }
  
}
