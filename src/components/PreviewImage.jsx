import React from 'react'
import Loading from './Loading'

function PreviewImage(props) {
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
            {/* orignal image */}
            <div className=" bg-white shadow-lg rounded-xl overflow-hidden ">
                <h2 className='text-xl text-white font-semibold text-center bg-gray-800 py-2' >Orignal Image</h2>
                {props.uploaded ?
                    <img src={props.uploaded}
                        alt=""
                        className='w-full h-80 object-contain  ' />
                    :

                    <div className='h-80 flex items-center justify-center bg-gray-200 ' >No Image Selected</div>
                }
            </div>
            {/* enhanced image */}

            <div className=" bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className='text-xl text-white font-semibold text-center bg-green-500 py-2' >Enhanced Image</h2>

                {props.enhanced && !props.loading ? (
                    <div className="relative">
                        <img
                            src={props.enhanced}
                            alt=""
                            className='w-full object-contain h-80' />
                        <div className="absolute text-center mt-2 right-4 bottom-4 z-40">
                            <a
                                href={props.enhanced}
                                download="enhanced-image.jpg"
                                className='inline-block items-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 '
                            >

                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>



                            </a>
                        </div>
                    </div>
                ) : props.loading ? (
                    <Loading />
                ) : (
                    <div className='flex items-center justify-center h-80 bg-gray-200' >No Enhanced Image</div>
                )}


            </div>
        </div>
    )
}

export default PreviewImage