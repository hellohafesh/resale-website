import React from 'react';
import Ads from '../Ads/Ads';
import Product from '../Product/Product';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <div className="hero  h-screen" style={{ backgroundImage: `url("https://scontent.xx.fbcdn.net/v/t1.15752-9/316052723_2365696086939031_5444891062665078984_n.jpg?stp=dst-jpg_p296x100&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHkPMR60ZIxa0oOxnnwbF_XlSNQ9AcyL16VI1D0BzIvXjEzLd-X1-8cu_CchQrhumyo5ptTbJfeNfh2iW0_KP2r&_nc_ohc=uNogC-JCBMQAX9tMB8h&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS1daiDB0mtpnMdUQQWOOZEaj_IbX0yqjxgKDhFkDzorQ&oe=63A5E5CF")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl  font-bold">Wellcome To Poridhan</h1>
                        <p className="mb-5 lg:text-xl  font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Product></Product>
            <Ads></Ads>

            <Services></Services>
        </div>
    );
};

export default Home;