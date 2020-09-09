import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-carrocel-component',
  templateUrl: './carrocel.component.html',
  styleUrls: ['./carrocel.component.css']
})
export class CarrocelComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private modalService: NgbModal) {}

  show_1() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Divirta-se aproveitando esse passeio na natureza';
  }

  show_2() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'O que acha de aproveitar essa vista do lago?';
  }

  show_3() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Veja esse vale incrível!';
  }
}

