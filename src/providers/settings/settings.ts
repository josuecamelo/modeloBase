import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class SettingsProvider {
  constructor(public storage: Storage) {
  }

  setValue(key: string, value: any) {
    return this.storage.set(key, value);
  }

  getValue = (key: string): Promise<{exists: boolean, itemValue: any}> =>{
    return new Promise<{exists: boolean, itemValue: any}>(res =>{
      this.storage.get(key).then((val) => {
        if(val){
          res({exists: true, itemValue: val});
        } else {
          res({exists: false, itemValue: val});
        }
      })
    });
  }
}
