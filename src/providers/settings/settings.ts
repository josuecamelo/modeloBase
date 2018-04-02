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

  /*getValue(key: string) {
    let ret:any;
    this.storage.get(key).then((value) => {
      ret = value;
    }).catch((e) => console.log(e));

    console.log(ret);
  }*/

  getValue(key: string): Promise<any> {
    return this.storage.get(key);
  }
}
