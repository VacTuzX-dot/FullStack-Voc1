-- ======================================================
-- Database Schema for FullStack-Voc1
-- Run this script in phpMyAdmin or MySQL CLI
-- ======================================================

-- Create Database
CREATE DATABASE IF NOT EXISTS db_shop 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE db_shop;

-- ======================================================
-- Table: tbl_users
-- ======================================================
CREATE TABLE IF NOT EXISTS tbl_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL COMMENT 'คำนำหน้า (นาย/นาง/นางสาว)',
    fullname VARCHAR(100) NOT NULL COMMENT 'ชื่อ',
    lastname VARCHAR(100) NOT NULL COMMENT 'นามสกุล',
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL COMMENT 'bcrypt hashed password',
    address TEXT COMMENT 'ที่อยู่',
    sex VARCHAR(10) COMMENT 'เพศ (ชาย/หญิง)',
    birthday DATE COMMENT 'วันเกิด',
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ======================================================
-- Sample Data (optional)
-- Password: "password123" hashed with bcrypt
-- ======================================================
-- INSERT INTO tbl_users (firstname, fullname, lastname, username, password, address, sex, birthday, status)
-- VALUES ('นาย', 'ทดสอบ', 'ระบบ', 'admin', '$2b$10$...hashed...', 'กรุงเทพฯ', 'ชาย', '1990-01-01', 'active');
