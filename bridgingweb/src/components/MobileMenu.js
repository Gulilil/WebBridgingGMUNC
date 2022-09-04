import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileMenu = ({ open, closeMenu }) => {
    return (
        <div className='lg:hidden text-brown text-xl'>
            <div
                onTouchStart={closeMenu}
                style={{
                    opacity: open ? '0.3' : '0',
                    zIndex: open ? '9' : '0',
                }}
                className='fixed top-0 left-0 opacity-0 bg-black w-screen h-screen transition transform ease-in-out duration-700'
            ></div>
            <div
                style={{ transform: open ? 'translateX(260px)' : 'none' }}
                className='fixed z-20 w-[260px] h-screen bg-sand-medium py-[100px] px-8 left-[-260px] transition ease-in-out duration-700 transform'
            >
                <MdClose
                    width={14}
                    height={14}
                    onClick={() => closeMenu()}
                    className='absolute top-6 right-6'
                />
                <div className='flex flex-col gap-10 my-7'>
                    <Link to='/'>
                        <button className='bg-[#D7a775] text-brown '>
                            <p className='text-2xl font-bold '>Home</p>
                        </button>
                    </Link>

                    <Link to='/episodes'>
                        <button className='bg-[#D7a775] text-brown '>
                            <p className='text-2xl font-bold '>Episodes</p>
                        </button>
                    </Link>

                    <Link to='/quests'>
                        <button className='bg-[#D7a775] rounded text-brown '>
                            <p className='text-2xl font-bold '>Quests</p>
                        </button>
                    </Link>

                    <Link to='/committee'>
                        <button className='bg-[#D7a775] rounded text-brown '>
                            <p className='text-2xl font-bold'>Committee</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
