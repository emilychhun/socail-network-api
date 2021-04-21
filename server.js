let mongoose = require('mongoose');

let express = require('express');

let app = express();
let PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes'));
//connect db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network23', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
