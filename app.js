const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const mysql = require('mysql');
const abc =require(__dirname +'/public/java.js');
const app = express();


let find = 0;
let e=0;
let flag1=0,flag2=0,flag3=0,flag4=0,flag5=0;
let altusername="";
let altpass="";
let altphno="";


app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arun2806",
  database: "dbms",
  insecureAuth: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get("/", function(req, res) {
res.render('front', {});
});

app.get("/index",function(req,res){
  res.render('index', {});
});




app.post("/index", function(req, res) {
  let p = req.body.confirmpass;
 altpass = req.body.pass;
 let h=req.body.phno;
  if (altpass !== p || h.length<10) {

  } else {

      altusername = req.body.username;
     altphno = req.body.phno;
     res.render('placement', {});

  }

});

app.get("/placement", function(req, res) {
  res.render('placement', {});
});

app.post("/placement", function(req, res) {
  let cgpa = req.body.cgpa;
  e=0;
flag1=0,flag2=0,flag3=0,flag4=0,flag5=0;
          let c1=req.body.c1;
          let c2=req.body.c2;
          let c3=req.body.c3;
          let c4=req.body.c4;
          let c5=req.body.c5;
          console.log(c1,c2,c3,c4,c5);
        if(c1=="on")
        {  flag1=0;
          console.log("inside google");
          var sql ="SELECT minreq FROM company WHERE companyid=?";
        con.query(sql,['16Z200'],function(err,result){
            if(err) throw err;
            else{
              if(cgpa<result[0].minreq){
                console.log("not eligible for google");
                e-=1;

              }
              else{
                console.log("im executed");
                e+=1;
              flag1+=1;
            }
            }
          });
        }
     if(c2=="on")
        { flag2=0;
          console.log("inside microsoft");
          var sql ="SELECT minreq FROM company WHERE companyid=?";
        con.query(sql,['16Z300'],function(err,result){
            if(err) throw err;
            else{
              if(cgpa<result[0].minreq){
                console.log("not eligible for microsoft");
                e-=1;

              }
              else{
                console.log("im executed");
                e+=1;
              flag2+=1;}
            }
          });
        }
      if(c3=="on")
        { flag3=0;
           console.log("inside arcesium");
          var sql ="SELECT minreq FROM company WHERE companyid=?";
          con.query(sql,['16Z400'],function(err,result){
            if(err) throw err;
            else{
              if(cgpa<result[0].minreq){
                console.log("not eligible for arcesium");
                e-=1;
              }
              else{
                console.log("im executed");
                e+=1;
              flag3+=1;
            }
            }
          });
        }
      if(c4=="on")
        { flag4=0;
           console.log("inside infosys");
          var sql ="SELECT minreq FROM company WHERE companyid=?";
          con.query(sql,['16Z500'],function(err,result){
            if(err) throw err;
            else{
              if(cgpa<result[0].minreq){
                console.log("not eligible for infosys");
                e-=1;
              }
              else{
                console.log("im executed");
                e+=1;
              flag4+=1;
            }
            }
          });
        }
    if(c5=="on")
        { flag5=0;
           console.log("inside tcs");
          var sql ="SELECT minreq FROM company WHERE companyid=?";
          con.query(sql,['16Z600'],function(err,result){
            if(err) throw err;
            else{
              if(cgpa<result[0].minreq){
                console.log("not eligible for TCS");
                e-=1;
              }
              else{
                console.log("im executed");
                e+=1;
              flag5+=1;
            }
            }
          });
        }

setTimeout(function(){if((e>0) && (e === (flag1+flag2+flag3+flag4+flag5))){
  console.log("Entered!");
  console.log(e);
  console.log(flag1,flag2,flag3,flag4,flag5);
if(c1=="on" && (flag1 === 1)){
let a = req.body.rollno;
let b = req.body.dept;

var sql = "INSERT INTO preplacement(rollno,CGPA,companyid,dept) VALUES(?,?,?,?)";
con.query(sql, [a, cgpa, '16Z200', b], function(err, result) {
  if (err) throw err;
  else {
    sql = "INSERT INTO companyhr(rollno,companyid) VALUES(?,?)";
    con.query(sql, [a,'16Z200'], function(err, response) {
      if (err) throw err;
      else {


      var kadupu="INSERT INTO login(username,password,phone) VALUES(?,?,?)";
      con.query(kadupu,[altusername,altpass,altphno],function(err,ack){
        if(err) throw err;
        else{

                console.log("Google1");//rendering to Succes page Completed
        }
      });
      }
    });
  }
});
}
if((c2=="on") && (flag2 === 1)){
let a = req.body.rollno;
let b = req.body.dept;
var sql = "INSERT INTO preplacement(rollno,CGPA,companyid,dept) VALUES(?,?,?,?)";
con.query(sql, [a, cgpa, '16Z300', b], function(err, result) {
  if (err) throw err;
  else {
    sql = "INSERT INTO companyhr(rollno,companyid) VALUES(?,?)";
    con.query(sql, [a,'16Z300'], function(err, response) {
      if (err) throw err;
      else {
        var kadupu="INSERT INTO login(username,password,phone) VALUES(?,?,?)";
        con.query(kadupu,[altusername,altpass,altphno],function(err,ack){
          if(err) throw err;
          else{

                  console.log("Microsoft1");//rendering to Succes page Completed
          }
        });
      }
    });
  }
});
}
if((c3=="on") && (flag3 === 1)){
let a = req.body.rollno;
let b = req.body.dept;
var sql = "INSERT INTO preplacement(rollno,CGPA,companyid,dept) VALUES(?,?,?,?)";
con.query(sql, [a, cgpa, '16Z400', b], function(err, result) {
  if (err) throw err;
  else {
    sql = "INSERT INTO companyhr(rollno,companyid) VALUES(?,?)";
    con.query(sql, [a,'16Z400'], function(err, response) {
      if (err) throw err;
      else {
        var kadupu="INSERT INTO login(username,password,phone) VALUES(?,?,?)";
        con.query(kadupu,[altusername,altpass,altphno],function(err,ack){
          if(err) throw err;
          else{

                  console.log("Arcesium1");//rendering to Succes page Completed
          }
        });
      }
    });
  }
});
}
if((c4=="on") && (flag4 === 1)){
let a = req.body.rollno;
let b = req.body.dept;
var sql = "INSERT INTO preplacement(rollno,CGPA,companyid,dept) VALUES(?,?,?,?)";
con.query(sql, [a, cgpa, '16Z500', b], function(err, result) {
  if (err) throw err;
  else {
    sql = "INSERT INTO companyhr(rollno,companyid) VALUES(?,?)";
    con.query(sql, [a,'16Z500'], function(err, response) {
      if (err) throw err;
      else {
        var kadupu="INSERT INTO login(username,password,phone) VALUES(?,?,?)";
        con.query(kadupu,[altusername,altpass,altphno],function(err,ack){
          if(err) throw err;
          else{

                  console.log("Infosys1");//rendering to Succes page Completed
          }
        });
      }
    });
  }
});
}
if((c5=="on") && (flag5 === 1)){
let a = req.body.rollno;
let b = req.body.dept;
var sql = "INSERT INTO preplacement(rollno,CGPA,companyid,dept) VALUES(?,?,?,?)";
con.query(sql, [a, cgpa, '16Z600', b], function(err, result) {
  if (err) throw err;
  else {
    sql = "INSERT INTO companyhr(rollno,companyid) VALUES(?,?)";
    con.query(sql, [a,'16Z600'], function(err, response) {
      if (err) throw err;
      else {
        var kadupu="INSERT INTO login(username,password,phone) VALUES(?,?,?)";
        con.query(kadupu,[altusername,altpass,altphno],function(err,ack){
          if(err) throw err;
          else{

                  console.log("TCS1");//rendering to Succes page Completed
          }
        });
      }
    });
  }
});
}
res.render('afterlogin',{});
}},1500);



});

