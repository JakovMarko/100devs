//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow{
    constructor(showName, showType, showBudget, showLength){
        this.name = showName
        this.type = showType
        this.budget = showBudget
        this.length = showLength
    }
    announce(){
        alert(`The new show ${this.name} will be airing start next Monday tune in!!`)
    }
    

}

const gameOfThrones = new NetflixTVShow('Game of THrones', 'Drama', '1 billion million dollards', 'too long');

