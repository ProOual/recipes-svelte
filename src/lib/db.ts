import mysql from 'mysql2';

const recipes = [
    { id: 1, name: 'Recette 1', description: 'Description de la recette 1' },
    { id: 2, name: 'Recette 2', description: 'Description de la recette 2' },
];

const members = [
    { id: 1, name: 'john doe', description: 'user 1' },
    { id: 2, name: 'max doe',  description: 'user 2' },
];

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'svelte_test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function getPost() {
  try {
    const [rows, fields] = await pool.promise().query('SELECT * FROM post');
    // Assurez-vous que rows est toujours un tableau
    const posts = Array.isArray(rows) ? rows : [rows];
    return posts as Post[];
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error; // Propagate the error to the caller
  }
}

async function createPost(name: string, content: string) {
  try {
    // Remplacez 'your_table_name' par le nom réel de votre table
    const sql = 'INSERT INTO post (name, description) VALUES (?, ?)';
    const values = [name, content];

    const [result]  = await pool.promise().execute(sql, values);
    result as any
    // Vous pouvez retourner l'ID de la ligne insérée ou toute autre information pertinente
    return result ;


  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }
}



interface Post{
  id: number,
  name: string,
  description: string
}


export {
    pool,
    getPost,
    createPost,
    members,
    recipes
};
