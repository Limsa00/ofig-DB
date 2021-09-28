const db = require('./database');

const dataMapper = {
// getAllFigurines(callback) qui va chercher toutes les figurines dans la table figurine.
    getAllFigurines:(callback) =>{
        db.query(`
        SELECT * 
        FROM figurine;
        `, (error,result) =>{
            if (error) {
                console.trace(error);
            } else {
                callback(result.rows);
            }
        })
    },

// getOneFigurine(id, callback) qui va chercher une seule figurine dans la table figurine.
    getOneFigurine:(id, callback) =>{
        db.query(`
        SELECT * 
        FROM figurine 
        WHERE id=$1;
        `,
        [id],
        (error,result)=>{
            if (error) {
                console.trace(error);
            } else {
                callback(result.rows[0]);
            }
        })

    },

};

module.exports = dataMapper;

