import azureDeveloperAssociateBadge from 'assets/badges/microsoft-certified-associate-badge.svg';
import awsCloudQuestPracitionerBadge from 'assets/badges/aws-cloud-quest-cloud-practitioner.png';

export const AboutDescription = [
  'I can be referred to as Ry or R.',

  `R has 1 year of experience in Information Technology field. Skilled in frontend and 
  backend development building end-to-end solutions on web and software projects that 
  adhere to functional and technical requirements, and coding standards.`,

  `Currently employed as Jr. Software Engineer at Cognizant Softvision and working as 
  developer and consultant to the client/s. Have worked on two (2) projects with an 
  international accounting company (one of the largest in United States). Attended and 
  completed CSV Academy Program focused on Java Development.`,

  `Has Microsoft Certified: Azure Developer Associate certification. Graduated Magna 
  Cum Laude in BS in Information Technology.`,

  `Actively upskilling on a regular basis, whether it is widening of knowledge or 
  adding new technology. Attending dev webinar, seminar, and conferences.`,
];

export const Badges = [
  {
    alt: 'Microsoft Certified: Azure Developer Associate',
    image: azureDeveloperAssociateBadge,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/RyanAristosa-4697/EF4B344D029B736?sharingId=F4BB15E7FDAA6DF4',
  },
  {
    alt: 'AWS Cloud Quest: Clout Practitioner',
    image: awsCloudQuestPracitionerBadge,
    link: 'https://www.credly.com/badges/430a8142-ccf3-423e-92cf-497ab4654674',
  },
];

export const TechnicalSkills = {
  Languages: {
    Java: 'success',
    HTML: 'success',
    CSS: 'success',
    Javascript: 'success',
    Typescript: 'success',
  },
  Frontend: {
    ReactJS: 'secondary',
    Bootstrap: 'secondary',
    MaterialUI: 'secondary',
  },
  Backend: {
    'Spring Boot': 'warning',
    'Node.js': 'warning',
    Restify: 'warning',
    Fastify: 'warning',
    Knex: 'warning',
  },
  Database: { MySQL: 'warning', PosgreSQL: 'warning', MSSQL: 'warning' },
  'Unit testing': { JUnit: 'primary', Jest: 'primary' },
  Cloud: { 'Microsoft Azure': 'primary', 'Amazon Web Services': 'primary' },
  'Other technology': { Docker: 'primary', Git: 'primary' },
  'Other languages': {
    'C#': 'success',
    Python: 'success',
    Kotlin: 'success',
    PHP: 'success',
  },
};
