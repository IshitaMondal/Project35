class Food{
    constructor(){
        this.image = loadImage("Milk.png");
        this.foodStock;
        this.lastFed;
    }
    
    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock; i++);
            if(i%10 === 0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x = x+30;
        }
    }
    getFoodStock(){
        foodStock = database.ref("Food");
        foodStock.on("value",function(data){
            foodStock = data.val();
        })
    }
    updateFoodStock(){
        foodStock.ref('/').update({
            'Food': foodStock
        })
    }
    deductFood(){
        if(this.foodStock>0){
            foodStock-=1;
        }           
    }
    
}