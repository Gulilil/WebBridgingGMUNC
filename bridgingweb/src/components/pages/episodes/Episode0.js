import gmunc_dark from '../../../assets/Logo_dark.png';
import bg from '../../../assets/Hunger Games/Episode0.jpg';

const Episode0 = () =>{
    return (
        <div className='text-brown relative justify mb-1 h-full'>
            <div
                className='h-full'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '4px',
                    backgroundImage: `url("${bg}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(60%) grayscale(0.3)',
                }}
            ></div>
            <div className='flex flex-col mt-8 w-10/12 mx-auto gap-10 absolute top-0 right-0 left-0 bottom-0'>
                <div className=' bg-sand-medium w-full max-w-[720px] mx-auto shadow-lg flex flex-col items-center px-8 pt-6 pb-10 gap-6 rounded-2xl mt-14 lg:mb-6'>
                    <h3 className='font-gbDisplay py-3 px-4 text-4xl bg-[#e2cbb1] shadow-sm'>
                        <p>Episode 0 : </p > 
                        <p>Welcome, Tributes!</p>
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='w-5/6 flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'fw-full flex flex-col py-6 px-5 md:px-8 gap-2 text-base md:text-xl shadow-sm bg-[#e2cbb1] rounded-xl'
                                }
                            >
                                <p className='mx-auto'>
                                Greatest welcome, <b>Ca-GMUNC 2022 Tributes!</b>
                                </p>
                                <p className='mx-auto text-3xl mb-5'>
                                <b>"I Volunteer as Tribute!"</b>
                                </p>
                                <p className='mx-auto'>
                                The Bridging Games is about to begin. 
                                </p>
                                <p className='mx-auto'>
                                You are about to Enter the Forcefield in the first phase:
                                </p>
                                <p className='mx-auto text-2xl font-bold'>  The Hunger Games. </p>
                                <p className='mx-auto'>
                                Prepare your armor, get ready to fight and win the games.
                                </p>
                                <p className='mr-0 ml-auto mt-10'>
                                <b>Best of luck, and may the odds be ever in your favor.</b>
                                </p>
                                <img className="max-w-[200px] mr-3 ml-auto"src={gmunc_dark}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Episode0;