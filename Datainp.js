class Datainp {

    constructor() {
        this.name = createInput("")
        this.vaccinated = createSelect()
    }

    hide(){

    }
  
    display(){
        
    this.vaccinated.position(10, 10);
    this.vaccinated.option('Vaccinated');
    this.vaccinated.option('1st Dose Completed');
    this.vaccinated.option('Not Vaccinated');
    
    this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
  console.log('hi');
    }
  }
  