import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { JobDetailsList } from "./jobDetails/JobDetailsList";
import { JobDetailsCreate } from "./jobDetails/JobDetailsCreate";
import { JobDetailsEdit } from "./jobDetails/JobDetailsEdit";
import { JobDetailsShow } from "./jobDetails/JobDetailsShow";
import { InterviewSessionList } from "./interviewSession/InterviewSessionList";
import { InterviewSessionCreate } from "./interviewSession/InterviewSessionCreate";
import { InterviewSessionEdit } from "./interviewSession/InterviewSessionEdit";
import { InterviewSessionShow } from "./interviewSession/InterviewSessionShow";
import { JobDescriptionList } from "./jobDescription/JobDescriptionList";
import { JobDescriptionCreate } from "./jobDescription/JobDescriptionCreate";
import { JobDescriptionEdit } from "./jobDescription/JobDescriptionEdit";
import { JobDescriptionShow } from "./jobDescription/JobDescriptionShow";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { ScanResultList } from "./scanResult/ScanResultList";
import { ScanResultCreate } from "./scanResult/ScanResultCreate";
import { ScanResultEdit } from "./scanResult/ScanResultEdit";
import { ScanResultShow } from "./scanResult/ScanResultShow";
import { ApplicantList } from "./applicant/ApplicantList";
import { ApplicantCreate } from "./applicant/ApplicantCreate";
import { ApplicantEdit } from "./applicant/ApplicantEdit";
import { ApplicantShow } from "./applicant/ApplicantShow";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ResumeMatcherService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="JobDetails"
          list={JobDetailsList}
          edit={JobDetailsEdit}
          create={JobDetailsCreate}
          show={JobDetailsShow}
        />
        <Resource
          name="InterviewSession"
          list={InterviewSessionList}
          edit={InterviewSessionEdit}
          create={InterviewSessionCreate}
          show={InterviewSessionShow}
        />
        <Resource
          name="JobDescription"
          list={JobDescriptionList}
          edit={JobDescriptionEdit}
          create={JobDescriptionCreate}
          show={JobDescriptionShow}
        />
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="ScanResult"
          list={ScanResultList}
          edit={ScanResultEdit}
          create={ScanResultCreate}
          show={ScanResultShow}
        />
        <Resource
          name="Applicant"
          list={ApplicantList}
          edit={ApplicantEdit}
          create={ApplicantCreate}
          show={ApplicantShow}
        />
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
      </Admin>
    </div>
  );
};

export default App;
