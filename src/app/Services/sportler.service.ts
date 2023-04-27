import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Sportler } from '../Models/Sportler';
import { Wettbewerb } from '../Models/Wettbewerb';
import {addDoc, collection, collectionData, Firestore, where,query, getDocs} 
                        from '@angular/fire/firestore';
                      
@Injectable({
  providedIn: 'root'
})
export class SportlerService {

    constructor(private fs: Firestore) { }

    getContests():Observable<Wettbewerb[]>{
        console.log(this.fs)
        const contests:any =collection(this.fs,"Wettbeverben");
        return collectionData(contests);
    }

    getAthletes():Observable<Sportler[]>{
        console.log(this.fs)
        const sportler:any =collection(this.fs,"Sportler");
        return collectionData(sportler);
    }

    getFirstPlaceContests(name:string):Observable<Wettbewerb[]>{
        console.log(this.fs);
        const contests:any =query(collection(this.fs,"Wettbeverben"),where("FirstPlace","==",name));
        return collectionData(contests);
    }

    addAthlete(atl:Sportler){
        const sportler:any =collection(this.fs,"Sportler");
        addDoc(sportler,atl);
    }

    addContest(cont:Wettbewerb){
        const contests:any=collection(this.fs,"Wettbeverben");
        addDoc(contests,cont);
    }
}