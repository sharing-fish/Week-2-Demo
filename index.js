var express = require('express'),
    app = express(),
    config = require('./config'),
    axios = require('axios');

async function getUserRepos(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${config.githubToken}`
        }
      });
      const repoTitles = response.data.map(repo => repo.name);
      return repoTitles;
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw error;
    }
  }
  
  app.get('/', async (req, res) => {
    const username = 'sharing-fish';
    try {
      const repos = await getUserRepos(username);
      res.json(repos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user repositories' });
    }
  });
  

const PORT = 3000;
module.exports = app.listen(PORT, () => {
    console.log('Server running on port %d', PORT);
})