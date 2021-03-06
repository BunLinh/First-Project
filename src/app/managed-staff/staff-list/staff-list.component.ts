import { Component, OnInit } from '@angular/core';

//services
import {StaffService} from './../staff.service'

//model
import {Staff} from './../../model/staff.class'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
	public list : Staff[] = []

  constructor(
  	private staffService: StaffService
  	) { 
		
  }

  ngOnInit() {
	
	this.list = this.staffService.getAllList()
	console.log(this.list)

  }

}
