import React from 'react';
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import 'components/SkillsTable/SkillsTable.css';
import { TechnicalSkills as technicalSkills } from 'utilities/about';

const HeadTableCell = styled(TableCell)({
  fontSize: '1rem',
  fontWeight: '600',
  letterSpacing: '0.07em',
  padding: '16px 24px',
});

const BodyTableCell = styled(TableCell)({
  fontSize: '0.93rem',
  letterSpacing: '0.07em',
  padding: '16px 24px',
});

const SkillsTable = () => {
  const showTechnology = (key) =>
    Object.keys(technicalSkills[key]).map((skillKey) => (
      <Chip
        label={skillKey}
        variant='outlined'
        color={technicalSkills[key][skillKey]}
        sx={{
          fontSize: '0.87rem',
          margin: '4px',
          backgroundColor: '#F7F7F7',
        }}
        key={skillKey}
      />
    ));

  const showTechnicalSkills =
    technicalSkills &&
    Object.keys(technicalSkills).map((key) => (
      <TableRow key={key}>
        <BodyTableCell>{key}</BodyTableCell>
        <BodyTableCell sx={{ paddingLeft: 0 }}>
          {showTechnology(key)}
        </BodyTableCell>
      </TableRow>
    ));

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ maxWidth: '768px', margin: 'auto', marginTop: '64px' }}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <HeadTableCell>Area</HeadTableCell>
            <HeadTableCell sx={{ paddingLeft: 0 }}>Stack</HeadTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{showTechnicalSkills}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillsTable;
