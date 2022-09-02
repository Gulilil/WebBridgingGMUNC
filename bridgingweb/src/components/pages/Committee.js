import React from 'react';
import { Link } from 'react-router-dom';
import './Committee.css';
import Dir_Asih from '../../assets/Committee Photos/Director_Asih.png';
import ViceDir_Gaizka from '../../assets/Committee Photos/ViceDirector_Gaizka.png';
import Sec_Cherrylia from '../../assets/Committee Photos/Secretary_Cherrylia.png';
import Trs_Chlara from '../../assets/Committee Photos/Treasurer_Chlara.png';
import Event_Yesha from '../../assets/Committee Photos/Event_Yesha.png';
import Event_Adhima from '../../assets/Committee Photos/Event_Adhima.png';
import Event_Karen from '../../assets/Committee Photos/Event_Karen.png';
import Event_Keisha from '../../assets/Committee Photos/Event_Keisha.png';
import Event_Marcia from '../../assets/Committee Photos/Event_Marcia.png';
import Event_Trevanka from '../../assets/Committee Photos/Event_Trevanka.png';
import Event_Damas from '../../assets/Committee Photos/Events_Damas.png';
import Event_Anggia from '../../assets/Committee Photos/Event_Anggia.png';
import Event_Marvin from '../../assets/Committee Photos/Events_Marvin.png';
import Event_Eriezzha from '../../assets/Committee Photos/Events_Eriezzha.png';
import Event_Marlyane from '../../assets/Committee Photos/Events_Marlyane.png';
import Acads_Alyosha from '../../assets/Committee Photos/Academics_Alyosha.png';
import Acads_Annisa from '../../assets/Committee Photos/Academics_Annisa.png';
import Acads_Chema from '../../assets/Committee Photos/Academics_Chema.png';
import Acads_Alia from '../../assets/Committee Photos/Academics_Alia.png';
import Acads_Disney from '../../assets/Committee Photos/Academics_Disney Jason.png';
import CretPub_Atha from '../../assets/Committee Photos/CretPub_Atha.png';
import CretPub_Haifa from '../../assets/Committee Photos/CretPub_Haifa.png';
import CretPub_Zidni from '../../assets/Committee Photos/CretPub_Zidni.png';
import CretPub_Qori from '../../assets/Committee Photos/CretPub_Qori.png';
import CretPub_Fayola from '../../assets/Committee Photos/CretPub_Fayola.png';
import HR_Aniqa from '../../assets/Committee Photos/HR_Aniqa.png';
import HR_Athifah from '../../assets/Committee Photos/HR_Athifah.png';
import HR_Fathiya from '../../assets/Committee Photos/HR_Fathiya.png';
import HR_Hafizh from '../../assets/Committee Photos/HR_Hafizh.png';
import HR_Nadia from '../../assets/Committee Photos/HR_Nadia.png';
import HR_Raisha from '../../assets/Committee Photos/HR_Raisha.png';
import OpsIT_Ghalib from '../../assets/Committee Photos/OpsIT_Ghalib.png';
import OpsIT_Juan from '../../assets/Committee Photos/OpsIT_Juan.png';
import OpsIT_Rinaldy from '../../assets/Committee Photos/OpsIT_Rinaldy.png';
import OpsIT_Daffa from '../../assets/Committee Photos/OpsIT_Daffa.png';
import OpsIT_Fadhlur from '../../assets/Committee Photos/OpsIT_Fadhlur.png';
import OpsIT_Nadhira from '../../assets/Committee Photos/OpsIT_Nadhira.png';
import OpsIT_Rikiya from '../../assets/Committee Photos/OpsIT_Rikiya.png';
import dummy from '../../assets/Committee Photos/dummy.jpg';

