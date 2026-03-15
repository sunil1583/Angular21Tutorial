import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../service/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvailable: boolean = false;
  idSuccessDivVisible: WritableSignal<boolean> = signal(false);
  percentage: number = 0;
  offersList: string[] = ['10% off', '20% off', '30% off'];

  constructor(private masterServ: Master) {
    let result = masterServ.addTwoNum(10, 20);
    console.log('result', result);
  }
}
