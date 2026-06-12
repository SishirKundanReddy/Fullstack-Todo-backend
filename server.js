import app from "./app.js"
import dbConnect from "./config/db.js"

dbConnect();
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});