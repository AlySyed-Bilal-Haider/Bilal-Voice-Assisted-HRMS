-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2022 at 05:13 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smarthr`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(11) NOT NULL,
  `assetName` varchar(200) NOT NULL,
  `assetId` varchar(200) NOT NULL,
  `PurchaseDate` date NOT NULL,
  `PurchaseFrom` varchar(200) NOT NULL,
  `Manufacturer` varchar(200) NOT NULL,
  `Model` varchar(200) NOT NULL,
  `Status` int(10) NOT NULL,
  `Supplier` varchar(255) NOT NULL,
  `AssetCondition` varchar(255) NOT NULL,
  `Warranty` varchar(255) NOT NULL,
  `Price` int(255) NOT NULL,
  `AssetUser` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `assetName`, `assetId`, `PurchaseDate`, `PurchaseFrom`, `Manufacturer`, `Model`, `Status`, `Supplier`, `AssetCondition`, `Warranty`, `Price`, `AssetUser`, `Description`, `DateTime`) VALUES
(1, 'Macbook Book', '#AST-031256', '2020-09-23', 'Amazon', 'Apple Inc.', '2020', 1, 'Amazon', 'In good shape', '12 Months', 1900, 'Mushe abdul-Hakim', 'This is the description of the laptop', '2020-09-23 23:57:26');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `attendance_id` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `checkin` time DEFAULT NULL,
  `checkout` time DEFAULT NULL,
  `curdate` date DEFAULT NULL,
  `workinghour` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `usermcaddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`attendance_id`, `EmployeeID`, `checkin`, `checkout`, `curdate`, `workinghour`, `status`, `usermcaddress`) VALUES
(1, 8, '10:00:33', '10:01:41', '2022-08-06', '0:1', 1, '9c:fc:e8:80:04:30');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `Catid` int(20) NOT NULL,
  `catname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`Catid`, `catname`) VALUES
(7, 'Software development Bilal'),
(8, 'Development'),
(12, 'Project management ');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `ClientId` varchar(225) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Company` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Status` int(11) NOT NULL,
  `Picture` varchar(225) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `FirstName`, `LastName`, `UserName`, `Email`, `ClientId`, `Phone`, `Company`, `Address`, `Status`, `Picture`, `date`) VALUES
(7, 'Zain Sajed', 'Haider', 'Sajjad', 'Ikram@gmail.com', 'zain12*5', '+9234678900', 'Bloctech', 'jhang city', 1, '1658648199-Profile.png', '2022-07-24');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `subject` varchar(25) NOT NULL,
  `msg` varchar(250) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `subject`, `msg`, `username`, `email`) VALUES
(1, 'how to Appli?', 'How to apply for react jobs in Bloctech solutions.', 'Bilal', 'bilalshahbscs@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `Department` varchar(200) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `Department`, `Date`) VALUES
(2, 'Digitals', '2020-09-26'),
(3, 'Information technology', '2020-09-26'),
(4, 'Web Development', '2020-09-27'),
(5, 'Human resource', '2022-07-17'),
(6, 'Project management', '2022-07-20'),
(7, 'Education Department', '2022-08-05');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` int(11) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  `Department` int(20) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `Designation`, `Department`, `Date`) VALUES
(4, 'Associate software ', 3, '2022-07-18');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(5) NOT NULL,
  `applicationid` int(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `designations` varchar(255) NOT NULL,
  `DateTime` date NOT NULL,
  `picture` mediumblob NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `applicationid`, `email`, `password`, `department`, `designations`, `DateTime`, `picture`, `role`) VALUES
(8, 2, 'bilalshahbscs@gmail.com', '670637bscs', 'Informations technology', 'software developer', '2022-08-18', 0x313635393835363837372d6c6f676f2e706e67, 2);

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `id` int(11) NOT NULL,
  `Holiday_Name` varchar(200) NOT NULL,
  `Holiday_Date` date NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `holidays`
--

INSERT INTO `holidays` (`id`, `Holiday_Name`, `Holiday_Date`, `DateTime`) VALUES
(6, 'Edha ', '2022-08-11', '2022-08-02 00:00:00'),
(7, 'Edha ul ', '2022-08-11', '2022-08-02 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` int(255) NOT NULL,
  `no_of_positons` int(11) NOT NULL,
  `job_city` varchar(255) NOT NULL,
  `posting_date` date NOT NULL DEFAULT current_timestamp(),
  `last_date` date NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `logo` mediumblob NOT NULL,
  `skills` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `title`, `description`, `category`, `no_of_positons`, `job_city`, `posting_date`, `last_date`, `status`, `user_id`, `logo`, `skills`, `company_name`) VALUES
(14, 'Android developer', 'I wanna to set job.', 8, 4, 'faisalabad', '2022-08-05', '2022-08-27', 1, 1, 0x313635393732303839312d6c6f676f2e706e67, 'Testing, Unit testing, white box testing and Integration testing.', 'Bloctech');

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `Employee_type` varchar(200) NOT NULL,
  `EmployeeID` int(20) NOT NULL,
  `Starting_At` date NOT NULL,
  `Ending_On` date NOT NULL,
  `Days` varchar(200) NOT NULL,
  `Reason` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `noticeboard`
