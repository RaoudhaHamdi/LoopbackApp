'use strict';
const app=require('../../server/server')
module.exports = function(Profil) {
Profil.getProfilsEvent= (id,next) =>{
const ProfilsEvent=[]
const Part=app.models.Part
    Part.find({"include":["profil"]},(err,res)=>{
        if(err){next(err)}
        for(var i=0;i<res.length;i++){
            if(res[i].eventId==id)
            ProfilsEvent.push(res[i])
        }
        next(null,ProfilsEvent)
    })
}
Profil.remoteMethod('getProfilsEvent',{
description:"get list of profils per Event #####",
accepts:{arg:'id','type':'string'},
returns:{arg:'result'},
http:{verb:'get',path:'/getProfilsEvent'}
})

};