app.get("/admin", function(req, res) {
  res.render('admin', {});
});

app.post("/admin", function(req, res) {
  let a = req.body.companyID;
  let b = req.body.cname;
  let c = req.body.cmppass;
  if ((a == '16Z200' && b == 'Google') && c == 'pass1') {
    find = 1;
    var sql = "SELECT login.username,preplacement.CGPA,preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, [a], function(err, ans) {
      if (err) throw err;
      else {
        console.log(ans);
        res.render('result', {
          students: ans
        });
      }
    })
  } else if ((a == '16Z300' && b == 'Microsoft') && c == 'pass2') {
    find = 2;
    var sql = "SELECT login.username,preplacement.CGPA,preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, [a], function(err, ans) {
      if (err) throw err;
      else {
        console.log(ans);
        res.render('result', {
          students: ans
        });
      }
    })
  } else if ((a == '16Z400' && b == 'Arcesium') && c == 'pass3') {
    find = 3;
    var sql = "SELECT login.username,preplacement.CGPA,preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, [a], function(err, ans) {
      if (err) throw err;
      else {
        console.log(ans);
        res.render('result', {
          students: ans
        });
      }
    })
  } else if ((a == '16Z500' && b == 'Infosys') && c == 'pass4') {
    find = 4;
    var sql = "SELECT login.username,preplacement.CGPA,preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, [a], function(err, ans) {
      if (err) throw err;
      else {
        console.log(ans);
        res.render('result', {
          students: ans
        });
      }
    })
  } else if ((a == '16Z600' && b == 'TCS') && c == 'pass5') {
    find = 5;
    var sql = "SELECT login.username,preplacement.CGPA,preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, [a], function(err, ans) {
      if (err) throw err;
      else {
        console.log(ans);
        res.render('result', {
          students: ans
        });
      }
    })
  } else {

  }

});

