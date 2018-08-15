import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, faPlus, faCheck, faTimes, faEraser } from '@fortawesome/free-solid-svg-icons';

import { Conta } from '../../models/conta';
import { ContaService } from '../../services/conta/conta.service';

import { slideDownUpAnimation } from '../../util/animations';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css'],
  animations: [slideDownUpAnimation]
})

export class ContasComponent implements OnInit {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  faCheck = faCheck;
  faTimes = faTimes;
  faEraser = faEraser;

  contas: Conta[];
  contaModel: Conta;
  showNew: Boolean = false;
  submitType: string = 'Salvar';
  tipos: string[] = ['Recebimento', 'Pagamento'];

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas(): void {
    this.contaService.list().subscribe(contas => this.contas = contas);
  }

  onNew() {
    this.contaModel = new Conta();
    this.submitType = 'Salvar';
    this.showNew = true;
  }

  onEdit(index: number) {
    this.contaService.get(index).subscribe(conta => this.contaModel = conta);
    this.submitType = 'Atualizar';
    this.showNew = true;
  }

  onSave() {
    if (this.submitType === 'Salvar') {
      this.contaService.add(this.contaModel).
        subscribe(() => this.getContas());
    }

    if (this.submitType === 'Atualizar') {
      this.contaService.update(this.contaModel).
        subscribe(() => this.getContas());
    }

    this.showNew = false;
  }

  onDelete(index: number) {
    this.contaService.delete(index).subscribe(() => this.getContas());
  }

  onCancel() {
    this.showNew = false;
  }

  onChangeTipo(tipo: number) {
    this.contaModel.tipo = tipo;
  }

}
