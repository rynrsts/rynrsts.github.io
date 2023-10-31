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

import { Certifications as certifications } from 'utilities/certification';

const CustomTypography = styled(Typography)({
  letterSpacing: '1px',
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
        >
          <CustomTypography>{value.title}</CustomTypography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomTypography sx={{ fontSize: '14px', color: 'text.secondary' }}>
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
            <Button
              variant='text'
              endIcon={<ArrowForwardIosIcon />}
              href={value.link}
              target='_blank'
              sx={{ marginTop: '24px' }}
            >
              Show Credential
            </Button>
          )}
        </AccordionDetails>
      </Accordion>
    ));

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '768px',
        margin: 'auto',
        backgroundColor: 'inherit',
      }}
    >
      {showCertifications}
    </Paper>
  );
};

export default CertificationAccordion;
