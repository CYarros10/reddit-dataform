function run(group_by_cols) {
    return `
            SELECT k.*
            FROM (
                SELECT ARRAY_AGG(row LIMIT 1)[OFFSET(0)] k 
                FROM t1 row
                GROUP BY ${group_by_cols}
            )`
}

module.exports = { run };