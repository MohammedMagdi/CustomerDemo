USE [master]
GO
/****** Object:  Database [CustomerDemo]    Script Date: 6/9/2018 3:56:58 PM ******/
CREATE DATABASE [CustomerDemo]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Customer', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Customer.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Customer_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Customer_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CustomerDemo] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CustomerDemo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CustomerDemo] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CustomerDemo] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CustomerDemo] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CustomerDemo] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CustomerDemo] SET ARITHABORT OFF 
GO
ALTER DATABASE [CustomerDemo] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CustomerDemo] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CustomerDemo] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CustomerDemo] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CustomerDemo] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CustomerDemo] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CustomerDemo] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CustomerDemo] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CustomerDemo] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CustomerDemo] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CustomerDemo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CustomerDemo] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CustomerDemo] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CustomerDemo] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CustomerDemo] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CustomerDemo] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CustomerDemo] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CustomerDemo] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CustomerDemo] SET  MULTI_USER 
GO
ALTER DATABASE [CustomerDemo] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CustomerDemo] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CustomerDemo] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CustomerDemo] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CustomerDemo] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CustomerDemo] SET QUERY_STORE = OFF
GO
USE [CustomerDemo]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [CustomerDemo]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 6/9/2018 3:56:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[BirthDate] [datetime] NOT NULL,
	[Gender] [bit] NOT NULL,
	[Email] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[Notes] [nvarchar](200) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhoneNumbers]    Script Date: 6/9/2018 3:57:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhoneNumbers](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Number] [bigint] NOT NULL,
	[CustomerID] [int] NOT NULL,
 CONSTRAINT [PK_PhoneNumbers] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PhoneNumbers]  WITH CHECK ADD  CONSTRAINT [FK_PhoneNumbers_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([ID])
GO
ALTER TABLE [dbo].[PhoneNumbers] CHECK CONSTRAINT [FK_PhoneNumbers_Customer]
GO
USE [master]
GO
ALTER DATABASE [CustomerDemo] SET  READ_WRITE 
GO
