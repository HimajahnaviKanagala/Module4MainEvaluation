create table users(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  password text not null,
  role text not null check (role in ('customer', 'owner', 'driver')),
  created_at timestamp default now()
);