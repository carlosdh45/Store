USE gestionMercadito
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'gestionMercadito'
)
CREATE DATABASE gestionMercadito
GO

-- Create a new table called 'ordenProductos' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.ordenProductos', 'U') IS NOT NULL
DROP TABLE dbo.ordenProductos
GO
-- Create the table in the specified schema
CREATE TABLE dbo.ordenProductos
(
  Id [INT] IDENTITY(1,1) NOT NULL, -- primary key column
  ordenId [NVARCHAR](50) NOT NULL,
  productoId [NVARCHAR](50) NOT NULL,
  cantidad [INT] NOT NULL,
  costo [FLOAT] NOT NULL,
  precioSugerido [FLOAT](4) NOT NULL,
  CONSTRAINT pk_ID PRIMARY KEY(Id)
  -- specify more columns here
);
GO


CREATE TABLE dbo.inventarioExistencias
(
  Id [INT] IDENTITY(1,1) NOT NULL, -- primary key column
  nombre [NVARCHAR](255) NOT NULL,
  observacion [NVARCHAR](255) NOT NULL,
  CONSTRAINT pkInventario PRIMARY KEY(Id)
  -- specify more columns here
);
GO


CREATE TABLE [dbo].[OrdenProveedores](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[proveedorId] [int] NULL,
	[fechaOrden] [date] NULL,
	[fechaEntrega] [date] NULL,
	[estado] [bit] NULL,
	[cobroAdicional] [float] NULL,
 CONSTRAINT [PK_OrdenProveedores] PRIMARY KEY(Id)
);


-- Create the table in the specified schema
CREATE TABLE dbo.proveedores
(
    Id INT IDENTITY(1,1) NOT NULL , -- primary key column
    Nombre [NVARCHAR](50) NOT NULL,
    Producto [NVARCHAR](50) NOT NULL,
    Pago INT NOT NULL,
    CONSTRAINT pkID PRIMARY KEY (Id)
    -- specify more columns here
);
GO


IF OBJECT_ID('dbo.ventaDetalle', 'U') IS NOT NULL
DROP TABLE dbo.ventaDetalle
GO
CREATE TABLE dbo.ventaDetalle
(
    Id [INT] IDENTITY(1,1) NOT NULL,
    ventaId [INT] NOT NULL,
    productoId [INT] NOT NULL,
    cantidad [INT] NOT NULL,
    CONSTRAINT pk_proveedorId PRIMARY KEY(Id)
);
GO

CREATE TABLE dbo.areaCredito
(
    IdCliente [INT] IDENTITY(1,1) NOT NULL, -- primary key column
    Cantidad [INT] NOT NULL,
    Fecha [DATE] NOT NULL,
    CreditoAPB [INT] NOT NULL,
    CONSTRAINT pk_IdCliente PRIMARY KEY(IdCliente)
    -- specify more columns here
);
GO

IF OBJECT_ID('dbo.Cliente', 'U') IS NOT NULL
DROP TABLE dbo.Cliente
GO

CREATE TABLE dbo.Cliente
(
    id INT NOT NULL IDENTITY(1,1),
    Nombre [NVARCHAR](50) NOT NULL,
    Direccion [NVARCHAR](50) NOT NULL,
    Producto [NVARCHAR](50) NOT NULL,
    Telefono INT NOT NULL,
    Saldo INT NOT NULL,
    CONSTRAINT pkCliente PRIMARY KEY(id)
);
GO


CREATE TABLE dbo.venta
(
    id [INT] IDENTITY(1,1) NOT NULL,
    idCliente [INT] NOT NULL,
    fecha [DATE] NOT NULL,
    CONSTRAINT pkFactura PRIMARY KEY(id),
    );
GO


SELECT * FROM dbo.ordenProductos
GO

SELECT * FROM dbo.OrdenProveedores
GO

SELECT * FROM dbo.proveedores
GO

SELECT * FROM dbo.inventarioExistencias
GO

SELECT * FROM dbo.Cliente
GO

SELECT * FROM dbo.areaCredito
GO

SELECT * FROM dbo.venta
GO

SELECT * FROM dbo.ventaDetalle
GO
