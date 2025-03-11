/* Reset & Basic Styling */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}

.website-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
}

.website-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.website-item:hover {
  transform: translateY(-5px);
}

.website-item img {
  max-width: 100px;
  margin-bottom: 1rem;
}

.website-item h3 {
  margin-bottom: 0.5rem;
}

.website-item p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.website-item a {
  text-decoration: none;
  color: white;
  background-color: #4CAF50;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
}

.website-item a:hover {
  background-color: #45a049;
}

