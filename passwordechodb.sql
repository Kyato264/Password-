-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2024 at 04:20 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `passwordechodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `storedpasswords`
--

CREATE TABLE `storedpasswords` (
  `Type` varchar(50) NOT NULL,
  `ShortName` varchar(50) NOT NULL,
  `Website` varchar(50) NOT NULL,
  `RequiredUsername` varchar(50) NOT NULL,
  `UsedPassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `storedpasswords`
--

INSERT INTO `storedpasswords` (`Type`, `ShortName`, `Website`, `RequiredUsername`, `UsedPassword`) VALUES
('Website', 'Echo', 'EchoMessages', 'Baller', 'STOPPOSTINGABOUT'),
('Website', 'FB', 'Facebook.com', 'JimmyThere', 'Jimmy'),
('Website', 'TW', 'Twitter', 'SteveRobs', 'OwnerOfBallerUnited'),
('App', 'Youtube', 'Youtube.com', 'Kyato264', 'BlahBlah'),
('blah', 'Bl', 'BlahBlah', 'Blah', 'Blah');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
