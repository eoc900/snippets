import bcrypt from "bcrypt"


const saltRounds = 10;

async function bcryptProcess(pass){
    console.log(`bcryptProcess(${pass})`);
     return new Promise((resolve,reject)=>{
        
            bcrypt.genSalt(saltRounds).then(salt => {
                console.log(`salt = ${salt}`);
                resolve(bcrypt.hash(pass, salt));
            }).catch(error=>reject(error));
        
   })
}

// Main function
export async function hashing(passcode){
let pass = passcode;
  try{
    let hash = await bcryptProcess(pass);
    return hash;
  }catch(err){
    console.log("We found a huge error: ");
    console.log(err);
  }
    
}

// Main function
export async function validate(passcode,hashed){
    let pass = passcode;
    return new Promise((resolve,reject)=>{
       
            bcrypt
            .compare(pass, hashed)
            .then(result => {
                resolve(result);
            })
            .catch(err =>reject(err));         
    });
}





