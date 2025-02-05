import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cinfirmation',
  templateUrl: './cinfirmation.component.html',
  styleUrl: './cinfirmation.component.css'
})
export class CinfirmationComponent implements OnInit{

  onEmitStatusCahnge = new EventEmitter();
  details: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loader.start();
    if (this.dialogData) {
      this.loader.stop()
      this.details = this.dialogData;

    }
  }


  handleChangeAction() {
    this.loader.start();
    this.onEmitStatusCahnge.emit();
    
  }
}
