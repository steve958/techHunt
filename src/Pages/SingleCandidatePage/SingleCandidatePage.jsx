import React from 'react';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ctx } from '../../Components/ProviderComp/ProviderComp';
import { useContext } from 'react';
import "./SingleCandidatePage.scss"
import CardReports from '../../Components/CardReports/CardReports';
import SingleCandidateReportModal from '../../Components/SingleCandidateReportModal/SingleCandidateReportModal';
import { useState } from 'react';

export const SinglePage = () => {
  const { id } = useParams();
  const value = useContext(ctx);

  const [isModal, setModal] = useState(false)
  const [reportData, setreportData] = useState({})
  return (
    <>
      <div className='singlepage-candidate-container-master'>
        <Header></Header>
        {isModal && <SingleCandidateReportModal reportData={reportData} setModal={setModal}></SingleCandidateReportModal>}
        <div className='singlepage-candidate-container'>{value.candidatesData.filter((e) => e.id === id * 1).map((e) => {
          // console.log(e)
          return <div className='singlepage-candidate-wrapper'>
            <div className='img-first-wrapper'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ic_person_48px.svg/240px-Ic_person_48px.svg.png" />
            </div>
            <div className='info-second-wrapper'>
              <div className='info-second-wrapper-forcenter'>
                <div className='name-and-birthday-wrapper'>
                  <h1>Name:<br />{e.name}</h1>
                  <h1>Date of Birth:<br />{e.birthday}</h1>
                </div>
                <div className='email-and-education-wrapper'>
                  <h1>Education: <br />{e.education}</h1>
                  <h1>Email: <br />{e.email}</h1>
                </div>
              </div>
            </div>
          </div>
        })}


        </div>
        <div className='singlepage-candidate-table-container'>
          {value.reportsData.filter((e) => e.candidateId === (id * 1)).map((e) => {
            console.log(e)
            return <div className='singlepage-singlecandidatereport-wrapper'>
              <h1>{e.companyName}</h1>
              <h2>{e.phase}</h2>
              <h2>{e.status}</h2>
              <button onClick={(() => {
                setModal(!isModal)
                setreportData(e)
              })}>See more</button>
            </div>
          })}




        </div>
      </div>
    </>
  );
};

export default SinglePage;
