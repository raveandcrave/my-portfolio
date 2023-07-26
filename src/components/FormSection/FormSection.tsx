import SectionMotion from '../SectionMotion/SectionMotion';
import ContactForm from '../ContactForm/ContactForm';

import Title from '../Title/Title';
import {FormSectionProps} from './FromSection.props';

const FormSection = ({t}: FormSectionProps) => {
  return (
    <SectionMotion className="py-24" id="contact">
      <Title tag="h2" className="mb-10 mx-auto text-center">
        {t('contact-section.title')}
      </Title>
      <ContactForm />
    </SectionMotion>
  );
};

export default FormSection;
