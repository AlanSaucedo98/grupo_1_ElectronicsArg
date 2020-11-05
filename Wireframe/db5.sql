-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(95) CHARACTER SET utf8 NOT NULL,
  `precio` int(11) NOT NULL DEFAULT '0',
  `discount` varchar(45) CHARACTER SET utf8 NOT NULL,
  `description` varchar(1500) CHARACTER SET utf8 NOT NULL,
  `imagen_portada` varchar(75) CHARACTER SET utf8 NOT NULL,
  `trailer` varchar(100) CHARACTER SET utf8 NOT NULL,
  `labels` varchar(45) CHARACTER SET utf8 NOT NULL,
  `imagen1` varchar(75) CHARACTER SET utf8 NOT NULL,
  `imagen2` varchar(75) CHARACTER SET utf8 NOT NULL,
  `imagen3` varchar(75) CHARACTER SET utf8 NOT NULL,
  `imagen4` varchar(75) CHARACTER SET utf8 NOT NULL,
  `procesador` varchar(95) CHARACTER SET utf8 NOT NULL,
  `so` varchar(45) CHARACTER SET utf8 NOT NULL,
  `memoria` varchar(45) CHARACTER SET utf8 NOT NULL,
  `idioma` varchar(45) CHARACTER SET utf8 NOT NULL,
  `pesogb` varchar(45) CHARACTER SET utf8 NOT NULL,
  `desarrollador` varchar(45) CHARACTER SET utf8 NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `graficos` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_idx` (`id_categoria`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (21,'Counter-Strike: Global Offensive',500,'10','Counter-Strike: Global Offensive (CS: GO) ampliará la jugabilidad de acción por equipos que fue pionera en su lanzamiento hace 12 años. CS: GO incluirá nuevos mapas, personajes y armas y ofrecerá versiones actualizadas del contenido clásico de CS (de_dust2, etc.).\r\n','image1604585474707.jpg','https://www.youtube.com/embed/edYCtaNueQY','Accion','image1604585474707.jpg','imagedet11604585474707.jpg','imagedet21604585474707.jpg','imagedet31604585474708.jpg','Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better','Windows','2 GB de RAM','Español','15 GB de espacio disponible','Valve','2020-11-05 14:11:14','2020-11-05 14:11:14',NULL,'Video card must be 256 MB'),(22,'Metro Exodus',1500,'0','Un cuarto de siglo después de que la guerra nuclear devastara la tierra, unos pocos miles de supervivientes se aferran a la vida bajo las ruinas de Moscú, en los túneles del metro.\r\n\r\nHan sufrido intoxicaciones, luchado contra bestias mutantes y horrores paranormales y pasado el terror de la guerra civil.\r\n\r\nAhora, en el papel de Artyom, debes escapar del metro y liderar una banda de comandos espartanos en un viaje increíble por todo el continente en la Rusia postapocalíptica para empezar una vida nueva en el este.\r\n\r\nMetro Exodus es un juego de disparos en primera persona centrado en la narrativa y desarrollado por 4A Games que combina el combate letal y el sigilo con la exploración, el terror y la supervivencia en uno de los mundos más inmersivos de la historia de los juegos.\r\n\r\nExplora las estepas rusas en niveles no lineales enormes y sigue una narrativa apasionante que abarca un año entero desde primavera, verano y otoño hasta el pleno invierno nuclear.','image1604587838025.jpg','https://www.youtube.com/embed/gTNrBp_Ckio','Accion','image1604587838025.jpg','imagedet11604587838032.jpg','imagedet21604587838033.jpg','imagedet31604587838033.jpg','Intel Core i5-4440 or equivalent','Windows','8 GB de RAM','Español','59 GB de espacio disponible','4A Games','2020-11-05 14:50:38','2020-11-05 14:50:38',NULL,'GeForce GTX 670 / GeForce GTX 1050 / AMD Radeon HD 7870'),(23,'Resident Evil 2 Remake',2000,'','Vuelve Resident Evil 2, la obra maestra que definió un género, completamente renovado para una narrativa aún más intensa. Con el motor gráfico RE propietario de Capcom, Resident Evil 2 supone un nuevo enfoque de esta saga clásica del survival horror, con gráficos espectacularmente realistas, estremecedor sonido inmersivo, una nueva vista sobre el hombro y nuevos controles, además de modos de juego del título original.\r\n\r\nResident Evil 2 supone la vuelta de la acción clásica, la exploración tensa y las mecánicas de resolución de rompecabezas que definieron la serie. Los jugadores acompañarán al policía novato Leon S. Kennedy y a la estudiante universitaria Claire Redfield, que se ven atrapados en una apocalíptica epidemia en Racoon City que ha transformado a su población en zombis mortíferos. Ambos personajes tienen sus propias campañas jugables, lo que permite a los jugadores ver la historia desde dos puntos de vista. El destino de ambos personajes, favoritos de los fans, está en manos de los jugadores, que deberán hacerlos colaborar y llegar hasta el fondo de lo que se esconde tras este terrorífico ataque a la ciudad. ¿Lograrán sobrevivir?','image1604588287310.jpg','https://www.youtube.com/embed/AA4fRUp3Ono','Otros','image1604588287310.jpg','imagedet11604588287310.jpg','imagedet21604588287311.jpg','imagedet31604588287312.jpg','Intel® Core™ i5-4460 or AMD','Windows','8 GB de RAM','Español',' 26 GB de espacio disponible','CAPCOM','2020-11-05 14:56:04','2020-11-05 14:58:07',NULL,'NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `nacimiento` datetime NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (6,'Alan','Saucedo','saucedodaniel76@hotmail.com','$2b$10$9hlD2nBn7dC317D1X2XqaO4m2pdRDSqZyO88MMT0WdXJYolq9NYGG',NULL,'1111-11-11 00:00:00','default.png',NULL,'2020-10-29 01:56:07','2020-10-29 01:56:07','usuarioTOTAL'),(7,'Alan','saucedo','cronsococ99@gmail.com','$2b$10$/q9H8nLNzvEu9qHk3In.JuYDZrPJu3Ehq4bT01mHISHs1quV8PuHG',NULL,'1111-11-11 00:00:00','avatar1604246585783.jpeg',NULL,'2020-11-01 16:03:05','2020-11-01 16:03:05','Cronos552');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_idx` (`id_usuario`),
  KEY `id_producto_idx` (`id_producto`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `no puedo eliminar essta tablaaa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-05 12:38:51
