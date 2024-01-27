import express from "express";
import { hashing, validate } from "./helpers/hashing.js";

const PORT = 3000;


class Application {

    static async main(){
        const app = express();
         
        app.use(express.static('public'));


        app.use("/hashing_test",async (req,res)=>{
                let password = "testPasswordSafe";
                let password2 = "testPasswordSafe";
                let hashed = await hashing(password);
                let verified = await validate(password2,hashed);

                res.send(`<p> Your password "${password}" and its hash "${hashed}" </p><p> testing password: "${password2}"</p><h3>Is it correct? = ${verified}</h3>`);

        });

        app.listen(PORT,()=>{
            console.log(`Server listening at PORT ${PORT}`);
        })
    }
}


export default Application;