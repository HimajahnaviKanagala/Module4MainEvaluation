create table trips(
  id uuid primary key default uuid_generate_v4(),
  customer_id uuid references users(id) on delete cascade,
  vehicle_id uuid references vehicles(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  location text not null,
  distance_km numeric not null check(distance_km>0),
  passengers int not null check(passengers>0),
  tripCost numeric not null,
  isCompleted boolean default false,
  created_at timestamp default now()
);