-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2020 at 04:56 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_gorry`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `id_loc` int(11) DEFAULT NULL,
  `detail_loc` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `startTime`, `endTime`, `id_loc`, `detail_loc`, `createdAt`, `updatedAt`) VALUES
(1, 'Liga Dunia', '2020-01-17 00:00:00', '2020-01-18 00:00:00', 1, 'Sabang', '2020-01-16 10:21:54', '2020-01-16 10:21:54'),
(2, 'Konser Taylor Swift', '2020-01-17 00:00:00', '2020-01-18 00:00:00', 2, 'BSD Tangsel', '2020-01-16 10:23:08', '2020-01-16 10:23:08'),
(3, 'Meet & Greet with Afgan', '2020-01-17 00:00:00', '2020-01-18 00:00:00', 2, 'BSD Tangsel', '2020-01-16 10:24:03', '2020-01-16 10:24:03'),
(4, 'Concert BCL', '2020-01-18 00:00:00', '2020-01-19 08:21:20', 2, 'Bintaro', '2020-01-18 08:21:20', '2020-01-18 08:21:20'),
(5, 'Concert Shawn Mendes', '2020-01-18 00:00:00', '2020-01-19 08:21:21', 2, 'Serang', '2020-01-18 08:21:21', '2020-01-18 08:21:21');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `location`, `createdAt`, `updatedAt`) VALUES
(1, 'Aceh', '2020-01-16 06:42:00', '2020-01-16 06:42:00'),
(2, 'Banten', '2020-01-16 06:42:55', '2020-01-16 06:42:55'),
(3, 'Bengkulu', '2020-01-16 06:43:15', '2020-01-16 06:43:15'),
(4, 'Gorontalo', '2020-01-16 06:43:27', '2020-01-16 06:43:27'),
(5, 'Jakarta', '2020-01-16 06:45:23', '2020-01-16 06:45:23'),
(6, 'Jambi', '2020-01-16 06:45:32', '2020-01-16 06:45:32'),
(7, 'Jawa Barat', '2020-01-16 06:45:42', '2020-01-16 06:45:42'),
(8, 'Jawa Tengah', '2020-01-16 06:46:00', '2020-01-16 06:46:00'),
(9, 'Jawa Timur', '2020-01-16 06:46:07', '2020-01-16 06:46:07');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `totalPrice` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `ticket_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `name`, `nik`, `quantity`, `totalPrice`, `status`, `ticket_id`, `createdAt`, `updatedAt`) VALUES
(21, 'Diana', '3273021003600001', 4, 3200000, 'pending', 1, '2020-01-18 16:35:08', '2020-01-18 16:35:08'),
(22, 'Ahmad Hidayat', '3277091003600001', 2, 1600000, 'pending', 1, '2020-01-18 16:35:57', '2020-01-18 16:35:57'),
(23, 'Liliana Hanum', '3277091002100001', 3, 2400000, 'pending', 1, '2020-01-18 16:44:49', '2020-01-18 16:44:49'),
(24, 'Ali Muda', '3277091211100001', 2, 1400000, 'pending', 2, '2020-01-18 16:45:27', '2020-01-18 16:45:27'),
(25, 'Atha Septina', '3277091219100001', 3, 1800000, 'pending', 3, '2020-01-18 16:46:09', '2020-01-18 16:46:09'),
(26, 'Sepriadi', '327709121990001', 3, 1800000, 'pending', 3, '2020-01-18 16:47:04', '2020-01-18 16:47:04');

--
-- Triggers `purchases`
--
DELIMITER $$
CREATE TRIGGER `penjualan_ticket` AFTER INSERT ON `purchases` FOR EACH ROW BEGIN
     UPDATE tickets set stock=stock-NEW.quantity
     WHERE id=NEW.ticket_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200115093536-create-events.js'),
('20200115093719-create-locations.js'),
('20200115093855-create-purchase.js'),
('20200115094252-create-tickets.js'),
('20200115105250-create-purchases.js'),
('20200116100452-create-events.js'),
('20200116100802-create-tickets.js'),
('20200117081316-create-purchases.js');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quota` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `id_event` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `type`, `price`, `quota`, `stock`, `id_event`, `createdAt`, `updatedAt`) VALUES
(1, 'Red Zone', 800000, 50, 41, 1, '2020-01-16 22:10:15', '2020-01-16 22:10:15'),
(2, 'Blue Zone', 700000, 50, 48, 1, '2020-01-16 22:10:46', '2020-01-16 22:10:46'),
(3, 'Yellow Zone', 600000, 50, 44, 1, '2020-01-16 22:11:13', '2020-01-16 22:11:13'),
(4, 'Yellow Zone', 1000000, 50, 50, 2, '2020-01-16 22:12:42', '2020-01-16 22:12:42'),
(5, 'Blue Zone', 2000000, 50, 50, 2, '2020-01-16 22:13:03', '2020-01-16 22:13:03'),
(6, 'Red Zone', 3000000, 50, 50, 2, '2020-01-16 22:13:25', '2020-01-16 22:13:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
