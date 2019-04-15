'use strict';
const app=require('../../server/server')
module.exports = function(Event) {
   

Event.getEventsProfil= (id,next) =>{
const eventsProfil=[]
const Part=app.models.Part
    Part.find({"include":["event"]},(err,res)=>{
        if(err){next(err)}
        for(var i=0;i<res.length;i++){
            if(res[i].profilId==id)
            eventsProfil.push(res[i])
        }
        next(null,eventsProfil)
    })
}
Event.remoteMethod('getEventsProfil',{
description:"get list of events per Profil #####",
accepts:{arg:'id','type':'string'},
returns:{arg:'result'},
http:{verb:'get',path:'/getEventsProfil'}
})

};
