import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IncElement, Root_E } from 'src/app/shared/model/element.model';

@Injectable({
    providedIn: 'root',
})
export class ElementService {
    constructor(private db: AngularFireDatabase) { }

    get(root: Root_E, path: string = ''): Observable<SnapshotAction<any>> {
        return this.db.object(root + path).snapshotChanges();
    }

    updateBase(previous: IncElement, value: { name: string, description?: string }): Promise<void> {
        this.remove(Root_E.incElements, previous.name);
        previous.name = value.name;
        if (value.description) {
            previous.description = value.description;
            return this.set(Root_E.incElements, previous.name, previous);
        } else {
            this.set(Root_E.incElements, previous.name, previous);
            return this.remove(Root_E.incElements, previous.name + '/description');
        }
    }

    set(root: Root_E, path: string, value: any): Promise<void> {
        return this.db.object(root + path).set(value);
    }

    remove(root: Root_E, path: string): Promise<void> {
        return this.db.object(root + path).remove();
    }
}
