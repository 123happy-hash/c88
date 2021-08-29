canvas=new fabric.Canvas("myCanvas");
player_x=50;
player_y=50;

Block_width=30;
Block_height=30;

var player_object ="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;

        block_object.scaleToWidth(Block_width);
        block_object.scaleToHeight(Block_height);
        block_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if (keypressed=="67"){
        block_update("cloud.jpg");
    }
     else if (keypressed=="68"){
        block_update("dark_green.png");
    }
    else if (keypressed=="71"){
        block_update("ground.png");
    }
    else if (keypressed=="76"){
        block_update("light_green.png");
    }
    else if (keypressed=="82"){
        block_update("roof.jpg");
    }
    else if (keypressed=="84"){
        block_update("trunk.jpg");
    }
    else if (keypressed=="85"){
        block_update("unique.png");
    }
    else if (keypressed=="87"){
        block_update("wall.jpg");
    }
    else if (keypressed=="89"){
        block_update("yellow_wall.png");
    }
    else if (e.shiftKey==true && keypressed=="80"){
        Block_width= Block_width+10;
        Block_height=Block_height+10;
        document.getElementById("currentwidth").innerHTML=Block_width;
        document.getElementById("currentheight").innerHTML=Block_height;
    }
    else if (e.shiftKey==true && keypressed=="77"){
        Block_width= Block_width-10;
        Block_height=Block_height-10;
        document.getElementById("currentwidth").innerHTML=Block_width;
        document.getElementById("currentheight").innerHTML=Block_height;
    }
    else if (keypressed=="37"){
        left();
        console.log("left arrow pressed");
    }
    else if (keypressed=="38"){
        up();
        console.log("up arrow pressed");
    }
    else if (keypressed=="39"){
        right();
        console.log("right arrow pressed");
    }
    else if (keypressed=="40"){
        down();
        console.log("down arrow pressed");
    }

    
}
function up(){
    if(player_y >=0){
        player_y=player_y - Block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >=0){
        player_x=player_x - Block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=400){
        player_y=player_y + Block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <=600){
        player_x=player_x + Block_width;
        canvas.remove(player_object);
        player_update();
    }
}