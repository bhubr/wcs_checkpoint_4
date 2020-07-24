-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.20-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `criteria`
--

DROP TABLE IF EXISTS `criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criteria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `criteria` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criteria`
--

LOCK TABLES `criteria` WRITE;
/*!40000 ALTER TABLE `criteria` DISABLE KEYS */;
INSERT INTO `criteria` VALUES (1,'Front-end'),(2,'Full-stack'),(3,'Team project'),(4,'Hackathon'),(5,'Project managing');
/*!40000 ALTER TABLE `criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img`
--

DROP TABLE IF EXISTS `img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `img` (
  `id` int NOT NULL AUTO_INCREMENT,
  `src` varchar(200) NOT NULL,
  `project_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_img_project_id_idx` (`project_id`),
  CONSTRAINT `fk_img_project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img`
--

LOCK TABLES `img` WRITE;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
INSERT INTO `img` VALUES (1,'hackathon-travelmemorygame.png',5),(2,'projet2015.png',1),(3,'projet1.png',2),(4,'projet-4.png',3),(5,'projet-5.png',4),(6,'projet-6.png',10),(7,'projet-7.png',7),(8,'mean-todo-inprogress.png',6),(9,'projet-9.png',9),(10,'projet-10.png',8);
/*!40000 ALTER TABLE `img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `create_date` date NOT NULL,
  `description` varchar(500) NOT NULL,
  `site_link` varchar(100) DEFAULT NULL,
  `github_link` varchar(100) DEFAULT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Hansalim','2015-01-01','Renewal the company\'s official website with mobile friendly design','http://hansalim.or.kr/',NULL,'Hansalim',NULL),(2,'Patisserie All around the World','2020-03-15','A fictional blog of a photographer','https://lenasim.github.io/p1-js-PAW/','https://github.com/Lenasim/p1-js-PAW','Wild Code School',NULL),(3,'Web CV','2020-04-01','A web CV and portfolio','https://hailin-sim.netlify.app/','https://github.com/Lenasim/cv_web','',NULL),(4,'Random Night','2020-05-30','A night activities generator which gives a choice of a drink, a movie and a recipe','https://random-night.netlify.app/','https://github.com/Lenasim/Random-night','Wild Code School\n',NULL),(5,'Travel Memory Game','2020-04-30','A pair matching card game that a user in locked down would play in order to travel by seeing webcam videos of a country of his choice','https://travelmemorygame.netlify.app/','https://github.com/Lenasim/hackathon-wcs','Wild Code School\n',NULL),(6,'To do list','2020-05-20','A simple to do list application to practice MEAN stack',NULL,'https://github.com/Lenasim/MEAN_stack_todolist','',NULL),(7,'Auth Boiler plate','2020-06-08','A simple boiler plate app that realises authentification to practice MERN stack/JWT','','https://github.com/Lenasim/MERN-auth-boiler-plate','Pimp Your Waste',NULL),(8,'Movie app','2020-06-11','A simple movie list application to practice Redux',NULL,'https://github.com/Lenasim/react-interview-movieapp','',NULL),(9,'Virtual Waiting Room','2020-06-24','1st winner of Hackathon. A white label app which helps managing waiting time during a tele consultation','','https://github.com/marjowolff/hackarburer---Virtual-Waiting-Room','Doctolib',NULL),(10,'Stock management intranet','2020-07-25','A stock management interface for a upcycling furniture manufactoring company.','','','Pimp Your Waste',NULL);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_criteria`
--

DROP TABLE IF EXISTS `project_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_criteria` (
  `project_id` int NOT NULL,
  `criteria_id` int NOT NULL,
  UNIQUE KEY `index1` (`project_id`,`criteria_id`),
  KEY `fk_project_criteria_2_idx` (`criteria_id`),
  CONSTRAINT `fk_project_criteria_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_project_criteria_2` FOREIGN KEY (`criteria_id`) REFERENCES `criteria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_criteria`
--

LOCK TABLES `project_criteria` WRITE;
/*!40000 ALTER TABLE `project_criteria` DISABLE KEYS */;
INSERT INTO `project_criteria` VALUES (2,1),(3,1),(4,1),(5,1),(8,1),(9,1),(6,2),(7,2),(10,2),(2,3),(4,3),(5,3),(9,3),(10,3),(5,4),(9,4),(1,5);
/*!40000 ALTER TABLE `project_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_techno`
--

DROP TABLE IF EXISTS `project_techno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_techno` (
  `project_id` int NOT NULL,
  `techno_id` int NOT NULL,
  UNIQUE KEY `index1` (`project_id`,`techno_id`),
  KEY `fk_project_techno_techno_id_idx` (`techno_id`),
  CONSTRAINT `fk_project_techno_project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`),
  CONSTRAINT `fk_project_techno_techno_id` FOREIGN KEY (`techno_id`) REFERENCES `techno` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_techno`
--

LOCK TABLES `project_techno` WRITE;
/*!40000 ALTER TABLE `project_techno` DISABLE KEYS */;
INSERT INTO `project_techno` VALUES (3,1),(4,1),(5,1),(7,1),(8,1),(9,1),(10,1),(6,2),(7,2),(10,2),(2,3),(3,3),(4,3),(5,3),(6,3),(7,3),(8,3),(9,3),(10,3),(2,4),(3,4),(4,4),(5,4),(6,4),(7,4),(8,4),(9,4),(10,4),(4,5),(10,5),(3,6),(10,7),(6,8),(2,9),(2,10),(2,11),(2,12),(3,12),(4,13),(5,13),(8,13),(6,14),(6,15),(10,15),(7,16),(10,16),(8,17);
/*!40000 ALTER TABLE `project_techno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `techno`
--

DROP TABLE IF EXISTS `techno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `techno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `techno` varchar(100) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `techno`
--

LOCK TABLES `techno` WRITE;
/*!40000 ALTER TABLE `techno` DISABLE KEYS */;
INSERT INTO `techno` VALUES (1,'React','fab fa-react'),(2,'Node.JS','fab fa-node'),(3,'Git','fab fa-git-alt'),(4,'Github','fab fa-github'),(5,'Scrum',NULL),(6,'Bootstrap','fab fa-bootstrap'),(7,'MySQL','fas fa-database'),(8,'MongoDB','fas fa-database'),(9,'Html','fab fa-html5'),(10,'Css','fab fa-css3-alt'),(11,'Vanilla JS','fab fa-js-square'),(12,'JQuery',NULL),(13,'Web API',''),(14,'Angular','fab fa-angular'),(15,'Express',NULL),(16,'Material UI',NULL),(17,'Redux',NULL);
/*!40000 ALTER TABLE `techno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-24 15:14:13
