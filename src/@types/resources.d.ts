interface Resources {
  header: {
    about: 'about';
    experience: 'experience';
    contact: 'contact';
    resume: 'resume';
  };
  translation: {
    'title-section': {
      name: 'Viktor Kopan.';
      hello: 'Hello! My name is';
      developer: "I'm frontend developer.";
      description: 'Я специализируюсь на воплощении в жизнь удобных и отзывчивых пользовательских интерфейсов. Буду рад запустить или улучшить ваш продукт';
    };
    'about-section': {
      title: 'About Me';
      description: '';
      'image-alt': 'photo';
      'skills-title': 'Here are the technologies I work with:';
    };
    'experience-section': {
      title: 'My Way';
      omstu: {
        title: 'Omsk State Technical University';
        dates: '2016-2020';
        description: 'Bachelor. Energy Institute. Power industry and electrical engineering. Although it was not specifically intended for future work, but here I gained knowledge about the basic concepts in programming and in the end I realized that my interest lies in web development.';
      };
      freelance: {
        title: 'Freelance';
        dates: 'March - September 2021';
        description: 'HTML. Responsive layout of sites landing on October CMS';
      };
      krds: {
        title: 'Omsk State Technical University';
        dates: '2016-2020';
        description: 'Bachelor. Energy Institute. Power industry and electrical engineering. Although it was not specifically intended for future work, but here I gained knowledge about the basic concepts in programming and in the end I realized that my interest lies in web development.';
      };
    };
    'contact-section': {
      title: 'Contact';
      name: 'name';
      email: 'email';
      message: 'message';
      invalid: 'invalid';
      maxLength: 'maximum symbols';
      submit: 'Contact me';
      required: {
        name: 'name is required';
        email: 'email is required';
        message: 'message is required';
      };
    };
  };
}

export default Resources;
