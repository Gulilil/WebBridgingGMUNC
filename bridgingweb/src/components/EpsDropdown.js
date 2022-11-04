import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const EpsDropdown = ({ children }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => setOpen(false));
    });

    const ref = useRef(null);

    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref]);

    const buttonStyles = `bg-[#D7a775] ${
        open ? 'lg:bg-[#b3541e] lg:text-white lg:rounded-b' : ''
    } py-7 px-4 lg:hover:bg-[#b3541e] rounded text-brown flex items-center gap-2 lg:hover:text-[#ffffff] `;

    return (
        <div className='relative' ref={ref}>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
                className={buttonStyles}
            >
                {children}
                <MdArrowDropDown size={28} />
            </button>
            <EpsDropdownMenu
                open={open}
                close={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

const EpsDropdownMenu = ({ open, close }) => {
    return (
        <div
            style={{ display: open ? 'block' : 'none' }}
            className='lg:absolute w-full lg:bg-sand-medium lg:text-brown lg:shadow-md rounded-b'
        >
            <ul
                className='text-sm pl-4 lg:pl-0'
                aria-labelledby='dropdownDefault'
            >
                <li>
                    <Link
                        to='/episodes/episode0'
                        className='block text-xl font-semibold px-4 py-4 hover:bg-[#b3541e] hover:text-white '
                        onClick={close}
                    >
                        Episode 0
                    </Link>
                </li>
                <li>
                    <Link
                        to='/episodes/episode1'
                        className='block text-xl font-semibold px-4 py-4 hover:bg-[#b3541e] hover:text-white '
                        onClick={close}
                    >
                        Episode 1
                    </Link>
                </li>
                <li>
                    <Link
                        to='/episodes/episode2'
                        className='block text-xl font-semibold px-4 py-4 hover:bg-[#b3541e] hover:text-white '
                        onClick={close}
                    >
                        Episode 2
                    </Link>
                </li>
                <li>
                    <Link
                        to='/episodes/episode3'
                        className='block text-xl font-semibold px-4 py-4 hover:bg-[#b3541e] hover:text-white '
                        onClick={close}
                    >
                        Episode 3
                    </Link>
                </li>
                <li>
                    <Link
                        to='/episodes/episode4'
                        className='block text-xl font-semibold px-4 py-4 hover:bg-[#b3541e] hover:text-white '
                        onClick={close}
                    >
                        Episode 4
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default EpsDropdown;
