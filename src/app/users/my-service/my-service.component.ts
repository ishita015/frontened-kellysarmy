import { Component, OnInit } from '@angular/core';
import { VariableService } from 'src/app/services/variable.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

  constructor( public variable: VariableService) { }

  ngOnInit(): void {
    this.variable.login = false;
    this.variable.logout = true;
  }

}
