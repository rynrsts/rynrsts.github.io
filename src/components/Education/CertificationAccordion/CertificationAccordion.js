import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

import 'components/Education/CertificationAccordion/CertificationAccordion.css'
import { Styles } from 'utilities/constants/constants';
import { Certifications as certifications } from 'utilities/data/certification';

const {
  LETTER_SPACING: letterSpacing,
  SIZE: { MOBILE: mobile, SPACING: spacing },
} = Styles;

const CustomTypography = styled(Typography)({
  letterSpacing: letterSpacing,
});

const CertificationAccordion = () => {
  const showCertifications =
    certifications.length > 0 &&
    certifications.map((value, index) => (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{ padding: `8px ${spacing}` }}
        >
          <CustomTypography>{value.title}</CustomTypography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTypography
            sx={{ fontSize: '0.87rem', color: 'text.secondary' }}
          >
            {value.date}
          </CustomTypography>
          <CustomTypography sx={{ marginTop: '12px' }}>
            {value.issuer}
          </CustomTypography>
          {value.details !== '' && (
            <CustomTypography sx={{ marginTop: '16px' }}>
              {value.details}
            </CustomTypography>
          )}
          {value.link !== '' && (
            <div className='show-credential'>
              <Button
                variant='text'
                endIcon={<ArrowForwardIosIcon />}
                href={value.link}
                target='_blank'
                sx={{
                  fontSize: '1rem',
                  textTransform: 'none',
                  marginTop: spacing,
                }}
              >
                Show Credential
              </Button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    ));

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: mobile,
        margin: 'auto',
        backgroundColor: 'inherit',
      }}
    >
      {showCertifications}
    </Paper>
  );
};

export default CertificationAccordion;
