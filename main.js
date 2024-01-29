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

const pAweqourFactory = (organismsNumber, array) => {
  return {
    specimenNum: organismsNumber,
    dna: array,
    mutate () {
    for (let i = 0; i < dna.length; i++) {
      if (this.array[i] !== returnRandBase) {
        this.array[i] = returnRandBase();
        }
      }
    }, 
    compareDNA (pAequor) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          commonBases++;
        }
      }
      //Percentage
      const percentage = (commonBases / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${otherAequor.specimenNum} have ${percentage}% DNA in common.`);
    }, 
    willLikelySurvive() {
      let c = 0;
      let g = 0; 
      let newArray = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') {
          c++;
        } else if (this.dna[i] === 'G') {
          g++;
        }
      }
      const percentageC = survivalPercentage(c, this.dna.length);
      const percentageG = survivalPercentage(g, this.dna.length);

      if (percentageC >= 60 || percentageG >= 60) {
        return true;
      } else {
        return false;
      }
      let i = 0;
      while (newArray.length < 30) {
        if (willLikelySurvive()) {
          newArray.push(mockUpStrand())
        }
        i++;
      }
      return newArray;
    }, 
  } 
}


function survivalPercentage(base, DNALength) {
  let percentage = (base * 100) / DNALength;
  return percentage;
}
