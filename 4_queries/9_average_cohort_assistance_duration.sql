SELECT avg(total_duration) AS average_total_duration
FROM (
    SELECT cohorts.name AS cohort, sum(completed_at - started_at) AS total_duration
    FROM cohorts
        JOIN students ON cohorts.id = cohort_id
        JOIN assistance_requests ON students.id = student_id
    GROUP BY cohort
    ORDER BY total_duration
)
AS total_durations;