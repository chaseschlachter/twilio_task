{ 
  "_id" : ObjectId("61ef627481f154bead6b0dd4"), 
    "event_name" : "Upcoming Event", 
    "venue_name" : "Little Woodrows", 
    "address" : "100 W 5th Street Austin TX", 
    "description" : "Future dated event at all times to test the phone number signup feature",
    "image" : "https://test.com",
    "geometry" : { 
      "type" : "Point", 
      "coordinates" : [ -97.751881, 30.26472 ] 
      }, 
    "event_start" : ISODate("2022-10-30T01:37:00Z"), 
    "event_end" : ISODate("2022-12-25T02:37:00Z"), 
    "guests" : [ 
      { 
        "phone" : 1111111111, 
        "_id" : ObjectId("61ef629981f154bead6b0de4") 
       } 
     ], 
    "created" : ISODate("2022-01-25T02:37:40.334Z"), 
    "artist" : ObjectId("610f16a6ba0d5fc2d4593093"), 
    "__v" : 1 
}
{ 
  "_id" : ObjectId("6178a889a8528a25ed2d5c4b"), 
    "event_name" : "Geolocation test from home", 
    "venue_name" : "The Monarch",
    "address" : "125 Comal Street Austin TX", 
    "description" : "Testing check in script against the client API", 
    "image" : "https://test.com", 
    "geometry" : { 
      "type" : "Point", 
      "coordinates" : [ -97.751838, 30.269067 ] 
      }, 
     "guests" : [ 
       { 
         "phone" : 222222222, 
         "_id" : ObjectId("61929baabbf74e3e7df79657"), 
         "attended" : "Y" 
       }, 
       { 
         "phone" : 123444666, 
         "_id" : ObjectId("61970757a8ea36aa14286157"), 
         "attended" : "Y" 
       }, 
       { "phone" : 1234567890, 
        "_id" : ObjectId("61a406189dea7478d5e87948") 
       }, 
       { "phone" : 33332222, 
        "_id" : ObjectId("61a406cbb11f85f81c77ad46"), 
        "attended" : "Y" 
       }, 
       { 
         "phone" : 909090909, 
         "_id" : ObjectId("61a42b886540ee4d6a2725e3") 
       }, 
       { 
         "phone" : 8888888888, 
         "_id" : ObjectId("61a4387146f197c09054af2d") 
       }, 
       { 
         "phone" : 5555555555, 
         "_id" : ObjectId("61a43b15983102f22f9aca02") 
       }, 
       { 
         "phone" : 1233333333, 
         "_id" : ObjectId("61a43b88983102f22f9aca2e") 
       }, 
       { 
         "phone" : 1234445555, 
         "_id" : ObjectId("61a828f96772d3cb3b3b1d2f"), 
         "attended" : "Y" 
       }
     ], 
     "event_start" : ISODate("2021-10-26T00:00:00Z"), 
     "event_end" : ISODate("2021-12-30T00:00:00Z"), 
     "created" : ISODate("2021-10-27T01:16:57.647Z"), 
     "artist" : ObjectId("610f16a6ba0d5fc2d4593093"), 
     "__v" : 14 
}
