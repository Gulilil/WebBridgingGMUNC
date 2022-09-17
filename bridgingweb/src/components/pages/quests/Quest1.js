import gmunc_dark from '../../../assets/Logo_dark.png';
import imgbg from '../../../assets/Hunger Games/Quest1.jpg';

const Quest0 = () => {
    return (
        <div className='text-brown relative'>
            <div
                className='h-[600px] flex justify-center items-center'
                style={{
                    backgroundImage: `url("${imgbg}")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className='bg-sand-light w-11/12 lg:min-w-[40%] lg:w-auto lg:px-16 py-14 flex-col items-center drop-shadow-2xl'>
                    <img
                        class='w-[200px] mx-auto mb-5'
                        src={gmunc_dark}
                        alt=''
                    />
                    <h1 class='text-4xl md:text-5xl lg:text-7xl text-center font-gbDisplay mt-5'>
                        {' '}
                        Quest 1
                    </h1>
                </div>
            </div>
            <div className='flex flex-col mt-8 w-11/12 mx-auto gap-10 relative'>
                <div className=' bg-[#C18D56] w-full max-w-[1024px] mx-auto shadow-lg flex flex-col items-center px-8 pt-6 pb-10 gap-6 rounded mt-14 lg:mb-6'>
                    <h3 className='font-gbDisplay py-3 px-4 text-4xl bg-sand-medium shadow-sm'>
                        Resume
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='w-5/6 flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'fw-full flex flex-col py-6 px-5 md:px-8 gap-4 text-base md:text-xl shadow-sm bg-sand-medium rounded-sm'
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
                                        <b>Full Name_NIM_ResumeDay1</b>, the
                                        file should be submitted in pdf format.
                                    </li>
                                    <br />
                                    <li>
                                        The resume must contain:
                                        <ol className='list-[lower-roman] ml-5'>
                                            <li className='mb-2'>
                                                What you’ve learned about
                                                research and the reason why we
                                                need to be good at research;
                                            </li>
                                            <li className='mb-2'>
                                                Explain the DIVE method and each
                                                of its components;
                                            </li>
                                            <li className='mb-2'>
                                                Explain why a good speech is
                                                important, what are the best
                                                methods of speech, and how to
                                                get attention from your
                                                audience;
                                            </li>
                                            <li className='mb-2'>
                                                How, in your personal opinion,
                                                will today's materials benefit
                                                you?
                                            </li>
                                        </ol>
                                    </li>
                                    <br />
                                    <li>
                                        The deadline for this task will be on{' '}
                                        {''}
                                        <b>
                                            Wednesday, 21th September 2022,
                                            23:59.
                                        </b>
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
                            href='https://forms.gle/aE1YaCSmj4YDULU28'
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
                        SUB-DISTRICTS INTERVIEW
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='w-5/6 flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'w-full flex flex-col py-6 px-5 md:px-8 gap-4 text-base md:text-xl shadow-sm bg-sand-medium rounded-sm'
                                }
                            >
                                <ol className='list-decimal ml-4'>
                                    <li>
                                        Ca-GMUNC 2022 must carry out interviews
                                        in order to get to know each other
                                        better, with the duration of September,
                                        <b>Friday the 17th</b> to{' '}
                                        <b>
                                            September, Friday the 30th 2022 on
                                            23.59 WIB.
                                        </b>
                                    </li>
                                    <br />
                                    <li>
                                        You <b>must</b> interview{' '}
                                        <b>every Sub-Districts</b>
                                        of <b>your District</b> group. For
                                        example, if you are from District 1 and
                                        Sub-District 1, you must interview
                                        everyone in Sub-District 1 as well as
                                        everyone from the other two
                                        Sub-Districts. Therefore, the{' '}
                                        <b>
                                            total number of interviewees you
                                            must gather by the deadline is the
                                            total number of Tributes in your
                                            District.
                                        </b>
                                    </li>
                                    <br />
                                    <li>
                                        The interview should be done with your
                                        other Sub-District members as well, and
                                        is encouraged to be held <b>offline.</b>{' '}
                                        If any of the Tributes are unable to
                                        join because of urgent reasons (ex.
                                        illness), they may join via <b>Zoom,</b>{' '}
                                        making the interview session a hybrid
                                        one. The
                                        <b>maximum number</b> of sub-districts
                                        in an interview session is <b>two.</b>
                                    </li>
                                    <br />
                                    <li>
                                        The required interview questions are:
                                        <ol className='list-[lower-latin] ml-5 flex flex-col gap-2'>
                                            <li>
                                                Formatted questions:
                                                <ol className='list-[lower-roman] ml-5 flex flex-col gap-2'>
                                                    <li>What’s your name?</li>
                                                    <li>NIM</li>
                                                    <li>
                                                        What’s your
                                                        faculty/major?
                                                    </li>
                                                    <li>Batch</li>
                                                    <li>
                                                        What’s your reason for
                                                        joining GMUNC?
                                                    </li>
                                                    <li>
                                                        Which GMUNC staff
                                                        division would you like
                                                        to enter?
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                Non-specific questions:
                                                <ol className='list-[lower-roman] ml-5 flex flex-col gap-2'>
                                                    <li>
                                                        Every member must ask
                                                        two additional questions
                                                        that will be answered by
                                                        the other members
                                                        present in the meeting.
                                                    </li>
                                                    <li>
                                                        The questions are left
                                                        to the discretion of
                                                        each tribute.
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Tributes are <b>highly encouraged</b> to
                                        talk about topics beyond the required
                                        questions and engage with each other
                                        beyond the time limit.
                                    </li>
                                    <br />
                                    <li>
                                        The interview <b>must not</b> contain
                                        SARA and/or any offensive material,
                                        gesture, or symbol.
                                    </li>
                                    <br />
                                    <li>
                                        It is <b>highly encouraged</b> that
                                        Tributes spend at least{' '}
                                        <b>30 minutes</b> together in the
                                        interview session.
                                    </li>
                                    <br />
                                    <li>
                                        The results of each interview must be
                                        written in the{' '}
                                        <b>Journal Bridging GMUNC</b>, with{' '}
                                        <b>proof of documentation</b>. Should it
                                        be held online, though not encouraged,
                                        you should also include the proof of
                                        duration (minimum of 30 minutes). When
                                        you need more pages, copy the slide that
                                        you need.
                                    </li>
                                    <br />
                                    <li>
                                        The interview method is left to the
                                        discretion of the tributes. Think of
                                        this as a bonding opportunity, be
                                        creative! You can hold interviews
                                        outside of ITB as well, in cafes,
                                        tourist sites, coworking spaces, etc.
                                    </li>
                                    <br />
                                    <li>
                                        The template of the journal can be seen
                                        on{' '}
                                        <a
                                            href='https://www.bit.ly/TemplateResumeBridging2022'
                                            rel='noreferrer'
                                            target='_blank'
                                            className='inline font-semibold hover:underline'
                                        >
                                            bit.ly/TemplateResumeBridging2022
                                        </a>
                                    </li>
                                    <br />
                                    <li>
                                        If you have questions, please fill the
                                        spreadsheet FAQ Task{' '}
                                        <a
                                            href='https://docs.google.com/spreadsheets/d/13FCaN0M1dqTz1knbTsr01N7daFAOmLud1C37i5DHBsI/edit?usp=sharing'
                                            rel='noreferrer'
                                            target='_blank'
                                            className='inline font-semibold hover:underline'
                                        >
                                            here
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <SubmitButton>
                        <a
                            href='https://forms.gle/F4DcugbRRmRraMVz7 '
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
                        ARGUMENTATIVE ESSAY
                    </h3>
                    <div className='w-full flex flex-col items-center gap-8'>
                        <div className='w-5/6 flex flex-col justify-center md:flex-row gap-8'>
                            <div
                                className={
                                    'w-full flex flex-col py-6 px-5 md:px-8 gap-4 text-base md:text-xl shadow-sm bg-sand-medium rounded-sm'
                                }
                            >
                                <p>
                                    An argumentative essay is a piece of writing
                                    that uses factual evidence and logical
                                    support to convince the reader of a certain
                                    way of thinking. Although many types of
                                    essays aim at persuading the reader to
                                    believe a specific point of view,
                                    argumentative essays rely heavily on hard
                                    evidence, drawing on other studies and
                                    sources to prove their argument is best.{' '}
                                </p>
                                <ol className='list-decimal ml-4'>
                                    <li>
                                        he requirements for this essay are as
                                        follows:
                                        <ol className='list-[lower-latin] ml-5 flex flex-col gap-2'>
                                            <li>
                                                The topic is an international
                                                issue of your choosing.
                                            </li>
                                            <li>
                                                The essay must contain three
                                                parts: a claim or thesis,
                                                evidence/support/proofs, and
                                                conclusion. Tributes are free to
                                                add to these parts.
                                            </li>
                                        </ol>
                                    </li>
                                    <br />
                                    <li>
                                        Tributes are highly encouraged to use
                                        the DIVE method.
                                    </li>
                                    <br />
                                    <li>
                                        The minimum word count is 400 words.
                                    </li>
                                    <br />
                                    <li>The file should be posted in Medium</li>
                                    <li>
                                        The deadline for this task will be on{' '}
                                        <b>
                                            Saturday, 24th September 2022, 23:59
                                        </b>
                                    </li>
                                    <br />
                                    <li>
                                        If you have questions, please fill the
                                        spreadsheet FAQ Task{' '}
                                        <a
                                            href='https://docs.google.com/spreadsheets/d/13FCaN0M1dqTz1knbTsr01N7daFAOmLud1C37i5DHBsI/edit?usp=sharing'
                                            rel='noreferrer'
                                            target='_blank'
                                            className='inline font-semibold hover:underline'
                                        >
                                            here
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <SubmitButton>
                        <a
                            href='https://forms.gle/F4DcugbRRmRraMVz7'
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
        <button className='px-8 py-4 bg-[#e2cbb1] text-brown font-gbDisplay text-3xl font-light lg:hover:bg-[#b3541e] lg:hover:text-sand-light flex items-center'>
            {children}
        </button>
    );
};

export default Quest0;
