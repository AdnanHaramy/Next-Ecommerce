import React from 'react';
import Link from 'next/link'
const HeroBanner = () => {
    return (
        <div className="hero-banner-container" >
            <div>
                <p className="beats-solo"> SMALL TEXT </p>
                <h3> Mid Text</h3>
                <img className="hero-banner-image" src="" alt="headphones" />
                <div>
                    <Link href="/product/id" >
                        <button type="button" >Button Text</button>
                    </Link>
                    <div className="desc" >
                        <h5>Description</h5>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroBanner;