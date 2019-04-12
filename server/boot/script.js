'use strict';
const app=require('../server')
module.exports = function() {
const Profil=app.models.Profil,
      Role=app.models.Role,
      RoleMapping=app.models.RoleMapping
      
Profil.findOrCreate({ where: { email: 'admin@gmail.com'  } },
    {username: 'adminos', email: 'admin@gmail.com', password: 'adminos',role:'admin'}, function(err, user) {
    if (err) console.log('%j', err);
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) console.log (err);
      console.log('Created role:', role);
      // Make raoudha an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: user.id
      }, function(err, principal) {
        if (err) console.log (err)
        console.log('Created principal:', principal);
      });
    });
  });
}


