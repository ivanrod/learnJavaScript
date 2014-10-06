chai.should(); // invoking this function creates a "should" object on every object
context = describe;



describe("the input parser", function(){

    it ("converts lowercase string to uppercase", function(){
        var result = parseInput("desarrollador");

        expect(["DESARROLLADOR"]).toEqual(result);
    });

function EventBus(){
  var subscribersInfo = [];

  this.addSubscriber = function(callback){
     var eventNames = [].slice.call(arguments).slice(1);
     subscribersInfo.push({
       subscriber: callback, eventNames: eventNames});
   };

  this.emit = function(eventName, eventArgs){
     for(var i = 0, len = subscribersInfo.length; i < len; i++){
         var info = subscribersInfo[i];
         for (var j = 0, lenj = info.eventNames.length; j < lenj; j++){
             if (info.eventNames[j] == eventName)
                 info.subscriber(eventName, eventArgs);
         }
     }
  };
};

});


