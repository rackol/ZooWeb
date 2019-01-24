
var animalPopulation=0;
var barn=[];
$(document).ready(function(){
    var tigger=new Tiger("Tigger");
    var pooh=new Bear("Pooh");
    var rarity=new Unicorn("Rarity");
    var gemma=new Giraffe("Gemma");
    var stinger=new Bee("Stinger");
    barn=[tigger,pooh,rarity,gemma,stinger]
});

function createAnimal(){
    $("#happening").html("");
    var thename=$("#name").val();
    var nAnimal=$("#animal").val();
    switch (parseInt(nAnimal)){
        case 0:
            animal=0
            break;
        case 1:
            animal=new Tiger(thename);
            break;
        case 2:
            animal=new Bear(thename);
            break;
        case 3:
            animal=new Unicorn(thename);
            break;
        case 4:
            animal=new Giraffe(thename);
            break;
        case 5:
            animal=new Bee(thename);
            break;
    }
        if(animal==0){
            $("#happening").append("please select an animal<br>");
        }else{
            barn.push(animal);
            $("#happening").append(thename+" the "+animal.constructor.name+" was created<br>");
        }

}

function feed(){
    var newme=new Zookeeper("you");
    $("#happening").html("");
    var theFood=$("#food").val();
    newme.feedAnimals(theFood);
}

function Delete(){
    $("#happening").html("");
    var aName=$("#dname").val();
    for(var i=0;i<barn.length;i++){
        if(barn[i].name==aName){
            var num=barn.indexOf(barn[i]);
            barn.splice(num,1);
            $("#happening").append(aName+" was deleted<br>");
        }
    }
}

function printBarn(){
    $("#happening").html("");
    for(var i=0;i<barn.length;i++){
        $("#happening").append(barn[i].name+" the "+ barn[i].constructor.name+" loves "+barn[i].favoriteFood+"<br>");
    }0
}

class Zookeeper{
    constructor(name){
        this.name=name;
    }
    feedAnimals(food){
        $("#happening").html("");
        var foods=$("#food").val();
        $("#happening").append(this.name+" are feeding "+food+" to "+barn.length+" animals<br>");
        for(var i=0;i<barn.length;i++){
            barn[i].eat(foods);
        }
    }

}

class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    sleep(sleepTime){
        $("#happening").append(this.name + " sleeps for 8 hours<br>");
    }
    eat(food){
        $("#happening").append(this.name+" eats "+food+"<br>");
        food==this.favoriteFood?$("#happening").append("YUM!! "+this.name+" wants more "+food+"<br>"):$("#happening").append(this.sleep());
    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name,"meat");
    }
    sleep(){
        super.sleep(" sleeps for 8 hours");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name,"fish");
    }
    sleep(){
        $("#happening").append(this.name +" hibernates for 4 months<br>");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    sleep(){
        $("#happening").append(this.name +" sleeps in a cloud<br>");
    }
    eat(food){
        $("#happening").append(this.name+" eats "+food+"<br>");
        food==this.favoriteFood?$("#happening").append("YUM!! "+this.name+" wants more "+food+this.sleep()):$("#happening").append();
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name,"leaves");
    }
    eat(food){
        $("#happening").append(this.name+" eats "+food+"<br>");

        food==this.favoriteFood?$("#happening").append("YUM!! "+this.name+" wants more "+food+this.sleep()):$("#happening").append("YUCK!!! "+this.name+" will not eat "+food+"<br>");
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"pollen");
    }
    sleep(){
        $("#happening").append(this.name +"  never sleeps<br>");
    }
    eat(food){
        $("#happening").append(this.name+" eats "+food+"<br>");
        food==this.favoriteFood?$("#happening").append("YUM!! "+this.name+" wants more "+food+this.sleep()):$("#happening").append("YUCK!!! "+this.name+" will not eat "+food+"<br>");
    }
}