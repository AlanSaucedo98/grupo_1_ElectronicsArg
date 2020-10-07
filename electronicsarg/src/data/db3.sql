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
-- Table structure for table `no puedo eliminar essta tablaaa`
--

DROP TABLE IF EXISTS `no puedo eliminar essta tablaaa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `no puedo eliminar essta tablaaa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(95) NOT NULL,
  `precio` int(11) NOT NULL DEFAULT '0',
  `idioma` varchar(45) DEFAULT NULL,
  `desarrollador` varchar(45) NOT NULL,
  `imagen_portada` varchar(75) NOT NULL,
  `imagen1` varchar(75) NOT NULL,
  `imagen2` varchar(75) NOT NULL,
  `imagen3` varchar(75) NOT NULL,
  `imagen4` varchar(75) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_idx` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `no puedo eliminar essta tablaaa`
--

LOCK TABLES `no puedo eliminar essta tablaaa` WRITE;
/*!40000 ALTER TABLE `no puedo eliminar essta tablaaa` DISABLE KEYS */;
INSERT INTO `no puedo eliminar essta tablaaa` VALUES (1,'Residient Evil',2000,'español','alan','image1599241527769.jpg','re8.jfif','re8-1.jfif','re8-2.jpg','re8-3.jfif',NULL,NULL,NULL);
/*!40000 ALTER TABLE `no puedo eliminar essta tablaaa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(95) NOT NULL,
  `precio` int(11) NOT NULL DEFAULT '0',
  `discount` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `imagen_portada` varchar(75) NOT NULL,
  `trailer` varchar(100) NOT NULL,
  `labels` varchar(45) NOT NULL,
  `imagen1` varchar(75) NOT NULL,
  `imagen2` varchar(75) NOT NULL,
  `imagen3` varchar(75) NOT NULL,
  `imagen4` varchar(75) NOT NULL,
  `procesador` varchar(45) NOT NULL,
  `so` varchar(45) NOT NULL,
  `memoria` varchar(45) NOT NULL,
  `idioma` varchar(45) NOT NULL,
  `pesogb` varchar(45) NOT NULL,
  `desarrollador` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `graficos` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Prueba',123,'1','asdgasd','image1599241527769.jpg','https://www.youtube.com/embed/mIehtjVAuHU?start=1','Accion,Terror','re8.jfif','re8-1.jfif','re8-2.jpg','re8-3.jfif','Intel Core i5-4590 or AMD FX 8350 or better','Windows 7/8.1/10 (64-bit versions)','8 GB de RAM','español','17 GB de espacio disponible','UnDesarrolladorGenial',NULL,NULL,NULL,'');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Alan','Saucedo','saucedodaniel86@hotmail.com','$2b$10$Iq3ehO6fQAEarhXnL9OT1.hliC5uJdHH14v21sLexiQ3mxXBX4DVq',NULL,'0000-00-00 00:00:00','default.png',NULL,'2020-10-02 20:17:31','2020-10-02 20:17:31','asdasd'),(3,'Alan','Saucedo','saucedodaniel96@hotmail.com','$2b$10$V4EdmfFcOJSvzHscE91UhuF.ruwcurDVxw72Fmqr1VUTydLugoZb6',NULL,'0000-00-00 00:00:00','default.png',NULL,'2020-10-02 20:18:04','2020-10-02 20:18:04','asdas'),(4,'Alan','Saucedo','dodaniel666@hotmail.com','$2b$10$pvvWbJM76E/HQGLqSwVDMe91u.omASovqUX/nfwn0t24YMAytk78i',NULL,'1111-11-11 00:00:00','default.png',NULL,'2020-10-03 02:18:21','2020-10-03 02:18:21','zzzzzzzzzzzzzz'),(5,'Alan','Saucedo','saucedodaniel76@hotmail.com','$2b$10$8Is.xk0Me9ncI/USJiNugOj8/k3WS/B28HlkLEU7c4lJYCAwgV/mq',NULL,'1231-12-12 00:00:00','default.png',NULL,'2020-10-04 02:15:38','2020-10-04 02:15:38','usuarioTOTAL');
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

-- Dump completed on 2020-10-06 22:33:49
