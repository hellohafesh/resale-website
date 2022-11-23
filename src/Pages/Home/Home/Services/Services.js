import React from 'react';


const Services = () => {
    const ServicesCard = [
        {
            id: '1',
            name: 'Best Shopping',
            img: 'https://i.ibb.co/YTQMD0c/1.png',
            des: 'Its is a platform on which you can buy and sell old Dress!',
        },
        {
            id: '2',
            name: 'Female Dress',
            img: 'https://i.ibb.co/kJ4spLY/2.png',
            des: 'Its is a platform on which you can buy and sell old Dress!',
        },
        {
            id: '3',
            name: 'Male Dress',
            img: 'https://i.ibb.co/xLNhCJX/3.png',
            des: 'Its is a platform on which you can buy and sell old Dress!',
        },
        {
            id: '4',
            name: 'Make Money',
            img: 'https://i.ibb.co/8YDBzDr/4.png',
            des: 'Its is a platform on which you can buy and sell old Dress!',
        },
        {
            id: '5',
            name: 'Best With Location',
            img: 'https://i.ibb.co/30D97z3/5.png',
            des: 'Its is a platform on which you can buy and sell old Dress!',
        },
        {
            id: '6',
            name: 'Best Shopping',
            img: 'https://i.ibb.co/fqDyB96/6.png',
            des: 'Do you have some cloths to sell Post your first ad and start making money!!',
        },
    ]
    return (
        <div className='mt-24'>
            <h3 className='text-4xl font-bold text-center mt-8 '>What You Got Here</h3>
            <p className='text-center  mt-8 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rem, optio sunt commodi id dolorum necessitatibus suscipit dignissimos quibusdam maiores!</p>




            <div className=" grid mt-16 gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                {
                    ServicesCard.map(service =>
                        <div key={service.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img className='h-40 w-40' src={service.img} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.des}</p>

                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Services;