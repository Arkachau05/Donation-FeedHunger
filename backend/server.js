import app from "./index.js";
app.listen(process.env,()=>{
    console.log(`Server Listening At Port ${process.env.PORT}`);
});