SELECT avg(started_at - created_at) AS average_wait_time
FROM assistance_requests;

-- We need to know the average amount of time that students are waiting for an assistance request.
-- This is the duration between an assistance request being created, and it being started.

-- Instruction
-- Calculate the average time it takes to start an assistance request.

-- Return just a single column here.
-- Expected Result:

--  average_wait_time 
-- -------------------
--  00:08:46.258793
-- (1 row)