const Committee = () => {
    return (
        <div className='background text-brown min-h-screen'>
            <div className='documphoto'></div>
            <p className='flex text-4xl justify-center md:text-6xl pt-20 font-bold font-gbDisplay'>
                {' '}
                OUR COMMITTEE{' '}
            </p>
            <div className='flex flex-col mt-8 w-11/12 mx-auto gap-10'>
                {committeeData.map((data, idx) => (
                    <DivisionBoard {...data} key={`divisonboard-${idx}`} />
                ))}
            </div>
            {/* <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'> DIRECTOR </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Dir_Asih} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Kinanti Wening Asih{' '}
                        </p>
                        <p className='smallerprofiletext'> Director </p>
                        <p className='nimtext font-gbDisplay'> 18221044 </p>
                        <p> Information System </p>
                        <p> and Technology </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={ViceDir_Gaizka} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Gaizka Adilla Zahraini{' '}
                        </p>
                        <p className='smallerprofiletext'> Vice Director </p>
                        <p className='nimtext font-gbDisplay'> 10721099 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'>
                        SECRETARIES-GENERAL{' '}
                    </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Sec_Cherrylia} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Cherrylia Shafaa Putri{' '}
                        </p>
                        <p className='smallerprofiletext'> Secretary </p>
                        <p className='nimtext font-gbDisplay'> 10721078 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Trs_Chlara} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Chlara Puspa Amalia{' '}
                        </p>
                        <p className='smallerprofiletext'> Treasurer </p>
                        <p className='nimtext font-gbDisplay'> 10721042 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'> EVENT </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Yesha} />
                        <p className='biggerprofiletext'> Yesha Aurellya </p>
                        <p className='smallerprofiletext'> Head of Event </p>
                        <p className='nimtext font-gbDisplay'> 13021007 </p>
                        <p> Chemical Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Anggia} />
                        <p className='biggerprofiletext'> Anggia Putri </p>
                        <p className='biggerprofiletext'> Sinulingga </p>
                        <p className='nimtext font-gbDisplay'> 13321072 </p>
                        <p> Engineering Physics </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Damas} />
                        <p className='biggerprofiletext'> Damas Rizaladib </p>
                        <p className='biggerprofiletext'> Syabana </p>
                        <p className='nimtext font-gbDisplay'> 13021040 </p>
                        <p> Chemical Engineering </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Karen} />
                        <p className='biggerprofiletext'> Karen Anne Mary </p>
                        <p className='nimtext font-gbDisplay'> 10821027 </p>
                        <p> Actuarial Science </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Trevanka} />
                        <p className='biggerprofiletext'> Trevanka Fyovella </p>
                        <p className='nimtext font-gbDisplay'> 19021125 </p>
                        <p> International Business </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Adhima} />
                        <p className='biggerprofiletext'> Adhima Al Azmy </p>
                        <p className='nimtext font-gbDisplay'> 15121048 </p>
                        <p> Geological Engineering </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Marvin} />
                        <p className='biggerprofiletext'> Marvin Naditya </p>
                        <p className='biggerprofiletext'> Pratama </p>
                        <p className='nimtext font-gbDisplay'> 13021047 </p>
                        <p> Chemical Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Keisha} />
                        <p className='biggerprofiletext'> Keisha Maylafaza </p>
                        <p className='biggerprofiletext'> Salsabila </p>
                        <p className='nimtext font-gbDisplay'> 10121038 </p>
                        <p> Mathematics</p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Event_Marcia} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Marcia Alana Sjarief{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 15321017 </p>
                        <p> Enviromental Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={dummy} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Erriezzha Arriefqi{' '}
                        </p>
                        <p className='biggerprofiletext'> Hidayat </p>
                        <p className='nimtext font-gbDisplay'> 12121060 </p>
                        <p> Mining Engineering</p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={dummy} />
                        <p className='biggerprofiletext'> Marlyane Faith </p>
                        <p className='biggerprofiletext'> Walangitan </p>
                        <p className='nimtext font-gbDisplay'> 19021035 </p>
                        <p> International Business </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'> ACADEMICS </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Acads_Chema} />
                        <p className='biggerprofiletext'> Raditya Chema</p>
                        <p className='biggerprofiletext'> Hafizh Pradigta </p>
                        <p className='smallerprofiletext'>
                            {' '}
                            Head of Academics{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 13621005 </p>
                        <p> Aerospace Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={dummy} />
                        <p className='biggerprofiletext'> Disney Jason </p>
                        <p className='nimtext font-gbDisplay'> 13621022 </p>
                        <p> Aerospace Engineering </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={dummy} />
                        <p className='biggerprofiletext'> Aurelia Zadira </p>
                        <p className='nimtext font-gbDisplay'> 13121034 </p>
                        <p> Mechanical Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Acads_Annisa} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Annisa Edi Setiyani
                        </p>
                        <p className='nimtext font-gbDisplay'> 15421121 </p>
                        <p> Urban and Regional Planning </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={Acads_Alyosha} />
                        <p className='biggerprofiletext'> M. Alyosha </p>
                        <p className='biggerprofiletext'> Rizqullah Akbar</p>
                        <p className='nimtext font-gbDisplay'> 19021100 </p>
                        <p> International Business </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'> HUMAN RESOURCES </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Fathiya} />
                        <p className='biggerprofiletext'> Fathiya Amani </p>
                        <p className='biggerprofiletext'> Shabira </p>
                        <p className='smallerprofiletext'>
                            {' '}
                            Head of Human Resources{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 13221032 </p>
                        <p> Electrical Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Athifah} />
                        <p className='biggerprofiletext'> Athifah Helga </p>
                        <p className='biggerprofiletext'> Amaranta Daulay </p>
                        <p className='nimtext font-gbDisplay'> 10521075 </p>
                        <p> Chemistry </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Nadia} />
                        <p className='biggerprofiletext'> Nadia Amalia </p>
                        <p className='nimtext font-gbDisplay'> 10621053 </p>
                        <p> Biology </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Hafizh} />
                        <p className='biggerprofiletext'> Muhammad Hafizh </p>
                        <p className='biggerprofiletext'> Ardhanikusumah </p>
                        <p className='nimtext font-gbDisplay'> 15321006 </p>
                        <p> Environmental Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Aniqa} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Aniqa Fayyaza Akbar{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 18221020 </p>
                        <p> Information System </p>
                        <p> and Technology </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={HR_Raisha} />
                        <p className='biggerprofiletext'>Raisha Amanda </p>
                        <p className='biggerprofiletext'>Permata Radhi </p>
                        <p className='nimtext font-gbDisplay'> 12521038 </p>
                        <p> Metallurgical Engineering </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'>
                        {' '}
                        OPS-IT AND DOCUMENTATION{' '}
                    </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Ghalib} />
                        <p className='biggerprofiletext'> Dhafin Ghalib</p>
                        <p className='biggerprofiletext'> Luqman Hakim </p>
                        <p className='smallerprofiletext'> Head of OPS-IT </p>
                        <p className='smallerprofiletext'>
                            {' '}
                            and Documentation{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 18221023 </p>
                        <p> Information System </p>
                        <p> and Technology </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Juan} />
                        <p className='biggerprofiletext'> Juan Christopher </p>
                        <p className='biggerprofiletext'> Santoso </p>
                        <p className='nimtext font-gbDisplay'> 13521116 </p>
                        <p> Informatics Engineering </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Rinaldy} />
                        <p className='biggerprofiletext'> Rinaldy Adin </p>
                        <p className='nimtext font-gbDisplay'> 13521134 </p>
                        <p> Informatics Engineering </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Fadhlur} />
                        <p className='biggerprofiletext'> Muhammad Fadhlur </p>
                        <p className='biggerprofiletext'> Rahman Ramadhan </p>
                        <p className='nimtext font-gbDisplay'> 12221066 </p>
                        <p> Petroleum Engineering </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Nadhira} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Nadhira Ismi Rasulla{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 10721092 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Daffa} />
                        <p className='biggerprofiletext'> Muhammad Daffa</p>
                        <p className='biggerprofiletext'> Fawwas F. </p>
                        <p className='nimtext font-gbDisplay'> 10221040 </p>
                        <p> Physics </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={OpsIT_Rikiya} />
                        <p className='biggerprofiletext'> Rikiya Kitayama </p>

                        <p className='nimtext font-gbDisplay'> 19021701 </p>
                        <p> International Business </p>
                    </div>
                </div>
            </div>

            <div className='divisionbox drop-shadow-2xl'>
                <div className='divnamebox drop-shadow-lg'>
                    <p className='divname font-gbDisplay'>
                        {' '}
                        CREATIVE AND PUBLICATION{' '}
                    </p>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={CretPub_Zidni} />
                        <p className='biggerprofiletext'> M. Zidni Rizqan</p>
                        <p className='smallerprofiletext'> Head of Creative </p>
                        <p className='smallerprofiletext'> and Publication </p>
                        <p className='nimtext font-gbDisplay'> 13321058 </p>
                        <p> Engineering Physics </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={CretPub_Qori} />
                        <p className='biggerprofiletext'> Qori Ila Taqiyya </p>
                        <p className='biggerprofiletext'> Susanto </p>
                        <p className='nimtext font-gbDisplay'> 15421130 </p>
                        <p> Urban and Regional Planning </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={CretPub_Atha} />
                        <p className='biggerprofiletext'> Atha Araminta </p>
                        <p className='biggerprofiletext'> Risbri Yudianto </p>
                        <p className='nimtext font-gbDisplay'> 10721089 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                </div>
                <div className='rowcontainer'>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={CretPub_Fayola} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Fayola Tabina Arby{' '}
                        </p>
                        <p className='nimtext font-gbDisplay'> 15221013 </p>
                        <p> Architecture </p>
                    </div>
                    <div className='committeebox drop-shadow-lg'>
                        <img className='committeephoto' src={CretPub_Haifa} />
                        <p className='biggerprofiletext'>
                            {' '}
                            Haifa Nurul Karimah
                        </p>
                        <p className='nimtext font-gbDisplay'> 10721008 </p>
                        <p> Pharmaceutical Science </p>
                        <p> and Technology </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

const DivisionBoard = ({ division, heads, staff }) => {
    return (
        <div className='bg-[#C18D56] w-full max-w-[1024px] mx-auto shadow-lg flex flex-col items-center px-6 pt-6 pb-10 gap-6 rounded'>
            <h3 className='font-gbDisplay py-3 px-4 text-4xl bg-sand-medium shadow-sm'>
                {division}
            </h3>
            <div className='w-full flex flex-col items-center gap-8'>
                <div className='flex flex-col justify-center md:flex-row gap-8'>
                    {heads.map((committee, idx) => (
                        <CommiteeCard
                            {...committee}
                            big={true}
                            key={`committeehead-${idx}`}
                        />
                    ))}
                </div>
                <div className='flex flex-col flex-wrap justify-center md:flex-row gap-8'>
                    {staff.map((committee, idx) => (
                        <CommiteeCard
                            {...committee}
                            big={false}
                            key={`committeestaff-${idx}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CommiteeCard = ({ name, position, nim, major, big, imgSrc }) => {
    const containerClassName = `w-full flex flex-col py-6 px-5 md:px-8 gap-4 ${
        big ? 'md:w-[300px]' : 'md:w-[260px]'
    } shadow-sm bg-sand-medium rounded-sm`;

    const imgClassName = `w-full ${
        big ? 'md:h-[300px]' : 'md:h-[260px]'
    } object-cover bg-sand-light shadow-md rounded-sm`;

    return (
        <div className={containerClassName}>
            <div className='flex flex-col gap-2 w-full'>
                <img src={imgSrc} alt='Committee' className={imgClassName} />
                <div className='text-center font-semibold'>
                    <p className='mb-1 p-0   font-bold text-xl'>{name}</p>
                    <p className='text-lg'>{position}</p>
                    <div className='font-gbDisplay font-normal text-2xl mt-4'>
                        <p>{nim}</p>
                    </div>
                    <div className='font-normal text-lg'>
                        <p>{major}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committee;

const committeeData = [
    {
        division: 'Directors',
        heads: [
            {
                name: 'Kinanti Wening Asih',
                position: 'Director',
                nim: '18221044',
                major: 'Information System and Technology',
                imgSrc: Dir_Asih,
            },
            {
                name: 'Gaizka Adilla Zahraini',
                position: 'Vice Director',
                nim: '10721099',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: ViceDir_Gaizka,
            },
        ],
        staff: [],
    },
    {
        division: 'SECRETARIES-GENERAL',
        heads: [
            {
                name: 'Cherrylia Shafaa Putri',
                position: 'Secretary',
                nim: '10721078',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: Sec_Cherrylia,
            },
            {
                name: 'Chlara Puspa Amalia',
                position: 'Treasurer',
                nim: '10721042',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: Trs_Chlara,
            },
        ],
        staff: [ ],
    },
    {
        division: 'EVENT',
        heads: [
            {
                name: 'Yesha Aurellya',
                position: 'Head of Event',
                nim: '13021007',
                major: 'Chemical Engineering',
                imgSrc: Event_Yesha,
            },
        ],
        staff: [
            {
                name: 'Anggia Putri',
                position: 'Staff',
                nim: '13321072',
                major: 'Engineering Physics',
                imgSrc: Event_Anggia,
            },
            {
                name: 'Damas Rizaladib Syabana',
                position: 'Staff',
                nim: '13021040',
                major: 'Chemical Engineering',
                imgSrc: Event_Damas,
            },
            {
                name: 'Karen Anne Mary',
                position: 'Staff',
                nim: '10821027',
                major: 'Actuarial Science',
                imgSrc: Event_Karen,
            },
            {
                name: 'Trevanka Fyovella',
                position: 'Staff',
                nim: '19021125',
                major: 'International Business',
                imgSrc: Event_Trevanka,
            },
            {
                name: 'Adhima Al Azmy',
                position: 'Staff',
                nim: '15121048',
                major: 'Geological Engineering',
                imgSrc: Event_Adhima,
            },
            {
                name: 'Marvin Naditya Pratama',
                position: 'Staff',
                nim: '13021047',
                major: 'Chemical Engineering',
                imgSrc: Event_Marvin,
            },
            {
                name: 'Keisha Maylafaza Salsabila',
                position: 'Staff',
                nim: '10121038',
                major: 'Mathematics',
                imgSrc: Event_Keisha,
            },
            {
                name: 'Marcia Alana Sjarief',
                position: 'Staff',
                nim: '15321017',
                major: 'Environmental Engineering',
                imgSrc: Event_Marcia,
            },
            {
                name: 'Eriezzha Arriefqi Hidayat',
                position: 'Staff',
                nim: '12121060',
                major: 'Mining Engineering',
                imgSrc: Event_Eriezzha,
            },
            {
                name: 'Marlyane Faith Walangitan',
                position: 'Staff',
                nim: '19021035',
                major: 'International Business',
                imgSrc: Event_Marlyane,
            },
        ],
    },
    {
        division: 'ACADEMICS',
        heads: [
            {
                name: 'Raditya Chema',
                position: 'Head of Academics',
                nim: '13621005',
                major: 'Aerospace Engineering',
                imgSrc: Acads_Chema,
            },
        ],
        staff: [
            {
                name: 'Disney Jason',
                position: 'Staff',
                nim: '13621022',
                major: 'Aerospace Engineering',
                imgSrc: Acads_Disney,
            },
            {
                name: 'Aurelia Zadira',
                position: 'Staff',
                nim: '13121034',
                major: 'Mechanical Engineering',
                imgSrc: Acads_Alia,
            },
            {
                name: 'Annisa Edi Setiyani',
                position: 'Staff',
                nim: '15421121',
                major: 'Urban and Regional Planning',
                imgSrc: Acads_Annisa,
            },
            {
                name: 'M. Alyosha Rizqullah Akbar',
                position: 'Staff',
                nim: '19021100',
                major: 'International Business',
                imgSrc: Acads_Alyosha,
            },
        ],
    },
    {
        division: 'HUMAN RESOURCES',
        heads: [
            {
                name: 'Fathiya Amani Shabira',
                position: 'Head of Human Resources',
                nim: '13221032',
                major: 'Electrical Engineering',
                imgSrc: HR_Fathiya,
            },
        ],
        staff: [
            {
                name: 'Athifah Helga Amaranta Daulay',
                position: 'Staff',
                nim: '10521075',
                major: 'Chemistry',
                imgSrc: HR_Athifah,
            },
            {
                name: 'Nadia Amalia',
                position: 'Staff',
                nim: '10621053',
                major: 'Biology',
                imgSrc: HR_Nadia,
            },
            {
                name: 'Muhammad Hafizh Ardhanikusumah',
                position: 'Staff',
                nim: '15321006',
                major: 'Environmental Engineering',
                imgSrc: HR_Hafizh,
            },
            {
                name: 'Aniqa Fayyaza Akbar',
                position: 'Staff',
                nim: '18221020',
                major: 'Information System and Technology',
                imgSrc: HR_Aniqa,
            },
            {
                name: 'Raisha Amanda Permata Radhi',
                position: 'Staff',
                nim: '12521038',
                major: 'Metallurgical Engineering',
                imgSrc: HR_Raisha,
            },
        ],
    },
    {
        division: 'OPS-IT AND DOCUMENTATION',
        heads: [
            {
                name: 'Dhafin Ghalib Luqman Hakim',
                position: 'Head of OPS-IT and Documentation',
                nim: '18221023',
                major: 'Information System and Technology',
                imgSrc: OpsIT_Ghalib,
            },
        ],
        staff: [
            {
                name: 'Juan Christopher Santoso',
                position: 'Staff',
                nim: '13521116',
                major: 'Informatics Engineering',
                imgSrc: OpsIT_Juan,
            },
            {
                name: 'Rinaldy Adin',
                position: 'Staff',
                nim: '13521134',
                major: 'Informatics Engineering',
                imgSrc: OpsIT_Rinaldy,
            },
            {
                name: 'Muhammad Fadhlur Rahman Ramadhan',
                position: 'Staff',
                nim: '12221066',
                major: 'Petroleum Engineering',
                imgSrc: OpsIT_Fadhlur,
            },
            {
                name: 'Nadhira Ismi Rasulla',
                position: 'Staff',
                nim: '10721092',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: OpsIT_Nadhira,
            },
            {
                name: 'Muhammad Daffa Fawwas F.',
                position: 'Staff',
                nim: '10221040',
                major: 'Physics',
                imgSrc: OpsIT_Daffa,
            },
            {
                name: 'Rikiya Kitayama',
                position: 'Staff',
                nim: '19021701',
                major: 'International Business',
                imgSrc: OpsIT_Rikiya,
            },
        ],
    },
    {
        division: 'CREATIVE AND PUBLICATION',
        heads: [
            {
                name: 'M. Zidni Rizqan',
                position: 'Head of Creative and Publication',
                nim: '13321058',
                major: 'Engineering Physics',
                imgSrc: CretPub_Zidni,
            },
        ],
        staff: [
            {
                name: 'Qori Ila Taqiyya Susanto',
                position: 'Staff',
                nim: '15421130',
                major: 'Urban and Regional Planning',
                imgSrc: CretPub_Qori,
            },
            {
                name: 'Atha Araminta Risbri Yudianto',
                position: 'Staff',
                nim: '10721089',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: CretPub_Atha,
            },
            {
                name: 'Fayola Tabina Arby',
                position: 'Staff',
                nim: '15221013',
                major: 'Architecture',
                imgSrc: CretPub_Fayola,
            },
            {
                name: 'Haifa Nurul Karimah',
                position: 'Staff',
                nim: '10721008',
                major: 'Pharmaceutical Science and Technology',
                imgSrc: CretPub_Haifa,
            },
        ],
    },
];
