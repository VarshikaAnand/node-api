const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.json({ status: 'APP is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//testing change
//testing change
