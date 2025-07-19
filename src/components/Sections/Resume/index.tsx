import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Certification">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
          
        </ResumeSection>
        <div style={{display:'flex', padding:'10px 0px '}}>
            <div style={{width:'50%'}}>
              <a href="https://www.hackerrank.com/certificates/iframe/0965d1f32c96"><img src="/c_1.png" style={{width:'80%', marginLeft:'10%', boxShadow:'0px 3px 3px 0px rgba(0,0,0,0.7)'}} alt="" /></a>
            </div>
            <div style={{width:'50%'}}>
              <a href="https://www.hackerrank.com/certificates/iframe/644e79bf4aea"><img src="/c_2.png" style={{width:'80%', marginLeft:'10%', boxShadow:'0px 3px 3px 0px rgba(0,0,0,0.7)'}} alt="" /></a>
            </div>
        </div>
        <ResumeSection title="Stack">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
