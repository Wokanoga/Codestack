import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'apc-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private builder: FormBuilder, private inventoryService: InventoryService) { }

  inventoryForm: FormGroup;
  ngOnInit() {
    this.inventoryForm = this.builder.group({
      name: ['', Validators.required],
      storageLocation: ['', Validators.required, Validators.minLength(2)],
      description: '',
      price: [null, Validators.required],
      sku: ['', Validators.required],
      quantity: [null, Validators.required]
    });

  }

  get name() { return this.inventoryForm.get('name'); }

  get storageLoction() { return this.inventoryForm.get('storageLocation'); }

  get description() { return this.inventoryForm.get('description'); }

  get price() { return this.inventoryForm.get('price'); }

  get sku() { return this.inventoryForm.get('sku'); }

  get quantity() { return this.inventoryForm.get('quantity'); }

  submitForm() {
    if (this.inventoryForm.invalid) {
      alert('Invalid form!');
      return;
    }
  }
}
