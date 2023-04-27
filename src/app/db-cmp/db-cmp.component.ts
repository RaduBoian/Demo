import { Component } from '@angular/core';
import { Sportler } from '../Models/Sportler';
import { Wettbewerb } from '../Models/Wettbewerb';
import { SportlerService } from '../Services/sportler.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-db-cmp',
  templateUrl: './db-cmp.component.html',
  styleUrls: ['./db-cmp.component.css']
})
export class DbCmpComponent {
  constructor(private sportlerService: SportlerService){}


  atlName:string='';
  showNameField:boolean=false;
  showContestList:boolean=false;
  showAthleteList:boolean=false;
  showAthleteAdd:boolean=false;
  showContestAdd:boolean=false;

  contests = new MatTableDataSource<Wettbewerb>();
  sportler = new MatTableDataSource<Sportler>();
  contestColumns=['Name','Ort','FirstPlace'];
  athleteColumns=['Name','Alter','Staat'];


  newAtlName:string=''
  newAtlAge?:number=undefined;
  newAtlStaat:string='';

  newContName:string='';
  newContOrt:string='';
  newContFirst:string='';

  clear(){
    this.contests=new MatTableDataSource<Wettbewerb>();
    this.sportler=new MatTableDataSource<Sportler>();
    
    this.atlName=''

    this.newAtlName=''
    this.newAtlAge=undefined;
    this.newAtlStaat='';

    this.newContFirst='';
    this.newContName='';
    this.newContOrt='';

    this.showContestList=false;
    this.showNameField=false;
    this.showAthleteList=false;
    this.showAthleteAdd=false;
    this.showContestAdd=false;
  }

  getContests(){
    this.clear();
    this.sportlerService.getContests().subscribe(result=>
      {
        this.contests.data = result;
      });
    this.showContestList=true;
  }

  showNameBox(){
    this.clear()
      this.showNameField=true;
  }

  searchFirstPlaces(name:string){
      this.clear();
      this.sportlerService.getFirstPlaceContests(name).subscribe(result=>{
        this.contests.data=result;
      })
      this.showContestList=true;
  }

  getAthletes(){
    this.clear();
    this.sportlerService.getAthletes().subscribe(result=>{
      this.sportler.data=result;
      console.log(this.sportler)
    })
    this.showAthleteList=true;
  }

  showAthleteAddScreen(){
      this.clear();
      this.showAthleteAdd=true;
  }

  addAthlete(name:string,age:any,staat:string){
    let newAtl={Name:name,Alter:age,Staat:staat};
    this.sportlerService.addAthlete(newAtl);
    this.clear();
    this.getAthletes();
  }

  showContestAddScreen(){
    this.clear();
    this.showContestAdd=true;
  }

  addContest(name:string,ort:string,first:string){
    let newCont={Name:name,Ort:ort,FirstPlace:first};
    this.sportlerService.addContest(newCont);
    this.clear();
    this.getContests();
  }
 
}
