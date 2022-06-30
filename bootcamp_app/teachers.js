const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(() => {
  console.log('Connected to database');
});


const queryString = `
    SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
    FROM teachers
          JOIN assistance_requests ON teachers.id = teacher_id
          JOIN students ON students.id = student_id
          JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = $1
    ORDER BY teachers.name;
`;
const cohortName = process.argv[2] || 'JUL02';
const values = [cohortName];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  });