--

CREATE TABLE `noticeboard` (
  `id` int(20) NOT NULL,
  `title` varchar(200) NOT NULL,
  `notice_desc` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `noticeboard`
--

INSERT INTO `noticeboard` (`id`, `title`, `notice_desc`, `date`) VALUES
(1, 'Today meeting of CEO with client.', 'Today meeting of the CEO with the client.\nToday meeting of the CEO with the client.\nToday meeting of CEO with the client.', '2022-07-30 00:00:00'),
(3, 'Database, OOP.', 'sdfghjkl;asdfghjkl;dfghjklfghj', '2022-08-06 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(20) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `client` int(20) NOT NULL,
  `team_mem` int(20) NOT NULL,
  `start_date` varchar(30) NOT NULL,
  `end_date` varchar(30) NOT NULL,
  `leader` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `File` mediumblob NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `project_name`, `client`, `team_mem`, `start_date`, `end_date`, `leader`, `department`, `description`, `File`, `status`) VALUES
(4, 'Video App', 9, 8, '2022-08-12', '2022-08-19', 'syed bilal', '3', 'hsdjjjjjjjj,hjasjhdshkjsadhjkdshaskjhdsjkashikdsjikasjdsijasdsjsajcdshasicdsjisa', 0x313636303131383234302d6c6f676f2e706e67, 'complete'),
(5, 'Office management', 7, 8, '2022-08-20', '2022-08-18', 'syed bilal', '4', 'fgnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnkjj', 0x313636303133303232362d6c6f676f2e706e67, 'Working');

-- --------------------------------------------------------

--
-- Table structure for table `resignations`
--

CREATE TABLE `resignations` (
  `Id` int(20) NOT NULL,
  `department_id` int(20) NOT NULL,
  `employee_id` int(20) NOT NULL,
  `Notice_date` varchar(20) NOT NULL,
  `Resign_date` varchar(20) NOT NULL,
  `Reason` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(20) NOT NULL,
  `pro_id` int(20) NOT NULL,
  `task_desc` varchar(20) NOT NULL,
  `id` int(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `currentdate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userapplication`
--

CREATE TABLE `userapplication` (
  `id` int(11) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `cname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `instituename` varchar(255) NOT NULL,
  `totalexp` varchar(255) NOT NULL,
  `cgpa` float NOT NULL,
  `degreeyear` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `File` blob NOT NULL,
  `visterid` int(20) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userapplication`
--

INSERT INTO `userapplication` (`id`, `designation`, `cname`, `description`, `degree`, `instituename`, `totalexp`, `cgpa`, `degreeyear`, `subject`, `File`, `visterid`, `status`) VALUES
(2, 'website developer', 'bloctech', 'dfghjkvcbn', '6year', 'jhang', '2years', 3.4, '3', 'database', '', 29, 'Interview');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(200) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `uPassword` varchar(200) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `timeperiod` datetime NOT NULL DEFAULT current_timestamp(),
  `userstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `Email`, `uPassword`, `Phone`, `timeperiod`, `userstatus`) VALUES
(6, 'bilal', 'bilalshahbscs@gmail.com', '151214bscs', '9876543210', '2020-09-21 19:04:47', 0),
(7, 'zain', 'zainsajjad@gmail.com', '$2y$10$f3acNJ/slpOfQvZy.u6OfOM6GOLTTjz3IYUIbMMQuixXjmgeRQ0Ga', '233209229025', '2020-09-21 19:05:43', 0),
(19, 'Hassan', 'bbilalshahbscs@gmail.com', '11111111', '11111111111111112', '2022-07-13 00:00:00', 1),
(20, 'Hassan', 'Hassanshah@gmail.com', '99999999', '923466929743', '2022-07-13 00:00:00', 1),
(23, 'Hassan', 'Hassanali@gmail.com', '151214bscs', '92345678999', '2022-07-14 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `visters`
--

CREATE TABLE `visters` (
  `id` int(20) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(22) NOT NULL,
  `password` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `status` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visters`
--

INSERT INTO `visters` (`id`, `fname`, `lname`, `username`, `email`, `phone`, `password`, `address`, `status`) VALUES
(29, 'bilal', 'bilal haider', 'syed bilal', 'bilalshahbscs@gmail.com', '+923466929743', '151214bscs', 'mohala amna abad, old chiniot road.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `assetId` (`assetId`),
  ADD UNIQUE KEY `assetId_2` (`assetId`),
  ADD UNIQUE KEY `assetId_3` (`assetId`),
  ADD UNIQUE KEY `assetId_4` (`assetId`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`attendance_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Catid`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ClientId` (`ClientId`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Department` (`Department`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `noticeboard`
--
ALTER TABLE `noticeboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `userapplication`
--
ALTER TABLE `userapplication`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `visters`
--
ALTER TABLE `visters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `attendance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `Catid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `noticeboard`
--
ALTER TABLE `noticeboard`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userapplication`
--
ALTER TABLE `userapplication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `visters`
--
ALTER TABLE `visters`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
