/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res){
    var params = req.params.all();
    var newUserGuy ={};
    //db name side     //ui param side
    newUserGuy.name = params.name;
    newUserGuy.password = params.pword;
    newUserGuy.bio = params.about;

    User.create(newUserGuy).exec(function createCB(err,created){
      if(err) return res.send(err);

      return res.json({
        notice: 'Created user with name ' + created.name
      });
    });
  },

  login: function(req,res){
    var params = req.params.all()

    res.send(params)
  }

};

