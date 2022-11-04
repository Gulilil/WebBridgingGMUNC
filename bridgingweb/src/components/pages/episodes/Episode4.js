import gmunc_dark from '../../../assets/Logo_dark.png';
import bg from '../../../assets/Hunger Games/Episode4_2.jpg';

const Episode4 = () => {
    return (
        <div className='text-brown relative justify mb-1 h-full'>
            <div
                className=' h-full flex justify-center items-center p-7'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '4px',
                    backgroundImage: `url("${bg}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col mt-8 w-10/12 mx-auto gap-10 relative  top-0 right-0 left-0 bottom-0 pb-20'>
                    <div className=' bg-sand-medium w-full max-w-[720px] mx-auto shadow-lg flex flex-col items-center px-8 pt-6 pb-10 gap-6 rounded-xl mt-14 lg:mb-6'>
                        <h3 className='font-gbDisplay text-center py-3 px-4 text-4xl bg-[#e2cbb1] shadow-sm'>
                            <p>Episode 4 : </p>
                            <p>The Bloodbath</p>
                        </h3>
                        <div className='w-full flex flex-col items-center gap-8'>
                            <div className='w-5/6 flex flex-col justify-center md:flex-row gap-8'>
                                <div
                                    className={
                                        'fw-full flex flex-col py-6 px-5 md:px-8 gap-2 text-base md:text-xl shadow-sm bg-[#e2cbb1] rounded-xl'
                                    }
                                >

                                    <p className='mx-auto'>
                                    And yet, we are back to facing the reality. The reality of the Hunger Games, 
                                    districts trying their best to win the Games. This time around, Tributes are to come forward, 
                                    delegate, and represent their countries in their respective councils. 
                                    Tributes are to use their knowledge, speaking, and critical thinking skills wisely. 
                                    Where shall this take place? We'll see.
                                    </p>
                                    <p className='mr-0 ml-auto mt-10'>
                                        <b>
                                            May the odds be ever in your favor.
                                        </b>
                                    </p>
                                    <img
                                        className='max-w-[150px] mr-3 ml-auto mt-3'
                                        src={gmunc_dark}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episode4;
