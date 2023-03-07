CREATE table receiver (
    ID serial primary key, 
    NAME varchar (50) not null,
    ADDRESS varchar (100)
)

CREATE TABLE products (
    ID serial primary key,
    NAME varchar (50) not null  
)

CREATE table basket ( 
    ID_receiver int references receiver(id),
    ID_product int references products(id),
    quantity smallint not null
)