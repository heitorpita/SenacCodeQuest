
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'seller',
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT chk_role CHECK (role IN ('admin', 'seller', 'cliente'))
);


CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER UNIQUE,
  name VARCHAR(100) NOT NULL,
  document VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT fk_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES users(id)
    ON DELETE SET NULL
);


CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year INTEGER NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'disponivel',
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT chk_year CHECK (year >= 1990),
  CONSTRAINT chk_price CHECK (price > 0),
  CONSTRAINT chk_status CHECK (status IN ('disponivel', 'reservado', 'vendido'))
);


CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  vehicle_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  seller_id INTEGER NOT NULL,
  final_price NUMERIC(12,2) NOT NULL,
  payment_method VARCHAR(50),
  status VARCHAR(20) NOT NULL DEFAULT 'em_andamento',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT fk_vehicle FOREIGN KEY (vehicle_id) REFERENCES vehicles(id),
  CONSTRAINT fk_client FOREIGN KEY (client_id) REFERENCES clients(id),
  CONSTRAINT fk_seller FOREIGN KEY (seller_id) REFERENCES users(id),
  CONSTRAINT chk_sale_status CHECK (status IN ('em_andamento', 'concluida', 'cancelada')),
  CONSTRAINT chk_final_price CHECK (final_price > 0)
);


CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  sale_id INTEGER NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT fk_sale FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
  CONSTRAINT chk_amount CHECK (amount > 0)
);


CREATE TABLE audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  action VARCHAR(100) NOT NULL,
  resource VARCHAR(50) NOT NULL,
  resource_id INTEGER,
  payload JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);


CREATE INDEX idx_vehicles_status ON vehicles(status);
CREATE INDEX idx_sales_status ON sales(status);
CREATE INDEX idx_sales_client ON sales(client_id);
CREATE INDEX idx_sales_seller ON sales(seller_id);
CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_resource ON audit_logs(resource, resource_id);
CREATE INDEX idx_clients_usuario ON clients(usuario_id);



INSERT INTO users (name, email, password_hash, role) VALUES 
('Administrador', 'admin@mobilityx.com', '$2b$10$k1HqopU64WDI.IW94Q1MSe.ETr0sPhmnblD/3YXrhrHjOCQ7EbNri', 'admin');

INSERT INTO users (name, email, password_hash, role) VALUES 
('João Vendedor', 'vendedor@mobilityx.com', '$2b$10$j/xiurYja3nMKjyze8fr7uDCNFwQU6sB4N/TgWmcBzs6OSnAVxyR2', 'seller');

INSERT INTO vehicles (brand, model, year, price, status) VALUES 
('Toyota', 'Corolla', 2023, 150000.00, 'disponivel'),
('Honda', 'Civic', 2022, 140000.00, 'disponivel'),
('Volkswagen', 'Golf', 2021, 120000.00, 'disponivel'),
('Ford', 'Mustang', 2023, 350000.00, 'disponivel'),
('Chevrolet', 'Onix', 2024, 85000.00, 'disponivel');

INSERT INTO clients (name, document, email, phone) VALUES 
('Maria Cliente', '12345678901', 'maria@email.com', '11999999999');

UPDATE users 
SET password_hash = '$2b$10$k1HqopU64WDI.IW94Q1MSe.ETr0sPhmnblD/3YXrhrHjOCQ7EbNri' 
WHERE email = 'admin@mobilityx.com';

UPDATE users 
SET password_hash = '$2b$10$j/xiurYja3nMKjyze8fr7uDCNFwQU6sB4N/TgWmcBzs6OSnAVxyR2' 
WHERE email = 'vendedor@mobilityx.com';