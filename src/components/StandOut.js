import React from 'react'
import standoutMobile from '../images/mobile/image-stand-out.jpg'
import standoutDesktop from '../images/desktop/image-stand-out.jpg'

const StandOut = () => {
    return (
        <>
            <section>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={standoutDesktop} />
                        <img src={standoutMobile} alt='' />
                    </picture>
                </div>

                <div className='p-5 text-center'>
                    <h2 className='text-2xl my-5'>Stand out to the right audience</h2>
                    <p className='mb-5'>We are a full-service creative agency specializing
                        in helping brands grow fast.
                        Engage your clients through compelling visuals that
                        do most of the marketing for you.
                    </p>
                    <button className='btn-standout'>Learn More</button>
                </div>
            </section>
        </>
    )
}

export default StandOut
