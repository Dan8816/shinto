import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  questions = [
    ["What is Temikka's Nickname?","Potato Head"],
    ["What was full name of the original Frito-lay mascot?","Frito Bandito"],
    ["What year was the Frito Bandito replaced?", "1970"],
    ["What was the replacement mascot of the Frito Bandito?", "Muncha Bunch"],
    ["What mascot replaced The Muncha Bunch?", "W.C. Fritos"],
    ["Who founded Frito-Lay?","Charles Elmer Doolin"],
    ["When did Pepsi-Cola merge with Frito-Lay?","1965"],
    ["What is the 7th Fibonacii number?","13"],
    ["What year was trans-fat removed from Doritos, Tostitos, and Cheetos?","2004"],
    ["What year was trans-fat removed from Ruffles, Lays, and Fritos?", "Never"],
    ["What year did Quaker Oats merge with PepsiCo?", "2001"],
    ["What is the 9th Fibonacii number?", "34"],
  ]
  shinto_val = 1
  mined = 0
  history = []
  transaction: object
 
  constructor(private _http: HttpClient) {

   }

   addVal(num, action){
    console.log(this.shinto_val," is our current coin value"); 
    while(num > 0){
      var random = this.onRandom()
      this.shinto_val++
      this.mined++
      this.history.push([this.shinto_val, action, random])
      num--
    }
    console.log(this.history);
    return this.shinto_val
   }

   onRandom(){
     return Math.floor((Math.random() * 9999) + 1)
   }

   minusVal(num, action){
    console.log(this.shinto_val," is our current coin value"); 
    while(num > 0){
      var random = this.onRandom()
      this.shinto_val--
      this.mined--
      this.history.push([this.shinto_val, action, random])
      num--
    }
    console.log(this.history);
      return this.shinto_val
    }
}
