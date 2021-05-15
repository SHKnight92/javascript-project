//Mega Friends

 function megaFriend(friendsName){

    var nameLength = 0;
  
    for ( var i = 0; i < friendsName.length; i++ ){

      if ( friendsName[i].length > nameLength ){
        var nameLength = friendsName[i].length;
        var longestFriendName = friendsName[i];
      }
    }
    return longestFriendName;
 }

  var friendsName = ["knight","saddam","nafiz","doli","nazifa"];//Enter your friend list
  var megaFriendName = megaFriend(friendsName);

  console.log(megaFriendName);