const mysql=require("mysql"),connection=mysql.createConnection({host:"localhost",user:"zrbania_root",password:"password",database:"zrbania_AngularTemplate"});connection.connect(o=>{if(o)throw o;console.log("Connected!")});