app.post("/result", function(req, res) {
  let arr = req.body.sta;
  if (find === 1) {
    var sql = "SELECT preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, ['16Z200'], function(err, result) {
      if (err) throw err;
      else {
        for (var i = 0; i < result.length; i++) {
          var s = "UPDATE companyhr SET status=? WHERE rollno=? AND companyid=?";
          con.query(s,[arr[i],result[i].rollno,'16Z200'] ,function(err, r) {
            if (err) throw err;
            else {
              console.log("1 record Updated");
            }
          });
        }
      }
    });
  } else if (find === 2) {
    var sql = "SELECT preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, ['16Z300'], function(err, result) {
      if (err) throw err;
      else {
        for (var i = 0; i < result.length; i++) {
          var s = "UPDATE companyhr SET status=? WHERE rollno=? AND companyid=?";
          con.query(s,[arr[i],result[i].rollno,'16Z300'] ,function(err, r) {
            if (err) throw err;
            else {
              console.log("1 record Updated");
            }
          });
        }
      }
    });

  } else if (find === 3) {
    var sql = "SELECT preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, ['16Z400'], function(err, result) {
      if (err) throw err;
      else {
        for (var i = 0; i < result.length; i++) {
          var s = "UPDATE companyhr SET status=? WHERE rollno=? AND companyid=?";
          con.query(s,[arr[i],result[i].rollno,'16Z400'] ,function(err, r) {
            if (err) throw err;
            else {
              console.log("1 record Updated");
            }
          });
        }
      }
    });

  } else if (find === 4) {
    var sql = "SELECT preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, ['16Z500'], function(err, result) {
      if (err) throw err;
      else {
        for (var i = 0; i < result.length; i++) {
          var s = "UPDATE companyhr SET status=? WHERE rollno=? AND companyid=?";
          con.query(s,[arr[i],result[i].rollno,'16Z500'] ,function(err, r) {
            if (err) throw err;
            else {
              console.log("1 record Updated");
            }
          });
        }
      }
    });

  } else {
    var sql = "SELECT preplacement.rollno FROM companyhr inner join preplacement INNER JOIN login ON login.userid=preplacement.userid AND companyhr.userid=preplacement.userid AND login.userid=companyhr.userid AND preplacement.companyid=? AND companyhr.status like 'Wait%'";
    con.query(sql, ['16Z600'], function(err, result) {
      if (err) throw err;
      else {
        for (var i = 0; i < result.length; i++) {
          var s = "UPDATE companyhr SET status=? WHERE rollno=? AND companyid=?";
          con.query(s,[arr[i],result[i].rollno,'16Z600'] ,function(err, r) {
            if (err) throw err;
            else {
              console.log("1 record Updated");
            }
          });
        }
      }
    });

  }

res.render('admin',{});
});

app.get("/disp",function(req,res){
  res.render('disp',{});

});

app.post("/disp",function(req,res){
let a=req.body.rollno;
let p=req.body.pass;
var check="SELECT login.password FROM login INNER JOIN preplacement ON login.userid=preplacement.userid AND preplacement.rollno=?";
con.query(check,[a],function(err,response){
  if(err) {
    res.render('disp',{});
  }
  else{
    if(response[0].password==p){
      var sql="SELECT status FROM companyhr WHERE companyhr.rollno=?";
      con.query(sql,[a],function(err,result){
        if(err) throw err;
        else{
        var ql="SELECT login.username  FROM preplacement INNER JOIN login ON login.userid=preplacement.userid AND preplacement.rollno=?";
          con.query(ql,[a],function(err,r){
            if(err) throw err;
            else{
              var m="SELECT companyid FROM companyhr WHERE companyhr.rollno=?";
              con.query(m,[a],function(err,k){
                if(err) throw err;
                else{res.render('publish',{stat:result,nam:r,cid:k});}
              });

            }
          });
      }
    });
    }
    else{ console.log("you have entered a wrong password");
    }   //Alert Box for Invalid password pending
  }
});

});

app.listen(3000, function() {
  console.log("server running at port 3000");
});
