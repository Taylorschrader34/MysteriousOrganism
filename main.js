// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, arr) => {
    return {
      num,
      arr,
      mutate(){
        const randIndex = Math.floor(Math.random() * this.arr.length)
        let newBase = returnRandBase();
        while (this.arr[randIndex] === newBase){
          newBase = returnRandBase();
        }
        this.arr[randIndex] = newBase;
        return this.arr
      },
      compareDNA(pAequor){
        let matches = 0;
        for(var i=0;i<this.arr.length;i++){
          if(pAequor.arr[i] === this.arr[i]){
            matches += 1;
          }
        }
        const percentMatch = (matches/this.arr.length) * 100;
        
        console.log('specimen ${this.num}# and specimen ${pAequor.num}# have ${percentMatch}% DNA in common.')
      },
      willLikelySurvive(){
        let countCOrG = 0;
        for(var i=0;i<this.arr.length;i++){
          if(this.arr[i] === "C" || this.arr[i] === "G"){
             countCOrG +=1;
          }
        }
  
        const percentMatch = countCOrG/this.arr.length;
  
        if(percentMatch >= .6){
          return true;
        }else{
           return false;
        }
      },
      complementStrand(){
        let compStrand = [];
        for(var i=0; i<this.arr.length;i++){
          switch(this.arr[i]) {
            case "A":
              compStrand.push("T");
              break;
            case "T":
              compStrand.push("A");
              break;
            case "C":
              compStrand.push("G");
              break;
            case "G":
              compStrand.push("C");
              break;
          }
        }
        return compStrand;
      }
    }
  };
  
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen)
  console.log(survivingSpecimen[0])
  console.log(survivingSpecimen[0].complementStrand())
  
  
  
  
  
  
  