$(document).ready(function(){
    $(".playbutton").click(function(){
        window.location.href = "game.html"
    });

    $(".game_table").click(function(){
        let area_id = this.id;
        $("#"+area_id).off();
        draw_move(area_id)
    });

    let matrix_game = Array(3);

    matrix_game["a"] = Array(3);
    matrix_game["b"] = Array(3);
    matrix_game["c"] = Array(3);

    matrix_game["a"][1] = 0;
    matrix_game["a"][2] = 0;
    matrix_game["a"][3] = 0;

    matrix_game["b"][4] = 0;
    matrix_game["b"][5] = 0;
    matrix_game["b"][6] = 0;

    matrix_game["c"][7] = 0;
    matrix_game["c"][8] = 0;
    matrix_game["c"][9] = 0;
    
    let round = 1;

    function draw_move(area_id){
        let point = 0;

        if(round % 2 == 1){
            $("#"+area_id).css("background", "url('./img/x_jogada.png')");
            point = -1;

        }

        else{
            $("#"+area_id).css("background", "url('./img/Circulo_jogada.png')");
            point = 1; 
        }

        round++;
        let row_colum = area_id.split("-")
        matrix_game[row_colum[0]][row_colum[1]] = point;
        point_check()
    }

    function point_check(){
        let points = 0;
        // horizontal
        for(let i = 1; i <= 3; i++){
          points = points + matrix_game["a"][i];
        }
        win_check(points);
    
        points = 0;
        for(let i = 1; i <= 3; i++){
          points = points + matrix_game["b"][i];
        }
        win_check(points);
    
        points = 0;
        for(let i = 1; i <= 3; i++){
          points = points + matrix_game["c"][i];
        }
        win_check(points);

        // vertical
        for(let i = 1; i <= 3; i++){
            points = 0
            points = points + matrix_game["a"][i]
            points = points + matrix_game["b"][i]
            points = points + matrix_game["c"][i]
            win_check(points)
            }

        // diagonal
        points = 0;
        points = matrix_game["a"][1] + matrix_game["b"][2] + matrix_game["c"][3];
        win_check(points)

        points = 0;
        points = matrix_game["a"][3] + matrix_game["b"][2] + matrix_game["c"][1];
        win_check(points)
    }
    
    function win_check(points){
        if(points == -3){
            $(".player1").append("<h2>Player1 Win!</h2>");
            win_sound()
        }

        else if( points == 3){
            console.log("player2 win");
            $(".player2").append("<h2>Player2 Win!</h2>")
            win_sound()
        }
    }

    function win_sound(){
        let music = new Audio(".\\music\\victory sound nube negra.mp3")
        music.volume = 0.5
        music.play()
    }
});

