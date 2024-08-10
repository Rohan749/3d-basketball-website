import React from 'react'

const Download = () => {
    return (
        <div className='h-[100vh] flex items-center justify-center text-center'>
            <div className='w-[45rem]'>
                <div>START PLAYING NOW</div>
                <div className='header pb-10'>DOWNLOAD OUR GAME</div>
                <div>
                    <div>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/xnZu7PODF10&t=2s" // Replace with your video URL
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Download