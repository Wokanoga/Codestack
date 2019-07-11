import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private dataService: DataService) { }

  public insertInventory(inventory: any) {
    return this.dataService.post('Inventory/Insert', inventory).toPromise();
  }
}
