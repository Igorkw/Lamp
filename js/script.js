var quebrada = false;
    var on = false; 
    var off = false;

    function lampadaMudar(estado) {

        if (!quebrada){
            document.getElementById('luz').src = 'img/' +estado+ '.png';
            if (estado == 'quebrada'){
                quebrada = true;
            }
        }
    }











































    