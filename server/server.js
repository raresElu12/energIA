const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database('./server/website.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/submitArticle', async (req, res) => {
  const { titre, auteur, date_creation } = req.body;

  try {
    await saveArticleToDatabase({ titre, auteur, date_creation });
    const articles = await getAllArticlesFromDatabase();
    res.json({ articles });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/trackView', async (req, res) => {
  const { titre, date_click } = req.body;

  try {
    await saveViewToDatabase({ titre, date_click });
    const views = await getAllViewsFromDatabase();
    res.json({ views });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function saveArticleToDatabase(article) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO ARTICLE (titre, auteur, date_creation) VALUES (?, ?, ?)', [article.titre, article.auteur, article.date_creation], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getAllArticlesFromDatabase() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM ARTICLE', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function saveViewToDatabase(view) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO VIEWS (titre, date_click) VALUES (?, ?)', [view.titre, view.date_click], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getAllViewsFromDatabase() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM VIEWS', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
