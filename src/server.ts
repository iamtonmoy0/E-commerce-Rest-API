import app from "./app/app";
import dbConnect from "./config/dbConnect";


// db connection 
dbConnect()

app.listen(process.env.PORT, () => {
  console.log(`server is running :${process.env.PORT}`);
});
