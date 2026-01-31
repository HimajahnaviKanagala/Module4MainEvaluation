create table customers(
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text not null unique,
  phone text not null,
  created_at timestamp default now()
);

create table orders(
  id uuid primary key default uuid_generate_v4(),
  product_name text not null,
  quantity integer not null,
  price integer not null,
  order_status text default 'pending',
  customer_id uuid references customers(id) on delete cascade,
  created_at timestamp default now()
);

select * from customers;

select * from orders;