create table vehicles(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  registration_number text unique not null,
  allowed_passengers int not null check(allowed_passengers>0),
  isAvailable boolean default true,
  driver_id uuid references users(id) on delete set null,
  rate_per_km numeric not null check (rate_per_km>0),
  owner_id uuid references users(id) on delete cascade,
  created_at timestamp default now()
);