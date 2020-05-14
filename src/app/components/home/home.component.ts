import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Operations: any = [];
  closeResult: string;
  number1:number;
  number2:number;
  sign: string;
  answer: boolean;

  options = [
    {option: "Preguntar"},
    {option: "Enseñar"}
  ];

  constructor(private router:Router,private modalService: NgbModal,private operationService: OperationsService) {
  }

  ngOnInit() {
    this.getAllOperations();
  }

  getAllOperations(){
    this.Operations = []
    this.operationService.getAll().then(results => {
      this.Operations = results;
    });
  }

  createOperation(){
    let operation = {
      number1: this.number1,
      sign: this.sign,
      number2: this.number2
    }

    this.operationService.postOperation(operation).then(results => {
      console.log(results);
      this.getAllOperations();
    });

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
