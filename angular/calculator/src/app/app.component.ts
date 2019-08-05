import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'calculator';
  current = '0';
  first = null;
  operator = null;
  second = false;

  public getNumber(v : string){
    
    if(this.second)
    {
      this.current = v;
      this.second = false;
      
    }else{
      this.current === '0'? this.current = v: this.current += v;
    }
  }

  getDecimal(){
    if(!this.current.includes('.')){
        this.current += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.first += secondOp; 
      case '-': 
      return this.first -= secondOp; 
      case '*': 
      return this.first *= secondOp; 
      case '/': 
      return this.first /= secondOp; 
      case '=':
      return secondOp;
    }
  }

  public getOperation(op: string){

    if(this.first === null){
      this.first = Number(this.current);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.current))
      this.current = String(result);
      this.first = result;
    }
    this.operator = op;
    this.second = true;

  }

  public clear(){
    this.current = '0';
    this.first = null;
    this.operator = null;
    this.second = false;
  }
}
