function calculator(){
    const name1 = $('#Name1').val();
    const name2 = $('#Name2').val();
    var combinedName = name1.length + name2.length ;
    let loveScore =0;
    loveScore +=combinedName %101 +1;
    $("#result").html( name1 +" and " + name2 +" have a love score of "+ loveScore +"% ❤️" )
}


