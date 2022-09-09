import gmunc_dark from '../../../assets/Logo_dark.png';
import mun_bg from '../../../assets/mun_bg.jpg';

const Quest0 = () => {
    return (
        <div className='text-brown'>
            <div
                className='h-[600px] flex justify-center items-center'
                style={{
                    backgroundImage: `url("${mun_bg}")`,
                }}
            >
                <div className='bg-sand-light w-11/12 lg:min-w-[35%] lg:w-auto lg:px-16 py-14 flex-col items-center drop-shadow-2xl'>
                    <img
                        class='w-[200px] mx-auto mb-5'
                        src={gmunc_dark}
                        alt=''
                    />
                    <h1 class='text-4xl md:text-5xl lg:text-7xl text-center font-gbDisplay mt-5'>
                        {' '}
                        Quest 0
                    </h1>
                </div>
            </div>
            <div className='flex flex-col mt-8 w-11/12 mx-auto gap-10'>
                <div className='bg-[#C18D56] w-full max-w-[1024px] mx-auto shadow-lg flex flex-col items-center px-8 pt-6 pb-10 gap-6 rounded mt-14 lg:mb-6'>
                    <h3 className='font-gbDisplay py-3 px-4 text-4xl bg-sand-medium shadow-sm'>
                        Resume
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'w-full flex flex-col py-6 px-5 md:px-8 gap-4 text-base md:text-xl shadow-sm bg-sand-medium rounded-sm'
                                }
                            >
                                <p>
                                    Make a resume summarising this day using the
                                    following format:{' '}
                                    <a
                                        href='https://www.bit.ly/TemplateResumeBridging2022'
                                        rel='noreferrer'
                                        target='_blank'
                                        className='inline font-semibold hover:underline'
                                    >
                                        bit.ly/TemplateResumeBridging2022
                                    </a>
                                </p>
                                <ol className='list-decimal ml-4'>
                                    <li>
                                        To be able to obtain this format, go to
                                        File, click Make a Copy, then select
                                        Entire Presentation. Ensure that the
                                        copy is made in your own drive location.
                                    </li>
                                    <br />
                                    <li>
                                        The naming format will be{' '}
                                        <b>Full Name_NIM_ResumeDay0</b>, the
                                        file should be submitted in pdf format.
                                    </li>
                                    <br />
                                    <li>
                                        The resume must contain:
                                        <ol className='list-[lower-roman] ml-5'>
                                            <li className='mb-2'>
                                                Ganesha MUN Club vision &
                                                mission, organisational
                                                structure, activities, and other
                                                things you’ve learned regarding
                                                the club.
                                            </li>
                                            <li className='mb-2'>
                                                Summary of what you’ve learned
                                                regarding Model United Nations,
                                                such as but not limited to:
                                                history and purpose of MUN, MUN
                                                rules of procedure, MUN lingo,
                                                etc.
                                            </li>
                                            <li className='mb-2'>
                                                Interesting facts about the
                                                United Nations, the United
                                                Nations’ councils, Model United
                                                Nations, or fun
                                                historical/political facts.
                                                Minimum is 1 fact.
                                            </li>
                                            <li className='mb-2'>
                                                How, in your personal opinion,
                                                will the bridging process
                                                benefit you.
                                            </li>
                                        </ol>
                                    </li>
                                    <br />
                                    <li>
                                        The deadline for this task will be on
                                        Tuesday, 13th September 2022, 23:59.
                                    </li>
                                    <br />
                                    <li>
                                        If there are any questions, ask them in
                                        the Ca-GMUNC bridging line group.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <SubmitButton>
                        <a
                            href='https://forms.gle/9azL5j2CHYqoGbRD7'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Submit Assignment
                        </a>
                    </SubmitButton>
                </div>
            </div>
            <div className='flex flex-col mt-8 w-11/12 mx-auto gap-10'>
                <div className='bg-[#C18D56] w-full max-w-[1024px] mx-auto shadow-lg flex flex-col items-center px-8 pt-6 pb-10 gap-6 rounded mb-10'>
                    <h3 className='font-gbDisplay py-3 px-4 text-4xl bg-sand-medium shadow-sm'>
                        Resume
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'w-full flex flex-col py-6 px-5 md:px-8 gap-4 text-base md:text-xl shadow-sm bg-sand-medium rounded-sm'
                                }
                            >
                                <p>
                                    Make a resume summarising this day using the
                                    following format:{' '}
                                    <a
                                        href='https://www.bit.ly/TemplateResumeBridging2022'
                                        rel='noreferrer'
                                        target='_blank'
                                        className='inline font-semibold hover:underline'
                                    >
                                        bit.ly/TemplateResumeBridging2022
                                    </a>
                                </p>
                                <ol className='list-decimal ml-4'>
                                    <li>
                                        To be able to obtain this format, go to
                                        File, click Make a Copy, then select
                                        Entire Presentation. Ensure that the
                                        copy is made in your own drive location.
                                    </li>
                                    <br />
                                    <li>
                                        The naming format will be{' '}
                                        <b>Full Name_NIM_ResumeDay0</b>, the
                                        file should be submitted in pdf format.
                                    </li>
                                    <br />
                                    <li>
                                        The resume must contain:
                                        <ol className='list-[lower-roman] ml-5'>
                                            <li className='mb-2'>
                                                Ganesha MUN Club vision &
                                                mission, organisational
                                                structure, activities, and other
                                                things you’ve learned regarding
                                                the club.
                                            </li>
                                            <li className='mb-2'>
                                                Summary of what you’ve learned
                                                regarding Model United Nations,
                                                such as but not limited to:
                                                history and purpose of MUN, MUN
                                                rules of procedure, MUN lingo,
                                                etc.
                                            </li>
                                            <li className='mb-2'>
                                                Interesting facts about the
                                                United Nations, the United
                                                Nations’ councils, Model United
                                                Nations, or fun
                                                historical/political facts.
                                                Minimum is 1 fact.
                                            </li>
                                            <li className='mb-2'>
                                                How, in your personal opinion,
                                                will the bridging process
                                                benefit you.
                                            </li>
                                        </ol>
                                    </li>
                                    <br />
                                    <li>
                                        The deadline for this task will be on
                                        Tuesday, 13th September 2022, 23:59.
                                    </li>
                                    <br />
                                    <li>
                                        If there are any questions, ask them in
                                        the Ca-GMUNC bridging line group.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <SubmitButton>
                        <a
                            href='https://forms.gle/9azL5j2CHYqoGbRD7'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Submit Assignment
                        </a>
                    </SubmitButton>
                </div>
            </div>
        </div>
    );
};

const SubmitButton = ({ children }) => {
    return (
        <button className='px-4 py-2 bg-sand-medium text-brown font-gbDisplay text-3xl font-light lg:hover:bg-[#b3541e] lg:hover:text-sand-light flex items-center'>
            {children}
        </button>
    );
};

export default Quest0;
