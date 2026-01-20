-- ======================================================
-- Migration Script: Update Status Field to User Roles
-- ======================================================

USE db_68319010013;

-- Step 1: Update existing 'active' users to 'user' status
-- (This needs to be done before changing the ENUM)
UPDATE tbl_users SET status = 'user' WHERE status = 'active';

-- Step 2: Modify the status column to use new ENUM values
ALTER TABLE tbl_users 
  MODIFY COLUMN status ENUM('user', 'admin') DEFAULT 'user';

-- Step 3: Create an admin user (UPDATE THIS WITH YOUR CREDENTIALS)
-- Password: admin123 (hashed with bcrypt)
-- You should change this password after first login
INSERT INTO tbl_users (firstname, fullname, lastname, username, password, status)
VALUES ('Admin', 'Admin', 'User', 'admin', '$2b$10$rGHQcVxJlhWxJ7pKYvQN5OqN.H7L8YlYxXxK3EEq9pYzKZQvZF8Ai', 'admin')
ON DUPLICATE KEY UPDATE status = 'admin';

-- Verify changes
SELECT id, username, fullname, lastname, status 
FROM tbl_users 
ORDER BY status DESC, id ASC;
