const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files (e.g., CSS and images)
app.use(express.static(__dirname + '/public'));

// Include routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
